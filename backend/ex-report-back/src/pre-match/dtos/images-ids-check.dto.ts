import { ArrayNotEmpty, IsArray, IsString } from 'class-validator';

export class ImagesIDsCheckDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  bodyImagesUniqueIDArr: string[];
}
