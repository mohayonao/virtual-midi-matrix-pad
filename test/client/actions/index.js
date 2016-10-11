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
});
