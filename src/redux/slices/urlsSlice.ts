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
    fetchUrls: (state, action) => {
      state.sessionUrls = [action.payload.newUrl, ...state.sessionUrls],
      state.isAddingNewUrl = false,
      state.isLoadingUrls = false
    },
    fetchErrors: (state, action) => {
      state.errors = action.payload.errors,
      state.isLoadingUrls = false,
      state.isAddingNewUrl = false
    }
  },
});

export const {
  activateAddingNewUrl,
  fetchUrls,
  fetchErrors
} = urlsSlice.actions;
