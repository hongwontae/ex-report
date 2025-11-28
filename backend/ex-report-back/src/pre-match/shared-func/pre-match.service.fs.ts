import { PreMatchBodyImagesEntity } from "../entities/pre-match-body-images.entity";

export const preMatchContentImgSrcTransition = (content : string, arr: PreMatchBodyImagesEntity[] )=>{
    let i =0;
    const imgRegex  = /<img\s+src="blob:[^"]+"/g;

    const newBodyContent = content.replace(imgRegex, ()=>{
        const url = arr[i++].secure_url;
        return `<img src=${url}`;
    })

    return newBodyContent;

}