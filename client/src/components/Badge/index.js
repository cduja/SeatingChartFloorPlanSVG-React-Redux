import React, { PropTypes } from 'react';
import { Paper } from 'material-ui';

import styles from './styles';

function Badge({ number }) {
  return (
    <Paper zDepth={1} circle={true} style={styles.container}>
      {number}
    </Paper>
  );
}

Badge.propTypes = {
  number: PropTypes.number,
};

Badge.defaultProps = {
  number: 0,
};

export default Badge;
