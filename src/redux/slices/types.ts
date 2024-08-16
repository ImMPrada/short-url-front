type User = {
  email: string;
  username: string;
};

export interface SessionState {
  isLoadingSession: boolean;
  temporarySessionToken: string | null;
  currentUser: User | null;
  isActiveSessionCookie: boolean;
  errors: string | null;
}