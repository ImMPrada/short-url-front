export type HandleLoginParams = {
  e: React.FormEvent<HTMLFormElement>;
  email: string;
  password: string;
  temporarySessionToken: string | null;
}

export type HandleSignupParams = HandleLoginParams & {
  confirmPassword: string;
  username: string;
}