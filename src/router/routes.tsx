import { createBrowserRouter } from "react-router-dom";
import UrlRedirect from "../components/url-redirect";
import Main from "../pages"
import Login from "../pages/login";
import Signup from "../pages/signup";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/:urlUri",
    element: <UrlRedirect />,
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


// createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "events/:id",
//         element: <Event />,
//         loader: eventLoader,
//       },
//     ],
//   },
// ]);