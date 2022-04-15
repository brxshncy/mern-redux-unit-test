import { AnyAction } from "redux";
import { TweetModel } from "../../models/TweetModel";
import { GET_TWEETS, POST_TWEET } from "./../../constants/tweetConstants";

const initialState: TweetModel[] = [
  {
    id: 1,
    tweet: "Tweet 1",
    username: "brxshncy",
    name: "Bruce",
  },
];
export const tweetReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_TWEETS:
      return (state = action.payload);
      break;
    case POST_TWEET:
      return [...state, action.payload];
      break;
    default:
      return state;
  }
};
