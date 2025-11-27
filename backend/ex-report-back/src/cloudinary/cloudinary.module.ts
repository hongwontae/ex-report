import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

@Module({
  providers: [
    {
      provide: 'CLOUDINARY',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        cloudinary.config({
          cloud_name: configService.get<string>('KEY_NAME'),
          api_key: configService.get<string>('API_KEY'),
          api_secret: configService.get<string>('API_SECRET'),
        });
        return cloudinary;
      },
    },
    CloudinaryService,
  ],
  exports: [CloudinaryService],
})
export class CloudinaryModule {}
