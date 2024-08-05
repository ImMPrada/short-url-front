import { useContext } from "react"
import FeatureCards from "../components/feature-cards"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import UrlForm from "../components/url-form"
import UrlsLsit from "../components/urls-list"
import { UrlsProvider } from "../contexts/urls-context"
import { SessionContext } from "../contexts/session-context"

export default function Main() {
  const { temporarySessionToken, changeStateSessionExpired } = useContext(SessionContext);
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <UrlsProvider
        temporarySessionToken={temporarySessionToken}
        changeStateSessionExpired={changeStateSessionExpired}
      >
        <UrlForm/>
        <UrlsLsit/>
      </UrlsProvider>
      <FeatureCards/>
      <Footer/>
    </div>
  )
}