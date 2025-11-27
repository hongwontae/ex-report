import { Injectable, Inject } from '@nestjs/common';
import { v2 as Cloudinary, UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor(@Inject('CLOUDINARY') private cloudinary: typeof Cloudinary) {}

  async uploadImage(file: Express.Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      this.cloudinary.uploader
        .upload_stream(
          {
            folder: 'uploads',
            resource_type: 'auto',
          },
          (error, result) => {
            if (error) {
              return reject(error);
            }
            if (!result) {
              return reject(new Error('Cloudinary upload failed'));
            }
            resolve(result);
          },
        )
        .end(file.buffer);
    });
  }
}
