import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UrlRedirect from "./components/url-redirect";
import { SessionContext } from "./contexts/session-context"
import Main from "./pages"
import Login from "./pages/login";
import Signup from "./pages/signup";
import { useContext, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  }
]);

const router2 = createBrowserRouter([
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
