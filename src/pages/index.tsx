// import { useContext, useEffect } from "react"
import FeatureCards from "../components/feature-cards"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
// import UrlForm from "../components/url-form"
// import UrlsLsit from "../components/urls-list"
// import { UrlsProvider } from "../contexts/urls-context"
// import { AppDispatch, RootState } from "../redux/store"
// import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useSelector } from "react-redux"

export default function Main() {
  // const dispatch: AppDispatch = useDispatch();
  const sessionState = useSelector((state: RootState) => state.session);

  return (
    <div>
      {sessionState.temporarySessionToken}
      <Navbar/>
      <Hero/>
      {/* <UrlsProvider
        temporarySessionToken={sessionState.temporarySessionToken}
        changeStateSessionExpired={true}
      >
        <UrlForm/>
        <UrlsLsit/>
      </UrlsProvider> */}
      <FeatureCards/>
      <Footer/>
    </div>
  )
}