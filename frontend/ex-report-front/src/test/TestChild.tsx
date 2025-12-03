type Props = {
    titleRef? : React.RefObject<HTMLInputElement | null>
}

function TestChild({titleRef} : Props){

    console.log(titleRef?.current?.value)

    return(
        <>
        <input type="text" ref={titleRef}></input>
        </>
    )
}

export default TestChild;