export const removeCookie = (cookieName: string) => {
  document.cookie = `${cookieName}=; Secure=True; SameSite=Strict; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const setTemporarySessionCookie = (cookieValue: string) => {
  document.cookie = `temporarySessionCookie=${cookieValue}; Secure=True; SameSite=Strict`;
}

export const setSessionCookie = () => {
  document.cookie = `isActiveSession=true; Secure=True; SameSite=Strict`;
}

export const getTemporarySessionTokenFromCookie = () => {
  const cookie = document.cookie.split(';').find(cookie => cookie.includes('temporarySessionCookie'));
  if(!cookie) return null;
  return cookie.split('=')[1];
}

export const getIsActiveSession = () => {
  const cookie = document.cookie.split(';').find(cookie => cookie.includes('isActiveSession'));
  if(!cookie) return null;
  return cookie.split('=')[1];
}
