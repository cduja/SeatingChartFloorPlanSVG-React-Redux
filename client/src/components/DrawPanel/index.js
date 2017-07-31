import React, { PropTypes } from 'react';
import { Paper } from 'material-ui';
import { Droppable } from 'react-drag-and-drop';
import { connect } from 'react-redux';
import { addTable } from 'actions/tableactions';
import { getRandomColor } from 'constants/palette';
import Table from './Table';
import styles from './styles';


function DrawPanel({ tables, addTable }) {

  const onDrop = (data, e) => {
                     
    const tableInfo = {
      
      ...(JSON.parse(data.table)),

      color: getRandomColor(),
      // id: Date.now(),
      name: 'tablename',
      rotation: 0,
      position: {
        x: e.clientX - e.currentTarget.getBoundingClientRect().left,
        y: e.clientY - e.currentTarget.getBoundingClientRect().top,
      }
    };

    addTable(tableInfo);

  }
  // tables.map((table)=>{
  //   console.log(table.id);
  // })
      console.log("id check out",tables);

  return (
    <Paper zDepth={2} style={styles.container}>
      <Droppable
        style={styles.innerContainer}
        types={['table']} // allowed drop types
        onDrop={onDrop}
      >
        {

          tables.map((table, index) =>
            <Table info={table} key={table.id} index={index} />
          )
        }
      </Droppable>
    </Paper>
  );
}

DrawPanel.propTypes = {
  tables: PropTypes.arrayOf(PropTypes.shape()),
  addTable: PropTypes.func,
};

DrawPanel.defaultProps = {
  tables: [],
  addTable: () => {}
};

const mapStateToProps = state => ({
 
});

const mapDispatchToProps = dispatch => ({
  addTable: (tableInfo) => dispatch(addTable(tableInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawPanel);
