import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PreMatchService } from './pre-match.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { PrematchBodyDto } from './dtos/pre-match-body.dto';
import { FilesValidationPipe } from '../custom/pipes/FilesValidationPipe';
import {BodyImagesUniqueIDArrPipe} from '../custom/pipes/BodyImagesUniqueIDArrPipe';
import * as multer from 'multer';

@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
@Controller('pre-match')
export class PreMatchController {
  constructor(private prematchService: PreMatchService) {}

  @Post('post/save')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'coverImage', maxCount: 1 },
        { name: 'bodyImages', maxCount: 10 },
      ],
      { storage: multer.memoryStorage() },
    ),
  )
  async prematchPostSave(
    @UploadedFiles(new FilesValidationPipe())
    files: {
      coverImage: Express.Multer.File[];
      bodyImages: Express.Multer.File[];
    },
    @Body('bodyImagesUniqueIDArr', new BodyImagesUniqueIDArrPipe()) bodyImagesUniqueIDArr : string[],
    @Body() body: PrematchBodyDto,
  ) {
    console.log(bodyImagesUniqueIDArr);
    console.log(body);
    console.log(files.coverImage)
    console.log(files.bodyImages)
  }


}
