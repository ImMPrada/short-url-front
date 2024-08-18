import { UrlInputProps } from "./types";

export default function UrlInput({ onChange, errorsMessages }: UrlInputProps) {
  const buildErrorsMessages = errorsMessages ? errorsMessages : null;

  return (
    <>
      <div className="flex flex-col w-full flex-1">
        <input
          type="text"
          className={`py-3.5 px-8 font-sans text-grey rounded-xl w-full ${errorsMessages ? "border-red border-2 placeholder-red" : "placeholder-grey"}`}
          name="url"
          placeholder="Shorten a link here..."
          onChange={(e) => {onChange(e.target.value)}}
        />
        {
          errorsMessages && (
            <span className="text-red text-sm font-sans mt-2">{buildErrorsMessages}</span>
          )
        }
      </div>
      <button
        type="submit"
        className="bg-cyan text-white py-3.5 px-8 rounded-xl font-sans font-bold max-xl:w-full"
      >
        Shorten it!
      </button>
    </>
  );
}
