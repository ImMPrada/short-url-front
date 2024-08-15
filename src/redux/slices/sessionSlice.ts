import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isLoadingSession: true,
    temporarySessionToken: null,
    currentUser: null,
    isActiveSessionCookie: false,
    errors: null
  },
  reducers: {
    loadingSession: (state) => {
      state.isLoadingSession = true;
    },
    fetchIsActiveSessionCookie: (state, action) => {
      state.isActiveSessionCookie = action.payload.isActiveSessionCookie;
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
    }
  },
});

export const {
  loadingSession,
  fetchIsActiveSessionCookie,
  fetchTemporarySession,
  fetchUsserSession,
  failedSession
} = sessionSlice.actions;
