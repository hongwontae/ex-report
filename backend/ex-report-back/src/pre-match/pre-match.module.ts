import { Module } from '@nestjs/common';
import { PreMatchService } from './pre-match.service';
import { PreMatchController } from './pre-match.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreMatchEntity } from './entities/pre-match.entity';
import { PreMatchCoverImageEntity } from './entities/pre-match-cover-image.entity';
import { PreMatchBodyImagesEntity } from './entities/pre-match-body-images.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PreMatchEntity,
      PreMatchCoverImageEntity,
      PreMatchBodyImagesEntity,
    ]),
    CloudinaryModule
  ],
  providers: [PreMatchService],
  controllers: [PreMatchController],
})
export class PreMatchModule {}
