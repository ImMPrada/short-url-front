import { ItemProps } from './types';

const MASK_LENGTH = 40;

export default function Item({ url, shortenVersion, expiresAt, visitsCount = 0}: ItemProps) {
  const maskUrl = (url: string) => (
    url.length > MASK_LENGTH ? `${url.substring(0, MASK_LENGTH)}...` : url
  )

  return (
    <div className="flex flex-col py-6 bg-light-grey  relative">
      <div className="w-[1110px] mx-auto">
        <div className="w-full items-center flex justify-between bg-white py-4 px-6 rounded-md">
          <div className="flex flex-col gap-2">
            <span className="text-black block font-sans font-semibold ftext-lg">
              { maskUrl(url) }
            </span>

            <div className="flex gap-4">
              <span className="text-grey block font-sans ftext-lg">Visitas: {visitsCount}</span>
              <span className="text-grey block font-sans ftext-lg">Expira: {expiresAt}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-cyan block font-sans font-semibold ftext-lg">
              {`${import.meta.env.VITE_URI}/${shortenVersion}`}
            </span>

            <button
              className="bg-cyan text-white py-2.5 px-7 rounded-xl font-sans font-bold max-xl:w-full"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
