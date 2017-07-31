import React, { PropTypes } from 'react';
import { Paper } from 'material-ui';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
// import { PopoverWrapper } from 'components';
import colors from 'styles/colors';
import { pxPerMeter } from 'constants/dimensions';

import { selectTable, changePosition } from 'actions/tableactions';
import { currentTableSelector } from 'reducers/selectors';
import Chair from './Chair';

class Table extends React.Component {

constructor(props){

  super(props);

   console.log("info",this.props.info);

}
    static propTypes = {
    info: PropTypes.shape({ 
      type: PropTypes.string,
      group: PropTypes.string,
      label: PropTypes.string,
      color: PropTypes.string,
      chairs: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
          top: PropTypes.number,
          left: PropTypes.number,
          bottom: PropTypes.number,
          right: PropTypes.number,
        }),
      ]),
      position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
      }),
      size: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      rotation: PropTypes.number,
      id: PropTypes.number
    }),
    index: PropTypes.number,
  };

   static defaultProps = {

    info: {
      type: 'chair',
      label: 'Chair',
      group: 'seating',
      color: colors.primary,
      rotation: 0
    //chairs: 1,
    //size: 1,
    },
    index: 0,

  };

  onStartDraggable = (e) => {

    const { selectTable, index } = this.props;
    this.position = {
      x: e.clientX,
      y: e.clientY,
    };
    selectTable(index);

  }

  onStopDraggable = (e) => {

    const { changePosition, currentTable } = this.props;
    // this.refs.dragger.style.transform = "";
    changePosition( e.clientX - this.position.x + currentTable.position.x, e.clientY - this.position.y + currentTable.position.y);

  }

  render() {

    const { id, name, type, group, label, color, chairs, size, width, height, rotation, position } = this.props.info;
    
    const highLighted = this.props.currentTable && id === this.props.currentTable.id;
    const chairSize = 0.2 * pxPerMeter;

    const chairStyle = {
      position: 'absolute',
      width: chairSize,
      height: chairSize,
      borderTopLeftRadius: chairSize / 2,
      borderTopRightRadius: chairSize / 2,
      backgroundColor: color,
      border: '1px solid rgba(0, 0, 0, 0.3)',
      boxSizing: 'border-box',
      boxShadow: highLighted && 'rgba(0, 0, 0, 0.5) 0px 0px 2px, rgba(0, 0, 0, 0.5) 0px 0px 2px',
    };

    return (
      (group!="seating") &&
      (<Draggable
        onStart={this.onStartDraggable}
        onStop={this.onStopDraggable}
      >
      
        <div style={{ zIndex: highLighted && 10, position: 'absolute' }} ref="dragger">
          <div
            style={{
              width: (width || size) * pxPerMeter,
              height: (height || size) * pxPerMeter,
              position: 'absolute',
              left: `${position.x - (width || size) * pxPerMeter / 2}px`,
              top: `${position.y - (height || size) * pxPerMeter / 2}px`,
              cursor: 'pointer',
            }}
          >
            <div style={{
              transform: `rotate(${rotation}deg)`,
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: color,
              border: '1px solid rgba(0, 0, 0, 0.3)',
              borderRadius: (group === 'circle') ? size * pxPerMeter / 2 : 0,
              boxShadow: highLighted && 'rgba(0, 0, 0, 0.5) 0px 0px 10px, rgba(0, 0, 0, 0.5) 0px 0px 10px',
            }}>
              {
                chairs.left > 0 ? new Array(chairs.left).fill(0).map((zero, index) =>
                  <Chair
                    key={index}
                    style={{
                      ...chairStyle,
                      left: -chairSize,
                      top: (index+0.5) * (height || size) * pxPerMeter / chairs.left - chairSize / 2,
                      transform: 'rotate(-90deg)',
                    }}
                  />
                ) : null
              }
              {
                chairs.right > 0 ? new Array(chairs.right).fill(0).map((zero, index) =>
                  <Chair
                    key={index}
                    style={{
                      ...chairStyle,
                      right: -chairSize,
                      top: (index+0.5) * (height || size) * pxPerMeter / chairs.right - chairSize / 2,
                      transform: 'rotate(90deg)',
                    }}
                  />
                ) : null
              }
              {
                chairs.top > 0 ? new Array(chairs.top).fill(0).map((zero, index) =>
                  <Chair
                    key={index}
                    style={{
                      ...chairStyle,
                      left: (index+0.5) * (width || size) * pxPerMeter / chairs.top - chairSize / 2,
                      top: - chairSize,
                    }}
                  />
                ) : null
              }
              {
                chairs.bottom > 0 ? new Array(chairs.bottom).fill(0).map((zero, index) =>
                  <Chair
                    key={index}
                    style={{
                      ...chairStyle,
                      left: (index+0.5) * (width || size) * pxPerMeter / chairs.bottom - chairSize / 2,
                      bottom: - chairSize,
                      transform: 'rotate(180deg)',
                    }}
                  />
                ) : null
              }
              {
                group === 'circle' && chairs > 0 ? new Array(chairs).fill(0).map((zero, index) =>
                  <Chair
                    key={index}
                    style={{
                      ...chairStyle,
                      left: (Math.sin(2 * Math.PI / chairs * index) + 1) * (size * pxPerMeter + chairSize - 1) / 2 - chairSize + 0.5,
                      top: (Math.cos(2 * Math.PI / chairs * index) + 1) * (size * pxPerMeter + chairSize - 1) / 2 - chairSize + 0.5,
                      transform: `rotate(-${360 * index / chairs + 180}deg)`,
                    }}
                  />
                ) : null
              }
            </div>
            <span style={{ color: colors.third, padding: 3, backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', zIndex: 10, top: -20}}>{name}</span>
          </div>
        </div>
      </Draggable>)
    );
  }
}

const mapStateToProps = state => ({
  currentTable: currentTableSelector(state),
});

const mapDispatchToProps = dispatch => ({
  selectTable: (id) => dispatch(selectTable(id)),
  changePosition: (name, value) => dispatch(changePosition(name, value)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Table);
