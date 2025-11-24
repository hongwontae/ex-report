import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PreMatchEntity } from './entities/pre-match.entity';
import { PrematchBodyImagesEntity } from './entities/pre-match-body-images';
import { PrematchCoverImageEntity } from './entities/pre-match-cover-image';
import {PrematchPostType} from '../types/before-match-types/pre-types';

@Injectable()
export class PreMatchService {
  constructor(
    @InjectRepository(PreMatchEntity)
    private readonly prematchRepository: Repository<PreMatchEntity>,
    @InjectRepository(PrematchBodyImagesEntity)
    private readonly prematchBodyImageRepository : Repository<PrematchBodyImagesEntity>,
    @InjectRepository(PrematchCoverImageEntity)
    private readonly prematchCoverImageRepository : Repository<PrematchCoverImageEntity>
  ) {}

  async prematchPostSave(prematch : PrematchPostType, bodyImagesUniqueIDArr : string[] ){

    const prematchPost = this.prematchRepository.create({title : prematch.title, content : prematch.content});

    



  }




}
