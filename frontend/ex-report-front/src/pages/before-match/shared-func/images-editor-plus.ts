import { Editor } from "@tiptap/react";
import { TextSelection } from "prosemirror-state";
import { v4 as createUUID } from "uuid";

interface imageObject {
    file : File;
    uniqueId : string;
    previewSrc : string
}


export const handleImages = (
  event: React.ChangeEvent<HTMLInputElement>,
  editor: Editor,
  setBodyImages : (images : imageObject[])=>void
) => {

  const files = event.target.files;
  if (!files) {
    return;
  }

  const arrFiles = Array.from(files);

  const newImagesObjectArr = arrFiles.map((ele, idx, arr) => {
    const previewURL = URL.createObjectURL(ele);
    const uniqueId = createUUID();
    editor?.chain().focus().setImage({ src: previewURL, alt: uniqueId }).run();
    const { state, view } = editor;

    const pos = state.doc.content.size;
    const tr = state.tr.setSelection(TextSelection.create(state.doc, pos));
    view.dispatch(tr);
    return {file:ele, uniqueId, previewSrc:previewURL}
  });

  setBodyImages(newImagesObjectArr);

};
