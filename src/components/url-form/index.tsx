import { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { UrlsContext } from "../../contexts/urls-context";
import UrlInput from "./url-input";

export default function UrlForm() {
  const {
    isSubmiting,
    handleSubmit,
    submtingErrors,
    handleInputChange
  } = useContext(UrlsContext);

  return (
    <div className="flex mt-6 xl:mt-10 flex-col relative">
      <div className="bg-white w-full h-20"></div>
      <div className="bg-light-grey w-full h-20"></div>
      <div className="w-full max-xl:px-4 absolute top-0">
        <form
          className="bg-purple-bg max-w-[1110px] xl:mx-auto h-40 py-7 xl:py-14 px-8 xl:px-16 rounded-xl flex max-xl:flex-col max-xl:items-center gap-4 max-xl:gap-2"
          onSubmit={(e) => {handleSubmit(e)}}
        >
          {isSubmiting ? (
            <ClipLoader color="white" loading={isSubmiting} size={60} />
          ) : (
            <UrlInput
              onChange={handleInputChange}
              errorsMessages={submtingErrors}
            />
          )}
        </form>
      </div>
    </div>
  );
}
