import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PreMatchEntity } from './entities/pre-match.entity';
import { PrematchBodyImagesEntity } from './entities/pre-match-body-images';
import { PrematchCoverImageEntity } from './entities/pre-match-cover-image';
import { PrematchPostType } from '../types/before-match-types/pre-types';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class PreMatchService {
  constructor(
    @InjectRepository(PreMatchEntity)
    private readonly prematchRepository: Repository<PreMatchEntity>,
    @InjectRepository(PrematchBodyImagesEntity)
    private readonly prematchBodyImageRepository: Repository<PrematchBodyImagesEntity>,
    @InjectRepository(PrematchCoverImageEntity)
    private readonly prematchCoverImageRepository: Repository<PrematchCoverImageEntity>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async prematchPostSave(
    prematch: PrematchPostType,
    bodyImagesUniqueIDArr: string[],
    coverImage: Express.Multer.File[],
    bodyImages: Express.Multer.File[],
  ) {
    if (coverImage.length > 1) {
      throw new BadRequestException('Cover Image So Many');
    }

    const firstPrematch = this.prematchRepository.create({
      title: prematch.title,
      content: prematch.content,
    });

    const firstPrematchResult =
      await this.prematchRepository.save(firstPrematch);

    const coverMetadata = await this.cloudinaryService.uploadImage(
      coverImage[0],
    );

    const coverImageResult = this.prematchCoverImageRepository.create({
      alt: prematch.coverImageUniqueID,
      format: coverMetadata.format,
      public_id: coverMetadata.public_id,
      secure_url: coverMetadata.secure_url,
      match: firstPrematchResult,
    });

    const bodyImagesEntity: PrematchBodyImagesEntity[] = [];

    for (const bodyImage of bodyImages) {
      let i = 0;

      const bodyImageMetadata =
        await this.cloudinaryService.uploadImage(bodyImage);

      const bodyImageResult = this.prematchBodyImageRepository.create({
        alt: bodyImagesUniqueIDArr[i++],
        public_id: bodyImageMetadata.public_id,
        format: bodyImageMetadata.format,
        secure_url: bodyImageMetadata.secure_url,
        match: firstPrematchResult,
      });

      bodyImagesEntity.push(bodyImageResult);
    }

    let i = 0;
    const imgRegex = /<img\s+src="blob:[^"]+"/g;
    const newBodyContent = prematch.content.replace(imgRegex, () => {
      const url = bodyImagesEntity[i++].secure_url;
      return `<img src=${url}`;
    });
    console.log(newBodyContent);

    const updatedPrematch = await this.prematchRepository.findOne({
      where: { id: firstPrematchResult.id },
    });
    if (!updatedPrematch) {
      return;
    }
    console.log(updatedPrematch?.content);

    updatedPrematch.content = newBodyContent;

    const finalPrematch = await this.prematchRepository.save(updatedPrematch);
    const cover = await  this.prematchCoverImageRepository.save(coverImageResult);
    const images = await this.prematchBodyImageRepository.save(bodyImagesEntity);

    return { finalPrematch, cover, images };
  }
}
