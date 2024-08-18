type User = {
  email: string;
  username: string;
};

type Url = {
  shortVersion: string;
  url: string;
  expiresAt: Date;
}

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

export interface UrlsState {
  isLoadingUrls: boolean,
  isAddingNewUrl: boolean
  sessionUrls: Url[],
  errors: any
}
