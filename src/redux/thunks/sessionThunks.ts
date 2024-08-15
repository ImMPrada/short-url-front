import { callTemporarySessionToken } from "../../api_fetching/session";
import { AppThunk } from "../store";
import {
  loadingSession,
  fetchTemporarySession,
  fetchUsserSession,
  failedSession,
  fetchIsActiveSessionCookie
} from "../slices/sessionSlice";
import {
  getIsActiveSession,
  getTemporarySessionTokenFromCookie,
  setTemporarySessionCookie
} from "../../cookies_fetching/session";

export const getSessionToken = (): AppThunk => async (dispatch) => {
  dispatch(loadingSession());

  const isActiveSession = getIsActiveSession();
  if (isActiveSession) {
    dispatch(fetchUsserSession({ currentUser: null }));
    return;
  }

  const temporarySessionToken = getTemporarySessionTokenFromCookie();
  if (temporarySessionToken) {
    dispatch(fetchTemporarySession({ temporarySessionToken: temporarySessionToken }));
    return;
  }

  const response = await callTemporarySessionToken();
  const data = await response.json();

  if (!response.ok) {
    dispatch(failedSession({ errors: data.errors }));
    return;
  }

  console.log(data)

  setTemporarySessionCookie(data.token);
  dispatch(fetchTemporarySession({ temporarySessionToken: data.token }));
};
