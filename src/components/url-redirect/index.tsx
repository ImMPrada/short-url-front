import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';

export default function UrlRedirect() {
  const { urlUri } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log('urlUri', urlUri);
  //   (async () => {
  //     const response = await fetch(`${import.meta.env.VITE_API_URI}/api/v1/registered-urls/${urlUri}`,);
  //     const data = await response.json();

  //     if(response.ok) {
  //       return window.location.href = data.url;
  //     }

  //     navigate('/');
  //   })()
  // }, []);

  return(
    <div className="min-h-screen min-w-screen flex flex-col gap-10 items-center justify-center">
      <span className="font-sans text-xl text-purple-grey">Redirecting... {urlUri}</span>
      <RingLoader
        color={"#3A3054"}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
