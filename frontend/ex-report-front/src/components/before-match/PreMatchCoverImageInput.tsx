import { Editor } from "@tiptap/react";
import { handleImage } from "../../pages/before-match/shared-func/image-editor-plus";
import { useRef } from "react";
import {inputClassName} from './shared-className/befor-match-classname';

type Props = {
  children: React.ReactNode;
  editor: Editor;
};

function PreMatchCoverImageInput({ children, editor }: Props) {

  const imageRef = useRef<HTMLInputElement>(null);
  
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
          onChange={(e) => handleImage(e, editor)}
        ></input>
        <div className={inputClassName} onClick={handleClick}>{children}</div>
      </div>
    </>
  );
}

export default PreMatchCoverImageInput;
