
export interface SessionContextParams {
  handleSignup: ({e, email, password, confirmPassword}: HandleSignupParams) => Promise<void>;
  handleLogout: () => Promise<void>;
  handleLogin: ({e, email, password}: HandleLoginParams) => Promise<void>;
  changeStateSessionExpired: () => Promise<void>;
  fetchTemporarySessionToken: () => Promise<void>;
  fetchCurrentUser: () => Promise<void>;
  isLoadingPage: boolean;
  temporarySessionToken: string | null;
  sessionErrors: SessionErrors | null;
  currentUser: CurrentUser | null;
}

export interface SessionProviderProps {
  children: React.ReactNode;
}

export type HandleLoginParams = {
  e: React.FormEvent<HTMLFormElement>;
  email: string;
  password: string;
}

export type HandleSignupParams = HandleLoginParams & {
  confirmPassword: string;
  username: string;
}

export interface SessionErrors {
  email?: string;
  password?: string;
  confirm_password?: string;
  username?: string;
}

export interface CurrentUser {
  username: string;
}
