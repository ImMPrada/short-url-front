import { createContext, useContext, useState } from 'react';
import type { UrlsContextParams, UrlsProviderProps, ShortenUrlResponse } from './types';
import { SessionContext } from '../session-context';

export const UrlsContext = createContext<UrlsContextParams>({
  submiting: false,
  urlsList: [],
  handleSubmit: () => {},
  getAllUrls: () => {}
});

export function UrlsProvider  ({
  children
}: UrlsProviderProps) {
  const [submiting, setSubmiting] = useState<boolean>(false);
  const { tokenCookie } = useContext(SessionContext);
  const [urlsList, setUrlsList] = useState<ShortenUrlResponse[]>([]);

  const getAllUrls = async() => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URI}/api/v1/registered-urls.json`,
      {
        headers: {
          'Content-Type': 'applicationn/json',
          'Authorization': `Token ${tokenCookie}`
        }
      }
    );

    if(!response.ok){
      console.error('Error fetching the URLs');
      return;
    }

    const data = await response.json();
    setUrlsList(data);
  };
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, urlToSubmit: string) => {
    e.preventDefault();
    setSubmiting(true);

    const submitResponse = await fetch(
      `${import.meta.env.VITE_API_URI}/api/v1/registered-urls.json`,
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${tokenCookie}`
      },
      body: JSON.stringify({
        registered_url: {
          url: urlToSubmit
        }
      })
      }
    );

    setSubmiting(false);

    if(!submitResponse.ok){
      console.error('Error submitting the URL');
      return;
    }

    const data = await submitResponse.json();

    const urls = [...urlsList];
    urls.unshift(data.registeredUrl);
    setSubmiting(false);
  };

  const contextVal: UrlsContextParams = {
    submiting,
    urlsList,
    getAllUrls,
    handleSubmit
  };


  return (
    <UrlsContext.Provider value={contextVal}>
      { children }
    </UrlsContext.Provider>
  );
}

