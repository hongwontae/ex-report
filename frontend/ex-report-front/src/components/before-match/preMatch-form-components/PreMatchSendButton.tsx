import { useImageStore } from "../../../store/pre-match-store/image-store";
import { Editor } from "@tiptap/react";
import { PrematchSendPost as pmsp } from "../../../api/before-match/prematch-send-api";

type Props = {
  editor: Editor;
  titleRef?: React.RefObject<HTMLInputElement | null>;
};

interface imageObject {
  file: File;
  uniqueId: string;
  previewSrc: string;
}

function PreMatchSendButton({ editor, titleRef }: Props) {
  const coverImage = useImageStore(({ coverImage }) => coverImage);
  const bodyImages = useImageStore(({ bodyImages }) => bodyImages);

  const PrematchSendPost = (
    title: string,
    coverImage: imageObject,
    bodyImages: imageObject[],
    content: string
  ) => {
    pmsp(title, coverImage, bodyImages, content);
  };

  

  return (
    <>
      <button
        className="border p-1 rounded-2xl text-2xl"
        onClick={() =>
          PrematchSendPost(
            titleRef?.current?.value ?? 'null',
            coverImage!,
            bodyImages,
            editor.getHTML()
          )
        }
      >
        Send
      </button>
    </>
  );
}

export default PreMatchSendButton;
