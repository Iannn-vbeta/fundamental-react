import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Homepage from "../pages/Index";
import About from "../pages/About";
import Post from "../pages/blogs/_id"; 
import Blog from "../pages/blogs/Index";
import { posts, postsById } from "../apis/loaders";

import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([{
  path: "/",
  // layout dari Home dan About
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "blogs",
      element: <Blog />,
      loader: posts,
    },
    {
      path: "blogs/:id",
      element: <Post />,
      loader: postsById
    }
  ]
}])