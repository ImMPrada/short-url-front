import { createContext, useState } from 'react';
import type { UrlsContextParams, UrlsProviderProps, ShortenUrlResponse } from './types';
import { createUrl, getAllUrls } from '../../api_fetching/urls';

export const UrlsContext = createContext<UrlsContextParams>({
  changeStateSessionExpired: async() => {},
  temporarySessionToken: null,
  isSubmiting: false,
  submtingErrors: null,
  urlsList: [],
  handleSubmit: () => {},
  handleInputChange: () => {},
  fetchAllUrls: () => {}
});

export function UrlsProvider  ({
  changeStateSessionExpired,
  temporarySessionToken,
  children
}: UrlsProviderProps) {
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [urlsList, setUrlsList] = useState<ShortenUrlResponse[]>([]);
  const [submtingErrors, setSubmittingErrors] = useState<string[] | null>(null);
  const [urlToSubmit, setUrlToSubmit] = useState<string>('');

  const fetchAllUrls = async() => {
    const response = await getAllUrls({ temporarySessionToken });

    if (response.status === 401) {
      await changeStateSessionExpired();
      return;
    }

    if(!response.ok){ return; }

    const data = await response.json();
    setUrlsList(data);
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmiting(true);

    const response = await createUrl({ urlToSubmit, temporarySessionToken });

    const data = await response.json();

    if(!response.ok){
      if(response.status === 422){ setSubmittingErrors([data.errors]); }

      if(response.status === 401) {
        await changeStateSessionExpired();
        setSubmittingErrors([data.errors]);
      }

      setIsSubmiting(false);
      return;
    }

    const urls = [...urlsList];
    urls.unshift(data.registeredUrl);
    setUrlsList(urls);
    setUrlToSubmit('');
    setIsSubmiting(false);
  };

  const handleInputChange = (value: string) => {
    setUrlToSubmit(value);
    if(submtingErrors) { setSubmittingErrors(null) }
  }

  const contextVal: UrlsContextParams = {
    isSubmiting,
    urlsList,
    fetchAllUrls,
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

