import { combineReducers } from "redux";
import { tweetReducer } from "./tweetReducer";

export const reducers = combineReducers({
  tweets: tweetReducer,
});

export type AppState = ReturnType<typeof reducers>;
