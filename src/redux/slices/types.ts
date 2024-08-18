type User = {
  email: string;
  username: string;
};

export type UserLoginErrors = {
  email?: string;
  password?: string;
}

export type UserSignupErrors = UserLoginErrors & {
  username?: string;
  confirm_password?: string;
}

export interface SessionState {
  isLoadingSession: boolean;
  temporarySessionToken: string | null;
  currentUser: User | null;
  isActiveSessionCookie: boolean;
  errors: UserSignupErrors | UserLoginErrors | null;
}