import colors from 'styles/colors';

const styles = {
  title: {
    cursor: 'pointer',
  },
  notificationsIcon: {
    color: colors.white,
    cursor: 'pointer',
  },
  notificationsIconWrapper: {
    display: 'flex',
    position: 'absolute',
    right: 40,
    top: 0,
    height: '100%',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    right: -5,
    top: 17,
  },
};

export default styles;
