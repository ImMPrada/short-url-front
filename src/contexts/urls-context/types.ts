
export interface UrlsContextParams {
  submiting: boolean;
  urlsList: ShortenUrlResponse[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, urlToSubmit: string) => void;
  getAllUrls: () => void;
}

export interface UrlsProviderProps {
  children: React.ReactNode;
}

export type ShortenUrlResponse = {
  shortVersion: string;
  url: string;
  expiresAt: string;
}