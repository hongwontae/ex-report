type FilesType = {
    coverImage : Express.Multer.File;
    bodyImages : Express.Multer.File[];
}

import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class FilesValidationPipe implements PipeTransform {
  transform({coverImage, bodyImages}: FilesType, metadata : ArgumentMetadata) {
    
    return {coverImage, bodyImages};
  }
}
