// import { useContext, useEffect } from "react"
import { useEffect } from "react"
import FeatureCards from "../components/feature-cards"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import UrlForm from "../components/url-form"
import UrlsLsit from "../components/urls-list"
import { AppDispatch, RootState } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { getUrls } from "../redux/thunks/registeredUrlsThunks"

export default function Main() {
  const dispatch: AppDispatch = useDispatch();
  const sessionState = useSelector((state: RootState) => state.session);
  const urlsState = useSelector((state: RootState) => state.urls)

  useEffect(() => {
    if (urlsState.sessionUrls.length > 0) return;
    dispatch(getUrls(sessionState.temporarySessionToken))
  }, [])

  return (
    <div>
      {sessionState.temporarySessionToken}
      <Navbar/>
      <Hero/>
      <UrlForm/>
      <UrlsLsit/>
      <FeatureCards/>
      <Footer/>
    </div>
  )
}