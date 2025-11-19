import { Editor } from "@tiptap/react";
import { TextSelection } from "prosemirror-state";

export const handleImage = (
  e: React.ChangeEvent<HTMLInputElement>,
  editor: Editor
) => {
  const file = e.target.files?.[0];
  if (!file) {
    return;
  }
  

  const previewURL = URL.createObjectURL(file);

  editor
  ?.chain()
  .focus()
  .setImage({ src: previewURL, alt: file.name })
  .run();

  const { state, view } = editor;
  
  const pos = state.doc.content.size;
  const tr = state.tr.setSelection(TextSelection.create(state.doc, pos));
  view.dispatch(tr);


};
