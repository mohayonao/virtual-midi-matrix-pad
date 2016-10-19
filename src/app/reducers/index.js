import patch from "json-touch-patch";
import initState from "../../common/initState";
import * as types from "../../common/ActionTypes";
import { clamp } from "../../common/utils";

export default (state = initState, action) => {
  switch (action.type) {
  case types.VALUE_SET:
    return patch(state, [
      { op: "replace", path: `/data/${ action.row }/${ action.col }`, value: velocity(action.value) },
    ]);
  }
  return state;
};

export function velocity(value) {
  return clamp(value, 0, 127);
}
