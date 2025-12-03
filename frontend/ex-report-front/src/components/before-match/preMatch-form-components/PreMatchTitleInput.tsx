import React from "react";

type TitleRef = {
  titleRef : React.RefObject<HTMLInputElement | null>
}

function PreMatchTitleInput({titleRef} : TitleRef) {

  return (
    <>
      <div className="w-full">
        <input
          type="text"
          className="peer w-full text-3xl font-bold border-b-2 border-gray-300 
                    focus:border-b-blue-500 outline-none pt-6 pb-2"
          ref={titleRef}
        ></input>
      </div>
    </>
  );
}

export default PreMatchTitleInput;
