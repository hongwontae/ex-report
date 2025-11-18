import { Outlet } from "react-router";

function IntroLayout() {
  return (
    <>
      <div className="font-pretendard-regular bg-trend-gray font-white min-h-screen">
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}

export default IntroLayout;
