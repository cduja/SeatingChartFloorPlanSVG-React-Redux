import React, { PropTypes } from 'react';
import TopNav from './TopNav';
import LeftNav from './LeftNav';

import styles from './styles';

class Layout extends React.Component {
  static propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({

    })),
    children: PropTypes.node,
  };

  static defaultProps = {
    actions: [],
    children: null,
  };

  state = ({
    leftNavOpen: false,
  });

  onLeftNavOpen = () => {
    this.setState({ leftNavOpen:true });
  }

  onClickLeftNavToggler = () => {
    this.onLeftNavOpen();
  }

  render() {
    const { actions, children } = this.props;
    const { leftNavOpen } = this.state;
    return (
      <div>
        <TopNav onLeftIconButtonTouchTap={this.onClickLeftNavToggler} actions={actions} />
        <div style={styles.containerWrapper}>
          <LeftNav open={leftNavOpen} onRequestChange={this.onLeftNavOpen} />
          <div style={styles.contentWrapper}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
