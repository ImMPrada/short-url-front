import { createSlice } from "@reduxjs/toolkit";
import { SessionState } from "./types";

const initialState: SessionState = {
  isLoadingSession: true,
  temporarySessionToken: null,
  currentUser: null,
  isActiveSessionCookie: false,
  errors: null
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    loadingSession: (state) => {
      state.isLoadingSession = true;
    },
    fetchIsActiveSessionCookie: (state) => {
      state.isActiveSessionCookie = true;
    },
    fetchTemporarySession: (state, action) => {
      state.isLoadingSession = false;
      state.temporarySessionToken = action.payload.temporarySessionToken;
    },
    fetchUsserSession: (state, action) => {
      state.temporarySessionToken = null;
      state.isLoadingSession = false;
      state.currentUser = action.payload.currentUser;
      state.isActiveSessionCookie = true;
    },
    failedSession: (state, action) => {
      state.isLoadingSession = false;
      state.errors = action.payload.errors;
    },
    rebootState: (state) => {
      state.isLoadingSession = true;
      state.temporarySessionToken = null;
      state.currentUser = null;
      state.isActiveSessionCookie = false;
      state.errors = null;
    }
  },
});

export const {
  loadingSession,
  fetchIsActiveSessionCookie,
  fetchTemporarySession,
  fetchUsserSession,
  failedSession,
  rebootState
} = sessionSlice.actions;
