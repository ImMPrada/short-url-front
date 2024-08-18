import { useEffect, useState } from 'react';
import { ItemProps } from './types';

const MASK_LENGTH = 40;

export default function Item({ url, shortenVersion, expiresAt, visitsCount = 0}: ItemProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if(!isCopied) return;

    const timeout = setTimeout(() => {
      setIsCopied(false);
      clearTimeout(timeout);
    }, 2000);
  }, [isCopied]);

  const maskUrl = (url: string) => (
    url.length > MASK_LENGTH ? `${url.substring(0, MASK_LENGTH)}...` : url
  )

  const buildUrl = (urlUri: string) => `${import.meta.env.VITE_URI}/${urlUri}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(buildUrl(shortenVersion));
    setIsCopied(true);
  }

  return (
    <div className="w-[1110px] mx-auto">
      <div className="w-full items-center flex justify-between bg-white py-4 px-6 rounded-md">
        <div className="flex flex-col gap-2">
          <span className="text-black block font-sans font-semibold ftext-lg">
            { maskUrl(url) }
          </span>

          <div className="flex gap-4">
            <span className="text-grey block font-sans ftext-lg">Visitas: {visitsCount}</span>
            <span className="text-grey block font-sans ftext-lg">{`Expira: ${expiresAt}`}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-cyan block font-sans font-semibold ftext-lg">
            {buildUrl(shortenVersion)}
          </span>

          <button
            className={`text-white py-2.5 px-7 min-w-32 rounded-xl font-sans font-bold max-xl:w-full transition-all ${isCopied ? 'bg-purple-grey' : 'bg-cyan'}`}
            disabled={isCopied}
            onClick={handleCopy}
          >
            { isCopied ? 'Copied!' : 'Copy' }
          </button>
        </div>
      </div>
    </div>
  );
}
