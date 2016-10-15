import patch from "json-touch-patch";
import initState from "../../common/initState";
import * as types from "../../common/ActionTypes";

export default (state = initState, action) => {
  switch (action.type) {
  case types.VALUE_SET:
    return patch(state, [
      { op: "replace", path: `/data/${ action.row }/${ action.col }`, value: action.value },
    ]);
  }
  return state;
};
