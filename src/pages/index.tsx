import FeatureCards from "../components/feature-cards"
import Footer from "../components/footer"
import Hero from "../components/hero"
import UrlForm from "../components/url-form"

export default function Main() {
  return (
    <div>
      <Hero/>
      <UrlForm/>
      <FeatureCards/>
      <Footer/>
    </div>
  )
}