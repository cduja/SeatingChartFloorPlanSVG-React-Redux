import React, { PropTypes } from 'react';
import { Paper } from 'material-ui';

import styles from './styles';

function Chair({ style }) {
  return (
    <div style={{ ...styles.container, ...style }} />
  );
}

Chair.propTypes = {
  style: PropTypes.shape(),
};

Chair.defaultProps = {
  style: 0,
};

export default Chair;
