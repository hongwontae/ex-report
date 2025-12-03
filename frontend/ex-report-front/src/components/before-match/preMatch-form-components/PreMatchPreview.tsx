import { useImageStore } from "../../../store/pre-match-store/image-store";
import PreMatchSendButton from "./PreMatchSendButton";
import { Editor } from "@tiptap/react";

type Props = {
    editor : Editor
    titleRef : React.RefObject<HTMLInputElement | null>
}

function PreMatchPreview({editor, titleRef} : Props){

    const coverImage = useImageStore(({coverImage})=>coverImage)
    const setDeleteCoverImage = useImageStore(({deleteCoverImage})=>deleteCoverImage)



    return(
        <>
            <section className="preview-section col-start-2 row-[1/2] h-full content-center">
                <div>MetaData Section</div>
                <img src={coverImage?.previewSrc}></img>
                <button onClick={setDeleteCoverImage}>Delete</button>
                <PreMatchSendButton editor={editor} titleRef={titleRef}></PreMatchSendButton>
            </section>

        </>
    )
}

export default PreMatchPreview;