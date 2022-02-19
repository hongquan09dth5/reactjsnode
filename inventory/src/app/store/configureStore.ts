import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ThunkAppDispatch } from "./../types/types";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware<ThunkAppDispatch, typeof rootReducer>(thunk)
  )
);

export default store;
