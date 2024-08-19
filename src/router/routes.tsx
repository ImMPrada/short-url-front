import { createBrowserRouter } from "react-router-dom";
import Main from "../pages"
import Login from "../pages/login";
import Signup from "../pages/signup";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: ":urlUri",
        element: <Main />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }
]);
