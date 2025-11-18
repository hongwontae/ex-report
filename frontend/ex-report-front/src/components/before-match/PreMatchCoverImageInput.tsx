type Props = {
    children : React.ReactNode
}

function PreMatchCoverImageInput({children} : Props) {
  return (
    <>
      <div>
        <input type="file" accept=".png, .jpg, .jpeg" hidden></input>
        <div className="font-pretendard-semibold">{children}</div>
      </div>
    </>
  );
}

export default PreMatchCoverImageInput;
