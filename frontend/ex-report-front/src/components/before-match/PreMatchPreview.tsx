import { useImageStore } from "../../store/pre-match-store/image-stroe";

function PreMatchPreview(){

    const coverImage = useImageStore(({coverImage})=>coverImage)
    const setDeleteCoverImage = useImageStore(({deleteCoverImage})=>deleteCoverImage)



    return(
        <>
            <section className="preview-section col-start-2 row-[1/2] h-full content-center">
                <div>MetaData Section</div>
                <img src={coverImage?.previewSrc}></img>
                <button onClick={setDeleteCoverImage}>Delete</button>
            </section>

        </>
    )
}

export default PreMatchPreview;