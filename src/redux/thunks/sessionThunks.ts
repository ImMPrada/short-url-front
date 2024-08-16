import { callCurrentUser, callLogin, callSignup, callTemporarySessionToken } from "../../api_fetching/session";
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
  removeCookie,
  setSessionCookie,
  setTemporarySessionCookie
} from "../../cookies_fetching/session";
import { HandleLoginParams, HandleSignupParams } from "./types";

export const getSession = (): AppThunk => async (dispatch) => {
  dispatch(loadingSession());

  const isActiveSession = getIsActiveSession();
  if (isActiveSession) {
    dispatch(fetchIsActiveSessionCookie({ isActiveSessionCookie: true }));
    dispatch(getCurrentUser());

    return;
  }

  const temporarySessionToken = getTemporarySessionTokenFromCookie();
  if (temporarySessionToken) {
    dispatch(fetchTemporarySession({ temporarySessionToken: temporarySessionToken }));
    return;
  }

  dispatch(getSessionToken());
}

const getSessionToken = (): AppThunk => async (dispatch) => {
  dispatch(loadingSession());

  const isActiveSession = getIsActiveSession();
  if (isActiveSession) {
    dispatch(fetchUsserSession({ currentUser: null })); // será mejor ejecutar una acción que obtenga el usuario actual?
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

const getCurrentUser = (): AppThunk => async (dispatch) => {
  dispatch(loadingSession());

  const response = await callCurrentUser();

  if (!response.ok) {
    dispatch(failedSession({ errors: null }));
    return;
  }

  const data = await response.json();
  dispatch(fetchUsserSession({ currentUser: data.user }));
}

export const handleSignUp = ({e, email, password, confirmPassword, username, temporarySessionToken}: HandleSignupParams): AppThunk => async (dispatch) => {
  e.preventDefault();
  dispatch(loadingSession());

  const response = await callSignup({
    username,
    email,
    password,
    confirmPassword,
    temporarySessionToken
  });

  const data = await response.json();

  if(!response.ok){
    dispatch(failedSession({ errors: data.errors }));
    return;
  }

  setSessionCookie();
  removeCookie('temporarySessionCookie');
  dispatch(fetchUsserSession({ currentUser: data.user }));
};

export const handleLogin = ({e, email, password, temporarySessionToken}: HandleLoginParams): AppThunk => async (dispatch) => {
  e.preventDefault();
    dispatch(loadingSession());

    const response = await callLogin({
      email,
      password,
      temporarySessionToken
    });

    const data = await response.json();

    console.log(data);

    if(!response.ok){
      dispatch(failedSession({ errors: data.errors }));
      return;
    }

    document.cookie = `isActiveSession=true; Secure=True; SameSite=Strict`;
    removeCookie('temporarySessionCookie');
    dispatch(fetchUsserSession({ currentUser: data.user }));
}


