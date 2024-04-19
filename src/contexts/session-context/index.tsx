import { createContext, useEffect, useState } from 'react';
import type { SessionContextParams, SessionProviderProps } from './types';
import useCookie from 'react-use-cookie';

export const SessionContext = createContext<SessionContextParams>({
  loadingSessionToken: true,
  tokenCookie: '0'
});

export function SessionProvider  ({
  children
}: SessionProviderProps) {
  const [loadingSessionToken, setLoadingSessionToken] = useState<boolean>(true);
  const [tokenCookie, setTokenCookie] = useCookie('token', '0');

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
    return data.token
  }

  useEffect(() => {
    (async function() {
      if(tokenCookie !== '0'){ return; }
  
      const newToken = await getTemporarySessionToken()
  
      setTokenCookie(
        newToken,
        {
          days: 365,
          SameSite: 'Strict',
          Secure: true
        }
      );
  
      setLoadingSessionToken(false);
    }())
  }, [])

  const contextVal: SessionContextParams = {
    loadingSessionToken,
    tokenCookie
  };


  return (
    <SessionContext.Provider value={contextVal}>
      { children }
    </SessionContext.Provider>
  );
}

