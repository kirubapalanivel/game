import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Portfolio from "./pages/Portfolio";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/details",
        element: <Details />,
      }
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;
export default Router;
