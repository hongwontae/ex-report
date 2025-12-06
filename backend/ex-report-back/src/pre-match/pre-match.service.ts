import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PreMatchEntity } from './entities/pre-match.entity';
import { PreMatchBodyImagesEntity } from './entities/pre-match-body-images.entity';
import { PreMatchCoverImageEntity } from './entities/pre-match-cover-image.entity';
import { PrematchPostType } from '../types/before-match-types/pre-types';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { preMatchContentImgSrcTransition } from './shared-func/pre-match.service.fs';

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

  async preMatchIntroShow(num: number) {
    return await this.preMatchRepository
      .createQueryBuilder('prematch')
      .leftJoinAndSelect('prematch.coverImage', 'coverImage')
      .limit(4)
      .select(['prematch.id', 'prematch.title', 'prematch.content', 'prematch.createdAt', 'coverImage'])
      .getMany()
  }

  async preMatchOneShow(id: number) {
    const preMatch = await this.preMatchRepository.findOne({
      where: { id: id },
      relations: ['coverImage', 'bodyImages'],
    });
    return preMatch;
  }

  async preMatchPagingShow(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [items, total] = await this.preMatchRepository.findAndCount({
      skip,
      take: limit,
      order: { createdAt: 'DESC' },
      relations: ['coverImage'],
    });

    return {
      items,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async preMatchPostSave(
    preMatch: PrematchPostType,
    bodyImagesUniqueIDArr: string[],
    coverImage: Express.Multer.File[],
    bodyImages: Express.Multer.File[],
  ) {
    if (coverImage.length > 1 && coverImage.length <= 0) {
      throw new BadRequestException('Cover Image So Many');
    }

    const firstPrematch = this.preMatchRepository.create({
      title: preMatch.title,
      content: preMatch.content,
    });

    const firstPrematchResult =
      await this.preMatchRepository.save(firstPrematch);

    const coverImageUploadedMetadata = await this.cloudinaryService.uploadImage(
      coverImage[0],
    );

    const coverImageResult = this.preMatchCoverImageRepository.create({
      alt: preMatch.coverImageUniqueID,
      format: coverImageUploadedMetadata.format,
      public_id: coverImageUploadedMetadata.public_id,
      secure_url: coverImageUploadedMetadata.secure_url,
      match: firstPrematchResult,
    });

    const bodyImagesEntity: PreMatchBodyImagesEntity[] = [];

    let newBodyContent = '';

    if (bodyImages) {
      for (const bodyImage of bodyImages) {
        let i = 0;

        const bodyImagesUploadedMetadata =
          await this.cloudinaryService.uploadImage(bodyImage);

        const bodyImagesResults = this.preMatchBodyImageRepository.create({
          alt: bodyImagesUniqueIDArr[i++],
          public_id: bodyImagesUploadedMetadata.public_id,
          format: bodyImagesUploadedMetadata.format,
          secure_url: bodyImagesUploadedMetadata.secure_url,
          match: firstPrematchResult,
        });

        bodyImagesEntity.push(bodyImagesResults);
      }

      newBodyContent = preMatchContentImgSrcTransition(
        preMatch.content,
        bodyImagesEntity,
      );
    }

    const updatedPrematch = await this.preMatchRepository.findOne({
      where: { id: firstPrematchResult.id },
    });

    if (!updatedPrematch) {
      return;
    }

    updatedPrematch.content = newBodyContent
      ? newBodyContent
      : preMatch.content;

    const finalPrematch = await this.preMatchRepository.save(updatedPrematch);
    const cover =
      await this.preMatchCoverImageRepository.save(coverImageResult);
    const images = bodyImages
      ? await this.preMatchBodyImageRepository.save(bodyImagesEntity)
      : {};

    return { finalPrematch, cover, images };
  }
}
