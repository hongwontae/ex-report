import { IsString } from "class-validator";

export class PreMatchBodyDto {

    @IsString()
    title : string;

    @IsString()
    content : string;

    @IsString()
    coverImageUniqueID : string;
}