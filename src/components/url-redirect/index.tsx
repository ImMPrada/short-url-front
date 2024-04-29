import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function UrlRedirect() {
  const { urlUri } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URI}/api/v1/registered-urls/${urlUri}`,);
      const data = await response.json();

      if(response.ok) {
        return window.location.href = data.url;
      }

      navigate('/');
    })()
  });

  return(
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <span>Redireccionando... {urlUri}</span>
    </div>
  )
}
