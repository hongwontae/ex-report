import { useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extensions";
import Image from "@tiptap/extension-image";

import PreMatchTextArea from "../../components/before-match/PreMatchTextArea";
import PreMatchSubMenu from "../../components/before-match/PreMatchSubMemu";
import PreMatchPreview from "../../components/before-match/PreMatchPreview";
import { useImageStore } from "../../store/pre-match-store/image-store";

function PreMatchReportForm() {

  const setBodyImagesFiltering = useImageStore(({setBodyImagesFiltering})=>setBodyImagesFiltering);

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
          <PreMatchSubMenu editor={editor}></PreMatchSubMenu>
          <PreMatchTextArea editor={editor}></PreMatchTextArea>
          <PreMatchPreview editor={editor}></PreMatchPreview>
        </div>
      </section>
    </>
  );
}

export default PreMatchReportForm;
