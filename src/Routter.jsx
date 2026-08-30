import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";

import { Home} from "./pages/Home";
import {About} from "./pages/About";
import {Services} from "./pages/Services";
import {Insights} from "./pages/Insights";
import {Careers} from "./pages/Careers";
import {Contact} from "./pages/Contact";
import {Login} from "./pages/Login";

export const Router = () => {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "services",
        element: <Services />,
      },

      {
        path: "insights",
        element: <Insights />,
      },

      {
        path: "careers",
        element: <Careers />,
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

return (

  <RouterProvider router={(router)}/>
)


}