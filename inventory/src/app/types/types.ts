import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import store from "./../store/configureStore";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
export type ThunkAppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
