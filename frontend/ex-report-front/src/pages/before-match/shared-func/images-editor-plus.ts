import { Editor } from "@tiptap/react";
import { TextSelection } from "prosemirror-state";

export const handleImages = (
  event: React.ChangeEvent<HTMLInputElement>,
  editor: Editor
) => {
  const files = event.target.files;
  if (!files) {
    return;
  }

  const arrFiles = Array.from(files);

  arrFiles.map((ele, idx, arr) => {
    const previewURL = URL.createObjectURL(ele);
    editor?.chain().focus().setImage({ src: previewURL, alt: ele.name }).run();
    const { state, view } = editor;

    const pos = state.doc.content.size;
    const tr = state.tr.setSelection(TextSelection.create(state.doc, pos));
    view.dispatch(tr);
  });
};
