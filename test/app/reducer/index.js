import "run-with-mocha";
import assert from "assert";
import clone from "lodash.clonedeep";
import * as appActionCreators from "../../../src/app/actions";
import reducer from "../../../src/app/reducer";

describe("reducer", () => {
  it("init state", () => {
    const initState = clone(reducer(undefined, {}));

    assert(typeof initState === "object");
  });

  it("value set", () => {
    const action = appActionCreators.valueSet(1, 2, 3);
    const initState = clone(reducer(undefined, {}));
    const expected = clone(initState); {
      expected.data[1][2] = 3;
    }
    const actual = reducer(initState, action);

    assert(actual !== initState);
    assert.deepEqual(actual, expected);
  });
});
