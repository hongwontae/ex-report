import { useRef } from "react";
import { inputClassName } from "./shared-className/befor-match-classname";
import {handleImages} from '../../pages/before-match/shared-func/images-editor-plus';
import { Editor } from "@tiptap/react";

type Props = {
  children: React.ReactNode;
  editor : Editor
};

function PreMatchBodyImageInput({ children, editor }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleMultiInputClick = () => {

    inputRef.current?.click();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept=".png, .jpg, .jpeg"
        multiple
        hidden
        onChange={(e)=>handleImages(e, editor)}
      ></input>
      <div onClick={handleMultiInputClick} className={inputClassName}>
        {children}
      </div>
    </>
  );
}

export default PreMatchBodyImageInput;
