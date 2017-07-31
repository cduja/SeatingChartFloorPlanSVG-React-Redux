
import React, { PropTypes } from 'react';
import { FontIcon, IconMenu, MenuItem, IconButton, MoreVertIcon } from 'material-ui';
import { connect } from 'react-redux';
import styles from './styles';

class ActionsCollection extends React.Component {

  constructor(props){

    super(props);
    this.saveSeat = this.saveSeat.bind(this);
    this.loadSeat = this.loadSeat.bind(this);
    this.deleteSeat = this.deleteSeat.bind(this);
    this.updateSeat = this.updateSeat.bind(this);

    this.PropTypes = {
      actions: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string,
      dropdownItems: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        action: PropTypes.func,
      })),
      action: PropTypes.func,
      })),
      brightness: PropTypes.string,
    };

    this.defaultProps = {
      actions: [],
      brightness: 'dark',
    };
  }
  updateSeat(){

    let sType; 
    // console.log("sdfsdf",this.props.tables);
    this.props.tables.map((table) => {
    
    if (table.group == 'rect')
    { 
      sType = 0;
      
    }
    else if(table.group == 'square')
    {
      sType = 1;
    }
    else if(table.group == 'circle')
    {
      sType = 2;  
    }

      this.props.updateTables(sType, table);

  });
  }

  loadSeat(){

    this.props.loadTables();
    
  }
  deleteSeat(){

    this.props.deleteTables();

  }
  saveSeat(){

    let sType; 
    // console.log(this.props.tables);
    this.props.tables.map((table) => {
    
    if (table.group == 'rect')
    { 
      sType = 0;
      
    }
    else if(table.group == 'square')
    {
      sType = 1;
    }
    else if(table.group == 'circle')
    {
      sType = 2;  
    }

      this.props.saveTables(sType, table);

  });

  }
  render() {
  const {brightness,actions} =  this.props;
  return (
    <div style={styles.container}>
      {
        actions.map(action => {
          const iconButton = (
            <FontIcon
              key={action.icon}
              onTouchTap={action.action}
              style={brightness === 'light' ? styles.lightIcon : styles.darkIcon}
              className="material-icons"
            >
              {action.icon}
            </FontIcon>
          );
          return action.dropdownItems && action.dropdownItems.length
            ? (
                <IconMenu
                  key={action.icon}
                  className="material-icons"
                  iconButtonElement={iconButton}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                  {
                    action.dropdownItems.map(dropdownItem =>
                      <MenuItem
                        key={dropdownItem.label}
                        primaryText={dropdownItem.label}
                        onTouchTap={dropdownItem.label=="Save Seating Plan" ? this.saveSeat:dropdownItem.label=="View Seating Plan" ? this.loadSeat:dropdownItem.label=="Delete Seating Plan" ? this.deleteSeat:this.updateSeat}
                      />
                    )
                  }
                </IconMenu>
              )
            : iconButton;
        })
      }
    </div>
  );
  }
}

const  mapStatetoProps = (state)=>({
})

const mapDispatchToProps = (dispatch)=>({

    saveTables: (shapeType, tableInf) => dispatch({type: 'SAVE_SEAT', payload: { shapeType: shapeType, tableInf: tableInf }}),
    loadTables: () => dispatch({type: 'LOAD_SEAT'}),
    deleteTables: () => dispatch({type: 'DELETE_SEAT'}),
    updateTables: (shapeType, tableInf) => dispatch({type: 'UPDATE_SEAT', payload: { shapeType: shapeType, tableInf: tableInf }})

})
export default connect(mapStatetoProps, mapDispatchToProps)(ActionsCollection);