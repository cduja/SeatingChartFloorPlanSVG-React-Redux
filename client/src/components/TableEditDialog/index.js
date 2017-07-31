import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';
import { connect } from 'react-redux';
import colors from 'styles/colors';
import palette from 'constants/palette';
import ColorPalette from './ColorPalette';
import styles from './styles';

import { changeTableInfo } from 'actions/tableactions';

function TableEditDialog({ info, changeTableInfo }) {
  if (!info)
    return (<div style={styles.container} />);
  return (
    <div style={styles.container}>
      <div style={styles.rowContainer}>
        <TextField
          hintText="Name"
          name={`${info.id}-name`}
          value={info.name}
          fullWidth
          onChange={(e, newValue) => changeTableInfo('name', newValue)}
        />
      </div>
      {
        info.group === 'circle'
        ?
          <div style={{ ...styles.rowContainer, ...styles.grayContainer }}>
            Chairs
            <div style={styles.rowItem}>
              <TextField
                name={`${info.id}-chairs`}
                value={info.chairs}
                type="number"
                fullWidth
                onChange={(e, newValue) => changeTableInfo('chairs', parseFloat(newValue))}
                min={0}
              />
            </div>
          </div>
        :
          <div style={{ ...styles.rowContainer, ...styles.grayContainer }}>
            Chairs
            <div style={styles.rowItem}>
              <TextField
                name={`${info.id}-left`}
                value={info.chairs.left}
                type="number"
                fullWidth
                onChange={(e, newValue) => changeTableInfo('chairs', { ...info.chairs, left: parseFloat(newValue)})}
                min={0}
              />
            </div>
            <div style={styles.rowItem}>
              <TextField
                value={info.chairs.top}
                name={`${info.id}-top`}
                type="number"
                fullWidth
                onChange={(e, newValue) => changeTableInfo('chairs', { ...info.chairs, top: parseFloat(newValue)})}
                min={0}
              />
              <TextField
                value={info.chairs.bottom}
                name={`${info.id}-bottom`}
                type="number"
                fullWidth
                onChange={(e, newValue) => changeTableInfo('chairs', { ...info.chairs, bottom: parseFloat(newValue)})}
                min={0}
              />
            </div>
            <div style={styles.rowItem}>
              <TextField
                hintText=""
                value={info.chairs.right}
                name={`${info.id}-right`}
                type="number"
                fullWidth
                onChange={(e, newValue) => changeTableInfo('chairs', { ...info.chairs, right: parseFloat(newValue)})}
                min={0}
              />
            </div>
          </div>
      }
      <div style={styles.rowContainer}>
        Rotations
        <div style={styles.rowItem}>
          <TextField
            value={info.rotation}
            name={`${info.id}-rotation`}
            type="number"
            fullWidth
            onChange={(e, newValue) => changeTableInfo('rotation', parseFloat(newValue))}
            max={360}
            min={0}
          />
        </div>
      </div>
      {
        info.group === 'circle' || info.group === 'square'
        ?
          <div style={{ ...styles.rowContainer, ...styles.grayContainer }}>
            Size
            <div style={styles.rowItem}>
              <TextField
                name={`${info.id}-size`}
                value={info.size}
                type="number"
                fullWidth
                onChange={(e, newValue) => changeTableInfo('size', parseFloat(newValue))}
                max={3}
                min={1}
                step={0.2}
              />
            </div>
          </div>
        :
          <div style={{ ...styles.rowContainer, ...styles.grayContainer }}>
            Size
            <div style={styles.rowItem}>
              <TextField
                name={`${info.id}-width`}
                value={info.width}
                type="number"
                fullWidth
                onChange={(e, newValue) => changeTableInfo('width', parseFloat(newValue))}
                max={3}
                min={1}
                step={0.2}
              />
            </div>
            x
            <div style={styles.rowItem}>
              <TextField
                value={info.height}
                name={`${info.id}-height`}
                type="number"
                fullWidth
                onChange={(e, newValue) => changeTableInfo('height', parseFloat(newValue))}
                max={3}
                min={1}
                step={0.2}
              />
            </div>
          </div>
      }
      {
        <div style={styles.rowContainer}>
          Colors
          <div style={styles.rowItem}>
            {
              palette.map(color =>
                <ColorPalette
                  key={color}
                  color={color}
                  active={color === info.color}
                  onClick={() => changeTableInfo('color', color)}
                />
              )
            }
          </div>
        </div>
      }
    </div>
  );
}

TableEditDialog.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
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
    size: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

TableEditDialog.defaultProps = {
  info: {
    name: 'Chair-1',
    type: 'chair',
    label: 'Chair',
    group: 'seating',
    color: colors.primary,
  },
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  changeTableInfo: (name, value) => dispatch(changeTableInfo(name, value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TableEditDialog);
