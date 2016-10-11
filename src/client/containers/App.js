import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import ColorDefs from "../components/ColorDefs";
import Panel from "../components/Panel";
import { WIDTH, HEIGHT } from "../designer";

class App extends Component {
  static propTypes = {
    actions : PropTypes.objectOf(PropTypes.func).isRequired,
  };

  constructor(...args) {
    super(...args);

    this.state = { width: window.innerWidth, height: window.innerHeight };

    this.onResize = ::this.onResize;
    this.onTouchStart = ::this.onTouchStart;
    this.onTouchEnd = ::this.onTouchEnd;
    this.onKeyDown = ::this.onKeyDown;
    this.onKeyUp = ::this.onKeyUp;
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("touchstart", this.onTouchStart);
    window.addEventListener("touchend", this.onTouchEnd);
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("touchstart", this.onTouchStart);
    window.removeEventListener("touchend", this.onTouchEnd);
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("keyup", this.onKeyUp);
  }

  onResize() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onTouchStart(e) {
    e.preventDefault();
  }

  onTouchEnd(e) {
    e.preventDefault();
  }

  onKeyDown(/* e */) {
  }

  onKeyUp(/* e */) {
  }

  render() {
    const width  = window.innerWidth;
    const height = window.innerHeight;
    const style  = {};

    const viewRatio = WIDTH / HEIGHT;

    if (width < height * viewRatio) {
      style.width  = width;
      style.height = width / viewRatio;
      style.margin = `${ (height - style.height) / 2 }px 0`;
    } else {
      style.width  = height * viewRatio;
      style.height = height;
      style.margin = `0 ${ (width - style.width) / 2 }px`;
    }

    return (
      <svg className="app" style={ style } viewBox={ `0 0 ${ WIDTH } ${ HEIGHT }` }>
        <ColorDefs />
        <Panel />
      </svg>
    );
  }
}

export default connect(state => state)(App);
