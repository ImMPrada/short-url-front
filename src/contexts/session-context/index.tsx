import { createContext, useEffect, useState } from 'react';
import type { SessionContextParams, SessionProviderProps, HandleSignupParams, SessionErrors, CurrentUser, HandleLoginParams } from './types';
import { callCurrentUser, callLogout, callSignup, callTemporarySessionToken, callLogin } from '../../api_fetching/session';

export const SessionContext = createContext<SessionContextParams>({
  handleSignup: async () => {},
  handleLogout: async () => {},
  handleLogin: async () => {},
  changeStateSessionExpired: async () => {},
  fetchTemporarySessionToken: async () => {},
  fetchCurrentUser: async () => {},
  isLoadingPage: true,
  temporarySessionToken: null,
  sessionErrors: null,
  currentUser: null
});

export function SessionProvider  ({
  children
}: SessionProviderProps) {
  const [temporarySessionToken, setTemporarySessionToken] = useState<string | null>(null);
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);
  const [sessionErrors, setSessionErrors] = useState< SessionErrors | null>(null);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    if(!temporarySessionToken) return;

    setIsLoadingPage(false);
  }, [temporarySessionToken]);

  const fetchTemporarySessionToken = async() => {
    if (document.cookie.includes('isActiveSession')) {
      await fetchCurrentUser();
      setIsLoadingPage(false);
      return;
    }

    if (document.cookie.includes('temporarySessionCookie')) {
      const temporarySessionToken = document.cookie.split('temporarySessionCookie=')[1];
      setTemporarySessionToken(temporarySessionToken);
      return;
    }

    const response = await callTemporarySessionToken();

    if(!response.ok) return;

    const data = await response.json()
    document.cookie = `temporarySessionCookie=${data.token}; Secure=True; SameSite=Strict`;
    setTemporarySessionToken(data.token);
  }

  const fetchCurrentUser = async() => {
    const isActiveSession = document.cookie.includes('isActiveSession');
    if(!isActiveSession) return;

    const response = await callCurrentUser();

    if(response.status === 401) {
      await changeStateSessionExpired();
      await fetchTemporarySessionToken();
      return;
    };

    const data = await response.json();

    if(!response.ok) return;

    setIsLoadingPage(false);
    setCurrentUser(
      {
        username: data.user.username
      }
    );
  };

  const handleSignup = async({e, email, password, confirmPassword, username}: HandleSignupParams) => {
    e.preventDefault();
    setIsLoadingPage(true);

    const response = await callSignup({
      username,
      email,
      password,
      confirmPassword,
      temporarySessionToken
    });

    const data = await response.json();

    if(!response.ok){
      setSessionErrors(data.errors);
      setIsLoadingPage(false);
      return;
    }

    document.cookie = `isActiveSession=true; Secure=True; SameSite=Strict`;
    removeCookie('temporarySessionCookie');
    setCurrentUser(
      {
        username: data.user.username
      }
    );
    setTemporarySessionToken(null);
    setIsLoadingPage(false);
    setSessionErrors(null);
  };

  const handleLogin = async({e, email, password}: HandleLoginParams) => {
    e.preventDefault();
    setIsLoadingPage(true);

    const response = await callLogin({
      email,
      password,
      temporarySessionToken
    });

    const data = await response.json();

    console.log(data);

    if(!response.ok){
      setSessionErrors(data.errors);
      setIsLoadingPage(false);
      return;
    }

    document.cookie = `isActiveSession=true; Secure=True; SameSite=Strict`;
    removeCookie('temporarySessionCookie');
    setCurrentUser(
      {
        username: data.user.username
      }
    );
    setTemporarySessionToken(null);
    setIsLoadingPage(false);
    setSessionErrors(null);
  };


  const handleLogout = async() => {
    setIsLoadingPage(true);

    await callLogout();

    window.location.href = '/';
    removeCookie('isActiveSession');
    setCurrentUser(null);
    setTemporarySessionToken(null);
    setIsLoadingPage(false);
  };

  const removeCookie = (cookieName: string) => {
    document.cookie = `${cookieName}=; Secure=True; SameSite=Strict; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const changeStateSessionExpired = async () => {
    console.error('Session expired');
    alert('Your session has expired. Please log in again.');

    document.cookie = 'isActiveSession=; Secure=True; SameSite=Strict; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    await fetchTemporarySessionToken();
  };

  const contextVal: SessionContextParams = {
    handleSignup,
    handleLogout,
    handleLogin,
    changeStateSessionExpired,
    fetchTemporarySessionToken,
    fetchCurrentUser,
    isLoadingPage,
    temporarySessionToken,
    sessionErrors,
    currentUser
  };


  return (
    <SessionContext.Provider value={contextVal}>
      { children }
    </SessionContext.Provider>
  );
}

