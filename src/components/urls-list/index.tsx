import { useContext, useEffect } from "react";
import { UrlsContext } from "../../contexts/urls-context";
import Item from "./item";
import { SessionContext } from "../../contexts/session-context";

export default function UrlsLsit() {
  const { urlsList, fetchAllUrls } = useContext(UrlsContext);
  const { temporarySessionToken } = useContext(SessionContext);

  useEffect(() => {
    fetchAllUrls(temporarySessionToken)
  }, []);

  if (urlsList.length === 0) { return null; }

  return (
    <div className="flex flex-col py-6 bg-light-grey  relative">
      <div className="w-[1110px] mx-auto flex flex-col gap-4">
        {
          urlsList.map((url) => (
            <Item
              key={url.shortVersion}
              url={url.url}
              shortenVersion={url.shortVersion}
              expiresAt={url.expiresAt}
              visitsCount={0}
            />
          ))
        }
      </div>
    </div>
  );
}
