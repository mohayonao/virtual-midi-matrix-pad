import * as types from "../../common/ActionTypes";

export function setState(state) {
  return { type: types.SET_STATE, state };
}

export function valueChange(row, col, value) {
  return { type: types.VALUE_CHANGE, row, col, value };
}

export function selectKeyTemplate(index, time = Date.now()) {
  return { type: types.SELECT_KEY_TEMPLATE, index, time };
}
