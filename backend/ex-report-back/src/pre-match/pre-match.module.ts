import { Module } from '@nestjs/common';
import { PreMatchService } from './pre-match.service';
import { PreMatchController } from './pre-match.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreMatchEntity } from './entities/pre-match.entity';
import { PrematchCoverImageEntity } from './entities/pre-match-cover-image';
import { PrematchBodyImagesEntity } from './entities/pre-match-body-images';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PreMatchEntity,
      PrematchCoverImageEntity,
      PrematchBodyImagesEntity,
    ]),
  ],
  providers: [PreMatchService],
  controllers: [PreMatchController],
})
export class PreMatchModule {}
