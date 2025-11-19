import { useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import Image from '@tiptap/extension-image';
import PreMatchTextArea from "../../components/before-match/PreMatchTextArea";
import PreMatchSubMenu from "../../components/before-match/PreMatchSubMemu";

function PreMatchReportForm() {
  const editor = useEditor({
    extensions: [StarterKit, Image.configure({allowBase64 : true})],
    content: "<div>Write Spot</div>",
    autofocus: false,
    editorProps: {
      attributes: {
        class: "prose ProseMirror border-[1px] rounded-[0.5rem] p-3 h-full",
      },
    },
    onUpdate : ({editor})=>{
        console.log(editor.getHTML())
    }
  });

  return (
    <>
      <section className="h-full w-full pl-4">
        <div className="grid grid-rows-[auto_1fr] h-full gap-4">
          <PreMatchSubMenu editor={editor}></PreMatchSubMenu>
          <PreMatchTextArea editor={editor}></PreMatchTextArea>
        </div>
      </section>
    </>
  );
}

export default PreMatchReportForm;
