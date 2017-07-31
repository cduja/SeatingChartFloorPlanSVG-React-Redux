import colors from 'styles/colors';

const styles = {
  linkStyle: {
    textDecoration: 'none',
  },
  wrapperStyle: {
    height: '100%',
  },
  mobileOverlayStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  desktopContainerStyle: {
    position: 'relative',
  },
  logoContainerStyle: {
    height: 64,
    paddingLeft: 15,
    backgroundColor: colors.primary,
  },
  menuItem: {
    fontSize: 20,
    fontWeight: 300,
    color: colors.white,
  },
  menuItemIcon: {
    fontSize: 25,
    color: colors.lightGray,
    position: 'absolute',
    left: -20,
    lineHeight: '50px',
  },
  menuItemIconActive: {
    color: colors.primary,
  },
  table: {
    width: '33%',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'top',
  },
  tableIcon: {
    fill: colors.third,
    width: 50,
  },
  subItemLabel: {
    height: 50,
    color: colors.third,
    fontSize: 12,
  },
};

export default styles;
