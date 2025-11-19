import { Editor, EditorContent } from "@tiptap/react";

type EditorType = {
  editor: Editor | null;
};

function PreMatchTextArea({ editor }: EditorType) {
  if (!editor) {
    return;
  }

  return (
    <>
      <div className="w-7/12 h-full">
        <EditorContent className="h-full" editor={editor}></EditorContent>
      </div>
    </>
  );
}

export default PreMatchTextArea;
