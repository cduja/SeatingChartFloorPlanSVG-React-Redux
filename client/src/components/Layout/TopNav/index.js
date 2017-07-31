import React, { PropTypes } from 'react';
import { AppBar, Paper, IconButton, FlatButton, FontIcon } from 'material-ui';
import { NavigationClose } from 'material-ui/svg-icons';
import { Responsive, Badge } from 'components';
import Logo from '../Logo';
import styles from './styles';

function TopNav({ menuOpen, onLeftIconButtonTouchTap, onRightIconButtonTouchTap }) {
  const title = (
    <div>
      <Responsive size="desktop">
        <Logo />
      </Responsive>
      <Responsive size="mobile" />
    </div>
  )
  const iconElementRight = (
    <div style={styles.notificationsIconWrapper}>
      <FontIcon
        onTouchTap={onRightIconButtonTouchTap}
        className="material-icons"
        style={styles.notificationsIcon}
      >
        notifications
      </FontIcon>
      <div style={styles.badge}>
        <Badge number={1} />
      </div>
    </div>
  );
  return (
    <Paper zDepth={2}>
      <AppBar
        title={title}
        onLeftIconButtonTouchTap={onLeftIconButtonTouchTap}
        iconElementRight={iconElementRight}
      />
    </Paper>
  );
}

TopNav.propTypes = {
  menuOpen: PropTypes.bool,
  onLeftIconButtonTouchTap: PropTypes.func,
  onRightIconButtonTouchTap: PropTypes.func,
};

TopNav.defaultProps = {
    menuOpen: false,
    onLeftIconButtonTouchTap: () => {},
    onRightIconButtonTouchTap: () => {},
};

export default TopNav;
