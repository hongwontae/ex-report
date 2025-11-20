import { create } from "zustand";
import { Editor } from "@tiptap/react";

interface imageObject {
  file: File;
  uniqueId: string;
  previewSrc: string;
}

interface ImageStore {
  coverImage: imageObject | null;
  bodyImages: imageObject[];
  setCoverImage: (file: File, uniqueId: string, previewSrc: string) => void;
  deleteCoverImage: () => void;
  setBodyImages: (images: imageObject[]) => void;
  setBodyImagesFiltering: (editor: Editor) => void;
}

export const useImageStore = create<ImageStore>((set) => {
  return {
    bodyImages: [],
    coverImage: null,
    setCoverImage: (file, uniqueId, previewSrc) => {
      return set(() => {
        return { coverImage: { file, uniqueId, previewSrc } };
      });
    },
    deleteCoverImage: () => {
      return set(() => {
        return { coverImage: null };
      });
    },
    setBodyImages: (newImagesObject) => {
      return set((prev) => {
        return {bodyImages : [...newImagesObject, ...prev.bodyImages]};
      });
    },
    setBodyImagesFiltering: (editor)=>{
      return set((prev)=>{
        return {bodyImages : prev.bodyImages.filter(({previewSrc})=>{
          return editor.getHTML().includes(previewSrc);
        })}
      })
    }
  };
});
