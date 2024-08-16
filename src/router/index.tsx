import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../redux/thunks/sessionThunks";
import { routes } from "./routes";

export default function Router() {
  const dispatch: AppDispatch = useDispatch();
  const sessionState = useSelector((state: RootState) => state.session);

  useEffect(() => {
    dispatch(getSession());
  }, []);

  if(sessionState.isLoadingSession) return(<div>Loading...</div>);

  return (
    <RouterProvider router={routes} />
  )
}
