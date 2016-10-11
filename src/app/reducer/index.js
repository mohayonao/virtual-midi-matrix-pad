import initState from "../../common/initState";
import * as types from "../../common/ActionTypes";
import { NUMBER_OF_ROWS, NUMBER_OF_COLS } from "../../common/constants";

export default (state = initState, action) => {
  switch (action.type) {
  case types.VALUE_SET:
    if (0 <= action.row && action.row < NUMBER_OF_ROWS) {
      if (0 <= action.col && action.col < NUMBER_OF_COLS) {
        if (state.data[action.row][action.col] !== action.value) {
          return { ...state, data: state.data.map((row, i) => {
            return action.row !== i ? row : [].concat(row.slice(0, action.col), action.value, row.slice(action.col + 1))
          })};
        }
      }
    }
  }
  return state;
};
