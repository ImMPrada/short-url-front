import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../redux/thunks/sessionThunks";
import { routes } from "./routes";
import { RingLoader } from "react-spinners";

export default function Router() {
  const dispatch: AppDispatch = useDispatch();
  const sessionState = useSelector((state: RootState) => state.session);

  useEffect(() => {
    dispatch(getSession(sessionState));
  }, []);

  if(sessionState.isLoadingSession) return(
    <div className="min-h-screen min-w-screen flex flex-col gap-10 items-center justify-center">
      <RingLoader
        color={"#3A3054"}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );

  return (
    <RouterProvider router={routes} />
  )
}
