import React, { Component } from "react";

export default class Panel extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (<g className="panel"></g>);
  }
}
