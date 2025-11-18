import { Link } from "react-router";

function IntroButton() {
  return (
    <>
      <div className="border-2 p-2 rounded-2xl text-trend-black
       border-red-400  text-2xl w-1/4 text-center 
        self-center justify-self-center
       ">
        <Link to={'/main'}>Home</Link>
      </div>
    </>
  );
}

export default IntroButton;
