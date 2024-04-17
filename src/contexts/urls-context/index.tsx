import { createContext, useContext, useState } from 'react';
import type { UrlsContextParams, UrlsProviderProps } from './types';
import { SessionContext } from '../session-context';

export const UrlsContext = createContext<UrlsContextParams>({
  submiting: false,
  handleSubmit: () => {}
});

export function UrlsProvider  ({
  children
}: UrlsProviderProps) {
  const [submiting, setSubmiting] = useState<boolean>(false);
  const { tokenCookie } = useContext(SessionContext);
  
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

    if(!submitResponse.ok){
      console.error('Error submitting the URL');
      setSubmiting(false);
      return;
    }

    setSubmiting(false);
  };

  const contextVal: UrlsContextParams = {
    submiting,
    handleSubmit
  };


  return (
    <UrlsContext.Provider value={contextVal}>
      { children }
    </UrlsContext.Provider>
  );
}

