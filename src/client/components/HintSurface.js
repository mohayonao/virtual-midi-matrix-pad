import React, { Component, PropTypes } from "react";
import Volatile from "./ui/Volatile";
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

@Volatile({ timeout: 1000 })
export default class HintSurface extends Component {
  static propTypes = {
    keyTemplate: PropTypes.number.isRequired,
    selectKeyTemplateTime: PropTypes.number.isRequired,
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.selectKeyTemplateTime !== this.props.selectKeyTemplateTime;
  }

  render() {
    const template = KeyTemplate[this.props.keyTemplate];
    const elems = MatrixKeys.map((ch, i) => {
      const cx = toCX(template[i][1]) - 84 * 0.4;
      const cy = toCY(template[i][0]) - 84 * 0.4;

      return [
        <circle key={ i } cx={ cx } cy={ cy } { ...CircleParams }/>,
        <text key={ i + 100 } x={ cx } y={ cy } { ...FontParams }>{ ch }</text>,
      ];
    });

    return (<g>{ elems }</g>);
  }
}
