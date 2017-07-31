import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Link, Switch, Route } from 'react-router-dom';
import { Drawer, List, ListItem } from 'material-ui';
import { Draggable } from 'react-drag-and-drop';
import { Responsive } from 'components';
import tables from 'constants/tables';
import AccountMenuItem from './AccountMenuItem';
import FontIcon from 'material-ui/FontIcon';
import Logo from '../Logo';

import styles from './styles';

function LeftNav({ open, onRequestChange, menuItems, personalInfo }) {
  const onDragStart = (e, ICON, color) => {
    var dragIcon = document.createElement('div');
    dragIcon.style=`width:50px; height:auto; position: fixed;`;
    render(<ICON style={styles.tableIcon} />, dragIcon);
    dragIcon.id = "drag-ghost";
    document.getElementById('root').appendChild(dragIcon);
    e.dataTransfer.setDragImage(dragIcon, dragIcon.offsetWidth / 2, dragIcon.offsetHeight / 2);
  };
  const onDragEnd = (e) => {
    let ghost = document.getElementById("drag-ghost");
    if (ghost.parentNode) {
      ghost.parentNode.removeChild(ghost);
    }
  }
  const accountItemContainer = <AccountMenuItem personalInfo={personalInfo} />;
  const menuItemsContainer = (
    <List>
      {
        menuItems.map(item =>
          <ListItem
            key={item.label}
            primaryText={item.label}
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            style={styles.menuItem}
            nestedItems={item.children.map(child => {
              const SVGICON = require(`assets/svg/${child.type}.svg`);
              return (
                <Draggable
                  key={child.label}
                  onDragStart={(e) => onDragStart(e, SVGICON)}
                  onDragEnd={onDragEnd}
                  type="table"
                  data={JSON.stringify(child)}
                  style={styles.table}
                >
                  <SVGICON {...styles.tableIcon} />
                  <div style={styles.subItemLabel}>{child.label}</div>
                </Draggable>
              );
            })}
          />
        )
      }
    </List>
  );
  const itemsContainer = (
    <div>
      {accountItemContainer}
      {menuItemsContainer}
    </div>
  );
  return (
    <div style={styles.wrapperStyle}>
      <Responsive size="desktop">
        <Drawer
          open={true}
          style={styles.wrapperStyle}
          containerStyle={styles.desktopContainerStyle}
        >
          {itemsContainer}
        </Drawer>
      </Responsive>
      <Responsive size="mobile">
        <Drawer
          open={open}
          docked={false}
          overlayStyle={styles.mobileOverlayStyle}
          onRequestChange={onRequestChange}
        >
          <div style={styles.logoContainerStyle}><Logo onRequestChange={onRequestChange} /></div>
          {itemsContainer}
        </Drawer>
      </Responsive>
    </div>
  );
}

LeftNav.propTypes = {
  open: PropTypes.bool,
  onRequestChange: PropTypes.func,
  personalInfo: PropTypes.shape(),
  menuItems: PropTypes.arrayOf(PropTypes.shape()),
};

LeftNav.defaultProps = {
  open: false,
  onRequestChange: () => {},
  menuItems: [
    {
      label: 'Tables & Seatings',
      children: tables,
    },
    { label: 'Wedding Panel', children: [] },
  ],
  personalInfo: {
    firstName: 'Seating',
    lastName: 'Chart',
    website: 'SeatingChart.com',
  },
};

export default LeftNav;
