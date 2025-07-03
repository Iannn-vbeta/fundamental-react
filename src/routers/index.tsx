import { createBrowserRouter } from "react-router-dom";

import Homepage from "../pages/Index";
import About from "../pages/About";


export const router = createBrowserRouter([{
  path: "/",
  element: <Homepage />,
},
{
 path: "/about",
  element: <About />, 
}])