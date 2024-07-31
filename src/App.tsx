import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UrlRedirect from "./components/url-redirect";
import { SessionProvider } from "./contexts/session-context"
import Main from "./pages"
import Login from "./components/login";
import Signup from "./components/signup";

const router = createBrowserRouter([
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

function App() {
  

  return (
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  )
}

export default App
