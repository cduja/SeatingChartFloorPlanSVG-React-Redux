import colors from 'styles/colors';

const styles = {
  containerStyle: {
    backgroundColor: colors.secondary,
    padding: '20px 20px 40px 20px',
  },
  avatarCircle: {
    backgroundColor: colors.white,
    width: 50,
    height: 50,
    textAlign: 'center',
    color: colors.secondary,
    fontSize: 20,
    lineHeight: '50px',
    display: 'inline-block',
    marginRight: 10,
    verticalAlign: 'top',
  },
  textWrapper: {
    display: 'inline-block',
    color: colors.white,
    fontSize: 15,
    lineHeight: '25px',
    paddingTop: 12,
    verticalAlign: 'top',
    fontWeight: 300,
    cursor: 'pointer',
  },
  dropDownIcon: {
    color: colors.white,
    position: 'absolute',
    verticalAlign: 'top',
    fontSize: 30,
    lineHeight: '25px',
  }
};

export default styles;
