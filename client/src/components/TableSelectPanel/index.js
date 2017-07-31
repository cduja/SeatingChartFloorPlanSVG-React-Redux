import React, { PropTypes } from 'react';
import { Paper, Popover } from 'material-ui';
import { PopoverAnimationVertical } from 'material-ui/Popover';
import tables from 'constants/tables';
import TableSelectItem from './TableSelectItem';
import styles from './styles';

function TableSelectPanel({ onSelectTable }) {
  return (
    <div>
      {
        tables.map((table, index) =>
          <TableSelectItem key={table.type} tableInfo={table} onSelect={() => onSelectTable(index)} />
        )
      }
    </div>
  );
}

TableSelectPanel.propTypes = {
  onSelectTable: PropTypes.func,
};

TableSelectPanel.defaultProps = {
  onSelectTable: () => {},
};

export default TableSelectPanel;
