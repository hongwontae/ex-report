import { Editor } from "@tiptap/react";
import { handleImage } from "../../pages/before-match/shared-func/image-editor-plus";
import { useRef } from "react";
import {inputClassName} from './shared-className/befor-match-classname';
import { useImageStore } from "../../store/pre-match-store/image-store";

type Props = {
  children: React.ReactNode;
  editor: Editor;
};

function PreMatchCoverImageInput({ children, editor }: Props) {

  const imageRef = useRef<HTMLInputElement>(null);
  const setCoverImage = useImageStore(({setCoverImage})=>setCoverImage)
  
  const handleClick = ()=>{
    imageRef.current?.click();
  }

  return (
    <>
      <div>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          ref={imageRef}
          hidden
          onChange={(e) => handleImage(e, setCoverImage)}
        ></input>
        <div className={inputClassName} onClick={handleClick}>{children}</div>
      </div>
    </>
  );
}

export default PreMatchCoverImageInput;
