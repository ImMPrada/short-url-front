import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import UrlInput from "./url-input";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { handleUrlCreation } from "../../redux/thunks/registeredUrlsThunks";

export default function UrlForm() {
  const dispatch: AppDispatch = useDispatch();
  const urlsState = useSelector((state: RootState) => state.urls);
  const sessionState = useSelector((state: RootState) => state.session);

  const [urlToSubmit, setUrlToSubmit] = useState<string>('');

  const handleInputChange = (value: string) => {
    setUrlToSubmit(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(handleUrlCreation({
      e,
      newUrl: urlToSubmit,
      temporarySessionToken: sessionState.temporarySessionToken
    }));
    setUrlToSubmit('');
  }

  return (
    <div className="flex mt-6 xl:mt-10 flex-col relative">
      <div className="bg-white w-full h-20"></div>
      <div className="bg-light-grey w-full h-20"></div>
      <div className="w-full max-xl:px-4 absolute top-0">
        <form
          className="bg-purple-bg max-w-[1110px] xl:mx-auto h-40 py-7 xl:py-14 px-8 xl:px-16 rounded-xl flex max-xl:flex-col max-xl:items-center gap-4 max-xl:gap-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          {urlsState.isAddingNewUrl ? (
            <ClipLoader color="white" loading={urlsState.isAddingNewUrl} size={60} />
          ) : (
            <UrlInput
              onChange={handleInputChange}
              errorsMessages={urlsState.errors}
            />
          )}
        </form>
      </div>
    </div>
  );
}
