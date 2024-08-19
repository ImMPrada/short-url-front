import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';
import { UrlRedirectProps } from './types';

export default function UrlRedirect({ urlUri }: UrlRedirectProps) {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URI}/api/v1/registered-urls/${urlUri}`,);
      const data = await response.json();

      if(response.ok) {
        window.history.replaceState(null, '', '/');
        window.location.href = data.url;
        return;
      }

      navigate('/');
    })()
  }, []);

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
