import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PreMatchService } from './pre-match.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { PreMatchBodyDto } from './dtos/pre-match-body.dto';
import { FilesValidationPipe } from '../custom/pipes/FilesValidationPipe';
import { BodyImagesUniqueIDArrPipe } from '../custom/pipes/BodyImagesUniqueIDArrPipe';
import * as multer from 'multer';

@Controller('pre-match')
export class PreMatchController {
  constructor(private preMatchService: PreMatchService) {}

  // test
  @Get('/intro/show')
  async preMatchIntroShow(@Query('num') num : number,){
    const result = await this.preMatchService.preMatchIntroShow(num);
    return result
  }

  @Get('/test/hello')
  async preMatchPagingShow(@Query('page') page: number, @Query('limit') limit : number){  
      const result = await this.preMatchService.preMatchPagingShow(page, limit);
      console.log(result);
      return result;
  }

  
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  @Post('/post/save')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'coverImage', maxCount: 1 },
        { name: 'bodyImages', maxCount: 10 },
      ],
      { storage: multer.memoryStorage() },
    ),
  )
  async preMatchPostSave(
    @UploadedFiles(new FilesValidationPipe())
    files: {
      coverImage: Express.Multer.File[];
      bodyImages: Express.Multer.File[];
    },

    @Body('bodyImagesUniqueIDArr', new BodyImagesUniqueIDArrPipe())
    bodyImagesUniqueIDArr: string[],
    @Body() body: PreMatchBodyDto,
  ) {
    console.log(body);
    console.log(files);
    const result = await this.preMatchService.preMatchPostSave(
      body,
      bodyImagesUniqueIDArr,
      files.coverImage,
      files.bodyImages,
    );

    console.log(result);

    return result;
  }
  }

