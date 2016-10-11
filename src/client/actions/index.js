import * as types from "../../common/ActionTypes";

export function setState(state) {
  return { type: types.SET_STATE, state };
}
