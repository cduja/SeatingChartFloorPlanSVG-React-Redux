const styles = {
  container: {
    padding: 3,
    display: 'inline-block',
    width: 16,
    height: 16,
    margin: 1,
    cursor: 'pointer',
    boxSizing: 'border-box',
    position: 'relative',
  },
  item: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    boxSizing: 'border-box',
  },
  hoverItem: {
    width: 18,
    height: 18,
    left: 2,
    top: 2,
  },
  activeContainer: {
    border: '2px solid rgba(0, 0, 0, 0.3)',
  },
};

export default styles;
