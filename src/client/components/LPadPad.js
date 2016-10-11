import React, { Component, PropTypes } from "react";

export default class LPadPad extends Component {
  static propTypes = {
    cx           : PropTypes.number.isRequired,
    cy           : PropTypes.number.isRequired,
    data         : PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired,
  };

  constructor(...args) {
    super(...args);

    this._events = {
      "onMouseDown" : ::this.onMouseDown,
      "onMouseUp"   : ::this.onMouseUp,
      "onMouseOut"  : ::this.onMouseOut,
      "onTouchStart": ::this.onTouchStart,
      "onTouchEnd"  : ::this.onTouchEnd,
    };
    this._onmouse = false;
  }

  shouldComponentUpdate(nextProp) {
    return nextProp.data !== this.props.data;
  }

  onMouseDown() {
    this._onmouse = true;
    this.props.onValueChange(0x7f);
  }

  onMouseUp() {
    this._onmouse = false;
    this.props.onValueChange(0x00);
  }

  onMouseOut() {
    if (this._onmouse) {
      this.onMouseUp();
    }
  }

  onTouchStart() {
    this.onMouseDown();
  }

  onTouchEnd() {
    this.onMouseUp();
  }

  render() {
    return (
      <g className="lpad-pad" { ...this._events }>
        { this.renderChild() }
      </g>
    );
  }

  renderChild() {
    return null;
  }
}

export class LPadPadRect extends LPadPad {
  static Size = 84;

  renderChild() {
    const { cx, cy, data } = this.props;
    const x = cx - (LPadPadRect.Size / 2);
    const y = cy - (LPadPadRect.Size / 2);
    const width  = LPadPadRect.Size;
    const height = LPadPadRect.Size;
    const fill = `url(#led${ data })`;

    return (
      <rect x={ x } y={ y } width={ width } height={ height } rx={ 10 } ry={ 10 } fill={ fill } stroke="#050504" strokeWidth={ 1 }/>
    );
  }
}

export class LPadPadOval extends LPadPad {
  static Size = 30;

  renderChild() {
    const { cx, cy, data } = this.props;
    const r = LPadPadOval.Size;
    const stroke = `url(#led${ data })`;

    return (
      <circle cx={ cx } cy={ cy } r={ r } fill="transparent" stroke={ stroke } strokeWidth={ 8 }/>
    );
  }
}
