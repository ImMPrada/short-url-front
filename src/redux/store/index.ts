import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { sessionSlice } from '../slices/sessionSlice'


export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
