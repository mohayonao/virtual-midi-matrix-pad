import React, { Component } from "react";
import { NUMBER_OF_COLS } from "../../common/constants";
import { toCX, toCY } from "../designer";
import { PadLayout, PadCaptions } from "../designer";
import { LPadPadOval } from "./LPadPad";

export default class Panel extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const elems = [];

    PadLayout.forEach((rowData, row) => {
      rowData.forEach((pad, col) => {
        if (!PadCaptions[pad]) {
          return;
        }
        const caption = PadCaptions[pad];
        const key = row * NUMBER_OF_COLS + col;
        const cx = toCX(col);
        const cy = toCY(row);

        elems.push(
          <g key={ key }>
            <circle cx={ cx } cy={ cy } r={ LPadPadOval.Size } fill="#050504"/>
            <text x={ cx } y={ cy } fill="#f0f0f0" textAnchor="middle" dominantBaseline="middle">
              { caption }
            </text>
          </g>
        );
      });
    });

    return (<g className="panel">{ elems }</g>);
  }
}
