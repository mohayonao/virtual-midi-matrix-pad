import "run-with-mocha";
import assert from "assert";
import React from "react";
import { shallow } from "enzyme";
import Panel from "../../../src/client/components/Panel";

function setup(props = {}) {
  props = { ...props };

  const component = shallow(
    <Panel { ...props }/>
  );

  return { component, props };
}

describe("components/Panel", () => {
  it("wrap <g class='panel'>", () => {
    const { component } = setup();

    assert(component.root.type() === "g");
    assert(component.root.hasClass("panel"));
  });
});
