import "run-with-mocha";
import assert from "assert";
import * as actionCreators from "../../../src/client/actions";
import * as types from "../../../src/common/ActionTypes";

describe("actions", () => {
  it("setState should create SET_STATE action", () => {
    const actual = actionCreators.setState({ value: 100 });
    const expected = { type: types.SET_STATE, state: { value: 100 } };

    assert.deepEqual(actual, expected);
  });

  it("valueChange should create VALUE_CHANGE action", () => {
    const actual = actionCreators.valueChange(1, 2, 3);
    const expected = { type: types.VALUE_CHANGE, row: 1, col: 2, value: 3 };

    assert.deepEqual(actual, expected);
  });
});
