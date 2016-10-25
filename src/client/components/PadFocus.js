import React, { Component, PropTypes } from "react";
import { LPadPadRect } from "./LPadPad";
import { toCX, toCY } from "../designer";
import KeyTemplate, { MatrixKeys } from "../designer/KeyTemplate";

const CircleParams = {
  fill: "rgba(5, 5, 4, 0.5)",
  r: 20,
};

const FontParams = {
  fill: "#b5a2a2",
  textAnchor: "middle",
  dominantBaseline: "middle",
};

export default class PadFocus extends Component {
  static propTypes = {
    keyTemplate: PropTypes.number.isRequired,
    selectKeyTemplateTime: PropTypes.number.isRequired,
  };

  constructor(...args) {
    super(...args);

    this.state = { visible: false };
    this._timerId = 0;
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.selectKeyTemplateTime !== this.props.selectKeyTemplateTime) {
      this.setState({ visible: true });
      clearTimeout(this._timerId);
      this._timerId = setTimeout(() => {
        this.setState({ visible: false });
      }, 1000);
    }
  }

  shouldComponentUpdate(nextProp, nextState) {
    return (
      nextProp.selectKeyTemplateTime !== this.props.selectKeyTemplateTime ||
      nextState.visible !== this.state.visible
    );
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    const template = KeyTemplate[this.props.keyTemplate];
    const elems = MatrixKeys.map((ch, i) => {
      const cx = toCX(template[i][1]) - LPadPadRect.Size * 0.4;
      const cy = toCY(template[i][0]) - LPadPadRect.Size * 0.4;

      return [
        <circle key={ i } cx={ cx } cy={ cy } { ...CircleParams }/>,
        <text key={ i + 100 } x={ cx } y={ cy } { ...FontParams }>{ ch }</text>,
      ];
    });

    return (<g>{ elems }</g>);
  }
}
