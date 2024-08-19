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
import { useParams } from "react-router-dom"
import UrlRedirect from "../components/url-redirect"

export default function Main() {
  const { urlUri } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const sessionState = useSelector((state: RootState) => state.session);
  const urlsState = useSelector((state: RootState) => state.urls)

  useEffect(() => {
    if (urlUri) return;
    if (urlsState.sessionUrls.length > 0) return;
    dispatch(getUrls(sessionState.temporarySessionToken))
  }, [])

  if(urlUri) {
    return (
      <UrlRedirect
        urlUri={urlUri}
      />
    )
  }

  return (
    <>
      <Navbar/>
      <Hero/>
      <UrlForm/>
      <UrlsLsit/>
      <FeatureCards/>
      <Footer/>
    </>
  )
}