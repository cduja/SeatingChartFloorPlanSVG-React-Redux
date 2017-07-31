import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

function Logo({ onRequestChange }) {
  return (
    <Link to="/" style={styles.logoWrapper} onTouchTap={() => onRequestChange(false)}>
      Seating Chart
    </Link>
  );
}

Logo.propTypes = {
  onRequestChange: PropTypes.func,
};

Logo.defaultProps = {
  onRequestChange: () => {},
};

export default Logo;
