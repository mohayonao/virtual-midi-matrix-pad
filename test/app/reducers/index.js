import "run-with-mocha";
import assert from "assert";
import reducer from "../../../src/app/reducers";
import { velocity } from "../../../src/app/reducers";
import * as types from "../../../src/common/ActionTypes";

describe("reducer", () => {
  it("init state", () => {
    const initState = reducer(undefined, {});

    assert(typeof initState === "object");
  });

  it("VALUE_SET", () => {
    const state = { data: [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ] };
    const action = { type: types.VALUE_SET, row: 1, col: 2, value: 3 };
    const nextState = reducer(state, action);
    const expected = { data: [ [ 0, 0, 0 ], [ 0, 0, 3 ], [ 0, 0, 0 ] ] };

    assert(state !== nextState);
    assert.deepEqual(nextState, expected);
  });

  describe("velocity", () => {
    it("range", () => {
      assert(velocity( -1) ===   0);
      assert(velocity(  0) ===   0);
      assert(velocity(127) === 127);
      assert(velocity(128) === 127);
    });
  });
});
