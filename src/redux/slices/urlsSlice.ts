import { createSlice } from "@reduxjs/toolkit";
import { UrlsState } from "./types";

const initialState: UrlsState = {
  isLoadingUrls: true,
  isAddingNewUrl: false,
  sessionUrls: [],
  errors: null
};

export const urlsSlice = createSlice({
  name: "urls",
  initialState,
  reducers: {
    activateAddingNewUrl: (state) => {
      state.isLoadingUrls = false,
      state.isAddingNewUrl = true
    },
    fetchAllUrls: (state, action) => {
      state.sessionUrls = action.payload.urls,
      state.isAddingNewUrl = false,
      state.isLoadingUrls = false
    },
    fetchUrl: (state, action) => {
      state.sessionUrls = [action.payload.newUrl, ...state.sessionUrls],
      state.isAddingNewUrl = false,
      state.isLoadingUrls = false
    },
    fetchErrors: (state, action) => {
      state.errors = action.payload.errors,
      state.isLoadingUrls = false,
      state.isAddingNewUrl = false
    },
    rebootState: (state) => {
      state.isLoadingUrls = false,
      state.isAddingNewUrl = false,
      state.sessionUrls = [],
      state.errors = null
    }
  },
});

export const {
  activateAddingNewUrl,
  fetchAllUrls,
  fetchUrl,
  fetchErrors,
  rebootState
} = urlsSlice.actions;
