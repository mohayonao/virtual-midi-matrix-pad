import initState from "../../common/initState";
import * as types from "../../common/ActionTypes";

const _initState = { ...initState, ...{
  keyTemplate: 0,
  selectKeyTemplateTime: 0,
} };

export default (state = _initState, action) => {
  switch (action.type) {
  case types.SET_STATE:
    return { ...state, ...action.state };
  case types.SELECT_KEY_TEMPLATE:
    return { ...state, keyTemplate: action.index, selectKeyTemplateTime: action.time };
  }
  return state;
};
