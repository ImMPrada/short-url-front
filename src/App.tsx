import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UrlRedirect from "./components/url-redirect";
import { SessionProvider } from "./contexts/session-context"
import Main from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/:urlUri",
    element: <UrlRedirect />,
  },
]);

function App() {
  

  return (
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  )
}

export default App
