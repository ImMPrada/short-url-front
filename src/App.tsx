import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UrlRedirect from "./components/url-redirect";
import { SessionContext } from "./contexts/session-context"
import Main from "./pages"
import Login from "./pages/login";
import Signup from "./pages/signup";
import { useContext, useEffect } from "react";

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
  const { fetchTemporarySessionToken, temporarySessionToken, isLoadingPage, currentUser } = useContext(SessionContext);

  useEffect(() => {
    if(temporarySessionToken || currentUser) return;

    fetchTemporarySessionToken();
  }, []);

  if(isLoadingPage) return(<div>Loading...</div>);

  return (
    <RouterProvider router={router} />
  )
}

export default App
