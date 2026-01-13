import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Movie } from "./page/Movie";
import { Contact } from "./page/Contact";
import AppLayout from "./components/layout/AppLayout";
import { ErrorPage } from "./page/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import "./components/layout/Ui/project.css"
import { MovieDetails } from "./components/layout/Ui/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";

const App1 = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement : <ErrorPage/>,

      children: [   
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader:getMoviesData,
        },
         {
          path: "/movie/:movieID",
          element: <MovieDetails/>,
          loader: getMovieDetails,
         
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App1;

// Odd router Cencted

//    const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="/movie" element={<Movie/>}/>
//             <Route path="/contact" element={<Contact/>}/>
//             <Route/>
//         </Route>
//     )
//    );
