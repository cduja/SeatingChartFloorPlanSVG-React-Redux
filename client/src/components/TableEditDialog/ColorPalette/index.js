import React, { PropTypes } from 'react';
import { Paper } from 'material-ui';
import colors from 'styles/colors';
import styles from './styles';

class ColorPalette extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
  };

  defaultProps = {
    info: {
      color: colors.primary,
      active: false,
      onClick: () => {},
    },
  };

  state = { hover: false };

  onMouseEnter = () => {
    this.setState({ hover: true });
  }

  onMouseLeave = () => {
    this.setState({ hover: false });
  }

  render() {
    const { color, active, onClick } = this.props;
    const { hover } = this.state;
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={{
          ...styles.container,
        }}
        onTouchTap={onClick}
      >
        <div style={{
          ...styles.item,
          ...(hover && styles.hoverItem),
          ...(active && styles.activeContainer),
          backgroundColor: color,
        }} />
      </div>
    );
  }
}

export default ColorPalette;
