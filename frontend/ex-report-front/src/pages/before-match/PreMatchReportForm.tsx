import { useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extensions";
import Image from "@tiptap/extension-image";

import PreMatchTextArea from "../../components/before-match/preMatch-form-components/PreMatchTextArea";
import PreMatchSubMenu from "../../components/before-match/preMatch-form-components/PreMatchSubMemu";
import PreMatchPreview from "../../components/before-match/preMatch-form-components/PreMatchPreview";
import { useImageStore } from "../../store/pre-match-store/image-store";
import { useRef } from "react";

function PreMatchReportForm() {

  const setBodyImagesFiltering = useImageStore(({setBodyImagesFiltering})=>setBodyImagesFiltering);
  const titleRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ allowBase64: true }),
      Placeholder.configure({
        placeholder: "Write Your Post..",
      }),
    ],
    content: "",
    autofocus: false,
    editorProps: {
      attributes: {
        class: "prose ProseMirror border-[1px] rounded-[0.5rem] p-3 h-full",
      },
    },
    onUpdate : ({editor})=>{
      if (!editor.getHTML().includes('img')){
        return
      }
      setBodyImagesFiltering(editor)
    }
  
  });



  return (
    <>
      <section className="h-full w-full pl-4">
        <div className="grid grid-rows-[0.1fr_1fr] grid-cols-[1.3fr_1fr] h-full gap-4">
          <PreMatchSubMenu editor={editor} titleRef={titleRef}></PreMatchSubMenu>
          <PreMatchTextArea editor={editor}></PreMatchTextArea>
          <PreMatchPreview titleRef={titleRef} editor={editor}></PreMatchPreview>
        </div>
      </section>
    </>
  );
}

export default PreMatchReportForm;
