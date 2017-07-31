import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';

function Responsive({ children, size }) {
  let query = '(min-width: 768px)';
  if (size === 'mobile') query = '(min-device-width: 320px) and (max-width: 767px)';
  return (
    <MediaQuery query={query}>
      {children}
    </MediaQuery>
  );
}

Responsive.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
};

Responsive.defaultProps = {
  children: null,
  size: 'mobile',
}

export default Responsive;
