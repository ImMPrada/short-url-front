import { AppThunk } from "../store";
import { rebootState as rebootSessionState } from "../slices/sessionSlice";
import { removeCookie } from "../../cookies_fetching/session";
import {
  activateAddingNewUrl,
  fetchAllUrls,
  fetchErrors,
  fetchUrl,
  rebootState as rebootUrlsState
} from "../slices/urlsSlice";
import { createUrl, getAllUrls } from "../../api_fetching/urls";
import { HandleUrlCreationParams } from "./types";

export const getUrls = (temporarySessionToken: string | null): AppThunk => async (dispatch) => {
  const response = await getAllUrls({ temporarySessionToken });
  
  if (response.status === 401) {
    removeCookie('isActiveSession');
    removeCookie('temporarySessionCookie');
    dispatch(rebootSessionState());
    dispatch(rebootUrlsState());

    return;
  }

  if(!response.ok){ return; }

  const data = await response.json();
  dispatch(fetchAllUrls({
    urls: data
  }))
}

export const handleUrlCreation = ({e, newUrl, temporarySessionToken}: HandleUrlCreationParams): AppThunk => async (dispatch) => {
  e.preventDefault();
  dispatch(activateAddingNewUrl());

  const response = await createUrl({ urlToSubmit: newUrl, temporarySessionToken });

  // if(response.status === 422){ setSubmittingErrors([data.errors]); }

  if(response.status === 401) {
    removeCookie('isActiveSession');
    removeCookie('temporarySessionCookie');
    dispatch(rebootSessionState());
    dispatch(rebootUrlsState());

    return;
  }

  const data = await response.json();

  if (!response.ok) {
    dispatch(fetchErrors({errors: data.errors}));
    return;
  }

  dispatch(fetchUrl({ newUrl: data.registeredUrl }))
}
