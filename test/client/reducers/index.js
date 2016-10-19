import "run-with-mocha";
import assert from "assert";
import reducer from "../../../src/client/reducers";
import * as types from "../../../src/common/ActionTypes";

describe("reducer", () => {
  it("init state", () => {
    const initState = reducer(undefined, {});

    assert(typeof initState === "object");
  });

  it("SET_STATE", () => {
    const state = { foo: 0, bar: 1 };
    const action = { type: types.SET_STATE, state: { foo: 1, baz: 3 } };
    const nextState = reducer(state, action);
    const expected = { foo: 1, bar: 1, baz: 3 };

    assert(state !== nextState);
    assert.deepEqual(nextState, expected);
  });

  it("APPLY_PATCH", () => {
    const state = { foo: 0, bar: 1 };
    const action = { type: types.APPLY_PATCH, patch: [
       { op: "replace", path: "/bar", value: 2 },
    ] };
    const nextState = reducer(state, action);
    const expected = { foo: 0, bar: 2 };

    assert(state !== nextState);
    assert.deepEqual(nextState, expected);
  });

  it("SELECT_KEY_TEMPLATE", () => {
    const state = { data: 0 };
    const action = { type: types.SELECT_KEY_TEMPLATE, index: 1, time: 2 };
    const nextState = reducer(state, action);
    const expected = { data: 0, keyTemplate: 1, selectKeyTemplateTime: 2 };

    assert(state !== nextState);
    assert.deepEqual(nextState, expected);
  });
});
