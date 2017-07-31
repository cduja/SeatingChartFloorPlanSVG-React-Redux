import { combineReducers } from 'redux-immutable';
import tablesReducer from './reducer';

export default function createReducer() {
  return combineReducers({
    tables: tablesReducer,
  });
}
