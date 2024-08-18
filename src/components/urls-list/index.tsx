import Item from "./item";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function UrlsLsit() {
  const urlsState = useSelector((state: RootState) => state.urls);

  if (urlsState.sessionUrls.length === 0) { return null; }

  return (
    <div className="flex flex-col py-6 bg-light-grey  relative">
      <div className="w-[1110px] mx-auto flex flex-col gap-4">
        {
          urlsState.sessionUrls.map((url) => (
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
