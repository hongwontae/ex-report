import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IntroPage from "../pages/intro/IntroPage";
import IntroLayout from "../shared/UI/intro/IntroLayout";
import MainLayout from "../shared/UI/main/MainLayout";
import HomePage from "../pages/home/Homepage";
import PreMatchReportForm from "../pages/before-match/PreMatchReportForm";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IntroLayout></IntroLayout>,
      children: [{ index: true, element: <IntroPage></IntroPage> }],
    },
    {
      path : '/main',
      element : <MainLayout></MainLayout>,
      children : [
        {index : true, element : <HomePage></HomePage>},
        {path : 'pre/form', element : <PreMatchReportForm></PreMatchReportForm>},
        {path : 'pre/report', element : <div>pre/report</div>},
        {path : 'post/form', element : <div>post form</div>},
        {path : 'post/report', element : <div>Post report</div>}
      ]
    }
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
