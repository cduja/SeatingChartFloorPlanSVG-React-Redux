import { createSelector } from 'reselect';

const tablesSelector = state => state.get('tables');
const tablesInfoSelector = createSelector([tablesSelector], tables => tables.get('tables'));
const currentFloorSelector = createSelector([tablesSelector], tables => tables.getIn(['tables', tables.get('currentFloor')]));
const currentTableSelector = createSelector([tablesSelector], tables => tables.getIn(['tables', tables.get('currentFloor'), tables.get('currentTable')]));

export {
  tablesSelector,
  tablesInfoSelector,
  currentFloorSelector,
  currentTableSelector,
};
