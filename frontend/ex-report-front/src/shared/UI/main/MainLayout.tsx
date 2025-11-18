import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <div className="font-pretendard-regular bg-trend-gray font-white
                      min-h-screen grid grid-rows-[1fr_10fr_1fr] pl-8 pr-8 pt-3">
        <div className="h-full">
          <Header></Header>
        </div>
        <main className="h-full">
          <Outlet></Outlet>
        </main>
        <div className="self-center">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
