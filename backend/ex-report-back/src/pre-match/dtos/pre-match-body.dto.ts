import { IsString } from "class-validator";

export class PrematchBodyDto {

    @IsString()
    title : string;

    @IsString()
    content : string;

    @IsString()
    coverImageUniqueID : string;
}