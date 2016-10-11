import initState from "../../common/initState";
import * as types from "../../common/ActionTypes";

export default (state = initState, action) => {
  switch (action.type) {
  case types.SET_STATE:
    return { ...state, ...action.state };
  }
  return state;
};
