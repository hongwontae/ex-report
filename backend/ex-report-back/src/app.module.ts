import { Module } from '@nestjs/common';
import { PreMatchModule } from './pre-match/pre-match.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';
import { PreMatchEntity } from './pre-match/entities/pre-match.entity';
import { PrematchBodyImagesEntity } from './pre-match/entities/pre-match-body-images';
import { PrematchCoverImageEntity } from './pre-match/entities/pre-match-cover-image';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        process.env.NODE_ENV === 'development'
          ? '.env.development'
          : '.env.default',
      ],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'ex_report',
      port: 3306,
      host: 'localhost',
      username: 'hwt',
      password: '1234',
      entities: [
        PreMatchEntity,
        PrematchBodyImagesEntity,
        PrematchCoverImageEntity,
      ],
      synchronize: true,
    }),
    PreMatchModule,
    CloudinaryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
