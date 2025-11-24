import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class BodyImagesUniqueIDArrPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        
        try {
            return JSON.parse(value)
        } catch (error) {
            throw new BadRequestException('Invalid JSON');
        }

    }
    
}