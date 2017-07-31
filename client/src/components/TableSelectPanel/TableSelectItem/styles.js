import colors from 'styles/colors';

const styles = {
  container: {
    seating: {
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
    },
    square: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    rect: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    circle: {
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
    },
  },
  menuItem: {
    color: colors.primary,
  },
  menuItemInner: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontWeight: 500,
    fontFamily: 'monospace',
    paddingLeft: 10,
  },
  svg: {
    width: 30,
    height: 30,
    fill: colors.fourth,
  },
};

export default styles;
