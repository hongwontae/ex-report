import PreMatchBodyImageInput from "./PreMatchBodyImageInput";
import PreMatchCoverImageInput from "./PreMatchCoverImageInput";
import PreMatchTitleInput from "./PreMatchTitleInput";
import { Editor } from "@tiptap/react";

type MenuType = {
  editor: Editor;
};

function PreMatchSubMenu({ editor }: MenuType) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <PreMatchTitleInput></PreMatchTitleInput>
        <div className="flex flex-row gap-4">
          <PreMatchCoverImageInput editor={editor}>
            Cover-Image
          </PreMatchCoverImageInput>
          <PreMatchBodyImageInput editor={editor}>Multi Body-Image</PreMatchBodyImageInput>
        </div>
      </div>
    </>
  );
}

export default PreMatchSubMenu;
