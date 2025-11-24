import {v4 as createUUID} from 'uuid';

export const handleImage = (
  e: React.ChangeEvent<HTMLInputElement>,
  setCoverImage : (file : File, uniqueId : string, previewSrc : string)=>void
) => {
  const file = e.target.files?.[0];
  if (!file) {
    return;
  }
  

  const previewURL = URL.createObjectURL(file);

  setCoverImage(file, createUUID(), previewURL)


};
