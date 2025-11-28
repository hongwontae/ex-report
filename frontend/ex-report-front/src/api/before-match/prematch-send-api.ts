interface imageObject {
  file: File;
  uniqueId: string;
  previewSrc: string;
}

export const PrematchSendPost = async (
  title: string,
  coverImage: imageObject,
  bodyImages: imageObject[],
  content: string
) => {

    if (!coverImage){return}

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('coverImage', coverImage.file);
    formData.append('coverImageUniqueID', JSON.stringify(coverImage.uniqueId));


    const bodyUniqueIDArr = bodyImages.map((ele, idx, arr)=>{
        formData.append('bodyImages', ele.file);
        return ele.uniqueId;
    })
    formData.append('bodyImagesUniqueIDArr', JSON.stringify(bodyUniqueIDArr))



    const response = await fetch('http://localhost:3000/pre-match/post/save', {
        method : 'POST',
        body : formData
    });

    if (!response.ok){
        console.log(response.status)
        throw new Error('response ok 에러')
    }

    console.log(await response.json()); 

};
