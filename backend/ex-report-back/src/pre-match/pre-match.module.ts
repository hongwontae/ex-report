import { Module } from '@nestjs/common';
import { PreMatchService } from './pre-match.service';
import { PreMatchController } from './pre-match.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreMatchEntity } from './entities/pre-match.entity';
import { PrematchCoverImageEntity } from './entities/pre-match-cover-image';
import { PrematchBodyImagesEntity } from './entities/pre-match-body-images';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PreMatchEntity,
      PrematchCoverImageEntity,
      PrematchBodyImagesEntity,
    ]),
    CloudinaryModule
  ],
  providers: [PreMatchService],
  controllers: [PreMatchController],
})
export class PreMatchModule {}
