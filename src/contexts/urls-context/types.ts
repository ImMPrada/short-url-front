
export interface UrlsContextParams {
  submiting: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, urlToSubmit: string) => void;
}

export interface UrlsProviderProps {
  children: React.ReactNode;
}