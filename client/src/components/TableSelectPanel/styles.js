import colors from 'styles/colors';

const styles = {
  container: {
    backgroundColor: colors.white,
    opacity: 0,
    pointerEvents: 'none',
    transition: 'opacity .s',
  },
  open: {
    opacity: 1,
    pointerEvents: 'all',
    transition: 'opacity .5s',
  },
};

export default styles;
