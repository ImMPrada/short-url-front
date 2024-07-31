
export interface SessionContextParams {
  loadingSessionToken: boolean;
  tokenCookie: string | null;
}

export interface SessionProviderProps {
  children: React.ReactNode;
}
