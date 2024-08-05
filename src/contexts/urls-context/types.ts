
export interface UrlsContextParams {
  changeStateSessionExpired?: () => Promise<void>;
  temporarySessionToken?: string | null;
  isSubmiting: boolean;
  submtingErrors: string[] | null;
  urlsList: ShortenUrlResponse[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (value: string) => void;
  fetchAllUrls: (temporarySessionToken: string | null) => void;
}

export interface UrlsProviderProps {
  changeStateSessionExpired: () => Promise<void>;
  temporarySessionToken: string | null;
  children: React.ReactNode;
}

export type ShortenUrlResponse = {
  shortVersion: string;
  url: string;
  expiresAt: string;
}