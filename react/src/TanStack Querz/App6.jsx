import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Home } from "./Pages/Home";
import { FetchOld } from "./Pages/FetchOld";
import { FetchRQ } from "./Pages/FetchRQ";
import { MainLayout } from "./components/Layout/mainLayout";
import "./components/Layout/UI/tan1.css";
import { FetchIndv } from "./components/Layout/UI/FetchIndv";

// Create Query Client
const queryClient = new QueryClient();

// Create Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "trad",
        element: <FetchOld />,
      },
      {
        path: "rq",
        element: <FetchRQ />,
      },
      {
        path: "rq/:id",
        element: <FetchIndv/>,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
