import FeatureCards from "../components/feature-cards"
import Footer from "../components/footer"
import Hero from "../components/hero"
import UrlForm from "../components/url-form"
import UrlsLsit from "../components/urls-list"
import { UrlsProvider } from "../contexts/urls-context"

export default function Main() {
  return (
    <div>
      <Hero/>
      <UrlsProvider>
        <UrlForm/>
        <UrlsLsit/>
      </UrlsProvider>
      <FeatureCards/>
      <Footer/>
    </div>
  )
}