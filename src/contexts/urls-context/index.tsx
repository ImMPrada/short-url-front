import { createContext, useContext, useState } from 'react';
import type { UrlsContextParams, UrlsProviderProps, ShortenUrlResponse } from './types';
import { SessionContext } from '../session-context';

export const UrlsContext = createContext<UrlsContextParams>({
  isSubmiting: false,
  submtingErrors: null,
  urlsList: [],
  handleSubmit: () => {},
  handleInputChange: () => {},
  getAllUrls: () => {}
});

export function UrlsProvider  ({
  children
}: UrlsProviderProps) {
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const { tokenCookie } = useContext(SessionContext);
  const [urlsList, setUrlsList] = useState<ShortenUrlResponse[]>([]);
  const [submtingErrors, setSubmittingErrors] = useState<string[] | null>(null);
  const [urlToSubmit, setUrlToSubmit] = useState<string>('');

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
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmiting(true);

    if (urlToSubmit === '') {
      setIsSubmiting(false);
      setSubmittingErrors(['URL cannot be blank']);
      return;
    }

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

    setIsSubmiting(false);

    if(!submitResponse.ok){
      if(submitResponse.status === 422){
        const data = await submitResponse.json();
        setSubmittingErrors(data.errors);
      }

      console.error('Error submitting the URL');
      return;
    }

    const data = await submitResponse.json();

    const urls = [...urlsList];
    urls.unshift(data.registeredUrl);
    setUrlsList(urls);
    setIsSubmiting(false);
  };

  const handleInputChange = (value: string) => {
    setUrlToSubmit(value);
    if(submtingErrors) { setSubmittingErrors(null) }
  }


  const contextVal: UrlsContextParams = {
    isSubmiting,
    urlsList,
    getAllUrls,
    handleSubmit,
    handleInputChange,
    submtingErrors
  };

  return (
    <UrlsContext.Provider value={contextVal}>
      { children }
    </UrlsContext.Provider>
  );
}

