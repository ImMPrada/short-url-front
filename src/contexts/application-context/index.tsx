import { createContext, useEffect, useState } from 'react';
import type { ApplicationContextParams, ApplicationProviderProps } from './types';
import useCookie from 'react-use-cookie';

export const ApplicationContext = createContext<ApplicationContextParams>({
  loadingSessionToken: true
});

export function ApplicationProvider  ({
  children
}: ApplicationProviderProps) {
  const [loadingSessionToken, setLoadingSessionToken] = useState<boolean>(true);
  const [tokenCookie, setTokenCookie] = useCookie('token', '0');
  const [temporarySessionToken, setTemporarySessionToken] = useState<string>('');

  useEffect(() => {
    if (!temporarySessionToken) return setLoadingSessionToken(false);

    setTokenCookie(
      temporarySessionToken,
      {
        days: 365,
        SameSite: 'Strict',
        Secure: true
      }
    );

    setLoadingSessionToken(false);
  }, [temporarySessionToken]);

  useEffect(() => {
    if(tokenCookie !== '0') return;

    getTemporarySessionToken();
  }, []);

  const getTemporarySessionToken = async () => {
    const respose = await fetch(
      `${import.meta.env.VITE_API_URI}/api/v1/temporary-session`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      }
    )

    const data = await respose.json();
    setTemporarySessionToken(data.token);
  }

  const contextVal: ApplicationContextParams = {
    loadingSessionToken
  };


  return (
    <ApplicationContext.Provider value={contextVal}>
      { children }
    </ApplicationContext.Provider>
  );
}

