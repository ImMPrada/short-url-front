import { ApplicationProvider } from "./contexts/application-context"
import Main from "./pages"


function App() {

  return (
    <ApplicationProvider>
      <Main/>
    </ApplicationProvider>
  )
}

export default App
