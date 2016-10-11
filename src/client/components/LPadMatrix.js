import React, { Component, PropTypes } from "react";
import LPadRow from "./LPadRow";

export default class LPadMatrix extends Component {
  static propTypes = {
    data         : PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    onValueChange: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProp) {
    return nextProp.data !== this.props.data;
  }

  render() {
    const { data } = this.props;
    const elems = data.map((rowData, row) => {
      const onValueChange = this.props.onValueChange.bind(null, row);

      return (
        <LPadRow key={ row } row={ row } data={ rowData } onValueChange={ onValueChange }/>
      );
    });

    return (<g className="lpad-matrix">{ elems }</g>);
  }
}
