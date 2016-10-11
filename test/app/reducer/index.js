import "run-with-mocha";
import assert from "assert";
import clone from "lodash.clonedeep";
// import * as actionCreators from "../../../src/client/actions";
import reducer from "../../../src/app/reducer";

describe("reducer", () => {
  it("init state", () => {
    const initState = clone(reducer(undefined, {}));

    assert(typeof initState === "object");
  });
});
