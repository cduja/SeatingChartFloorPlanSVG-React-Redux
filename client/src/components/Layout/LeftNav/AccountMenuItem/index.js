import React, { PropTypes } from 'react';
import { Paper, FontIcon } from 'material-ui';

import styles from './styles';

function AccountMenuItem({ personalInfo }) {
  return (
    <div style={styles.containerStyle}>
      <Paper zDepth={1} circle={true} style={styles.avatarCircle}>
        {`${personalInfo.firstName[0]}${personalInfo.lastName[0]}`}
      </Paper>
      <div style={styles.textWrapper}>
        {`${personalInfo.firstName} ${personalInfo.lastName}`}<br />
        {personalInfo.website}
        <FontIcon className="material-icons" style={styles.dropDownIcon}>arrow_drop_down</FontIcon>
      </div>
    </div>
  );
}
AccountMenuItem.propTypes = {
  personalInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    website: PropTypes.string,
  }),
};

AccountMenuItem.defaultProps = {
  personalInfo: {
    firstName: '',
    lastName: '',
    website: '',
  },
};

export default AccountMenuItem;
