export type CallLoginParams = {
  email: string;
  password: string;
  temporarySessionToken: string | null;
}

export type CallSignupParams = CallLoginParams & {
  confirmPassword: string;
  username: string;
}

export interface GetAllUrlsParams {
  temporarySessionToken: string | null;
}

export interface CreateUrlParams {
  temporarySessionToken: string | null;
  urlToSubmit: string;
}
