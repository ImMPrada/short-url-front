
export interface UrlsContextParams {
  isSubmiting: boolean;
  submtingErrors: string[] | null;
  urlsList: ShortenUrlResponse[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (value: string) => void;
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