import React, { Component, PropTypes } from "react";
import { LPadPadRect, LPadPadOval } from "./LPadPad";
import { toCX, toCY, PadLayout } from "../designer";

export default class LPadRow extends Component {
  static propTypes = {
    row          : PropTypes.number.isRequired,
    data         : PropTypes.arrayOf(PropTypes.number).isRequired,
    onValueChange: PropTypes.func.isRequired,
  };

  constructor(...args) {
    super(...args);

    this._layout = PadLayout[this.props.row].map(pad => pad.charAt(0)).map((ch) => {
      return { "[": LPadPadRect, "(": LPadPadOval }[ch] || null;
    });
  }

  shouldComponentUpdate(nextProp) {
    return nextProp.data !== this.props.data;
  }

  render() {
    const { row, data } = this.props;
    const elems = [];

    data.forEach((colData, col) => {
      const LPadPad = this._layout[col] || null;

      if (LPadPad !== null) {
        const cx = toCX(col);
        const cy = toCY(row);
        const onValueChange = this.props.onValueChange.bind(null, col);

        elems.push(
          <LPadPad key={ col } cx={ cx } cy={ cy } data={ colData } onValueChange={ onValueChange }/>
        );
      }
    });

    return (<g className="lpad-row">{ elems }</g>);
  }
}
