import { SessionProvider } from "./contexts/session-context"
import Main from "./pages"


function App() {

  return (
    <SessionProvider>
      <Main/>
    </SessionProvider>
  )
}

export default App
