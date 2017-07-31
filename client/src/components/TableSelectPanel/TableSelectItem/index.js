import React, { PropTypes } from 'react';
import { MenuItem } from 'material-ui';
import tables from 'constants/tables';
import styles from './styles';

function TableSelectItem({ tableInfo: { type, group, label, chairs, size, width, height }, onSelect }) {
  const SVGICON = require(`assets/svg/${type}.svg`);
  return (
    <div style={styles.container[group]} onClick={onSelect}>
      <MenuItem style={styles.menuItem} innerDivStyle={styles.menuItemInner}>
        <SVGICON { ...styles.svg } />
        <span style={styles.label}>{label}</span>
      </MenuItem>
    </div>
  );
}

TableSelectItem.propTypes = {
  tableInfo: PropTypes.shape({
    type: PropTypes.string,
    group: PropTypes.string,
    label: PropTypes.string,
    chairs: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        top: PropTypes.number,
        left: PropTypes.number,
        bottom: PropTypes.number,
        right: PropTypes.number,
      }),
    ]),
    size: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  onSelect: PropTypes.func,
};

TableSelectItem.defaultProps = {
  tableInfo: PropTypes.shape({
    type: 'chair',
    label: 'Chair',
    group: 'seating',
  }),
  onSelect: () => {},
};

export default TableSelectItem;
