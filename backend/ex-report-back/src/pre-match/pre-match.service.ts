import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PreMatchEntity } from './entities/pre-match.entity';
import { PreMatchBodyImagesEntity } from './entities/pre-match-body-images.entity';
import {  PreMatchCoverImageEntity} from './entities/pre-match-cover-image.entity';
import { PrematchPostType } from '../types/before-match-types/pre-types';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class PreMatchService {
  constructor(
    @InjectRepository(PreMatchEntity)
    private readonly preMatchRepository: Repository<PreMatchEntity>,
    @InjectRepository(PreMatchBodyImagesEntity)
    private readonly preMatchBodyImageRepository: Repository<PreMatchBodyImagesEntity>,
    @InjectRepository(PreMatchCoverImageEntity)
    private readonly preMatchCoverImageRepository: Repository<PreMatchCoverImageEntity>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async preMatchPostSave(
    prematch: PrematchPostType,
    bodyImagesUniqueIDArr: string[],
    coverImage: Express.Multer.File[],
    bodyImages: Express.Multer.File[],
  ) {
    if (coverImage.length > 1) {
      throw new BadRequestException('Cover Image So Many');
    }

    const firstPrematch = this.preMatchRepository.create({
      title: prematch.title,
      content: prematch.content,
    });

    const firstPrematchResult =
      await this.preMatchRepository.save(firstPrematch);

    const coverMetadata = await this.cloudinaryService.uploadImage(
      coverImage[0],
    );

    const coverImageResult = this.preMatchCoverImageRepository.create({
      alt: prematch.coverImageUniqueID,
      format: coverMetadata.format,
      public_id: coverMetadata.public_id,
      secure_url: coverMetadata.secure_url,
      match: firstPrematchResult,
    });

    const bodyImagesEntity: PreMatchBodyImagesEntity[] = [];

    for (const bodyImage of bodyImages) {
      let i = 0;

      const bodyImageMetadata =
        await this.cloudinaryService.uploadImage(bodyImage);

      const bodyImageResult = this.preMatchBodyImageRepository.create({
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

    const updatedPrematch = await this.preMatchRepository.findOne({
      where: { id: firstPrematchResult.id },
    });
    if (!updatedPrematch) {
      return;
    }
    console.log(updatedPrematch?.content);

    updatedPrematch.content = newBodyContent;

    const finalPrematch = await this.preMatchRepository.save(updatedPrematch);
    const cover = await  this.preMatchCoverImageRepository.save(coverImageResult);
    const images = await this.preMatchBodyImageRepository.save(bodyImagesEntity);

    return { finalPrematch, cover, images };
  }
}
