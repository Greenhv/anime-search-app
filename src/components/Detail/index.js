import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Detail extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div>Detalle</div>
    );
  }
}

export default Detail;
