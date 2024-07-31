import { createContext, useEffect, useState } from 'react';
import type { SessionContextParams, SessionProviderProps } from './types';

export const SessionContext = createContext<SessionContextParams>({
  loadingSessionToken: true,
  tokenCookie: '0'
});

export function SessionProvider  ({
  children
}: SessionProviderProps) {
  const [loadingSessionToken, setLoadingSessionToken] = useState<boolean>(true);
  const [tokenCookie, setTokenCookie] = useState<string | null>(null);

  const setTemporarySessionToken = async () => {
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
  
    const data = await respose.json()
    document.cookie = `temporarySessionCookie=${data.token}; Secure=True; SameSite=Strict`;
    setTokenCookie(data.token);
  }

  useEffect(() => {
    const existingToken = document.cookie.split('temporarySessionCookie=')[1];
    if(existingToken){
      setTokenCookie(existingToken);
      return;
    }

    (async function() {
      await setTemporarySessionToken();
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

