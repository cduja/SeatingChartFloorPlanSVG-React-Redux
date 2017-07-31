
import { delay,takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import API from '../../client';
import * as Actions from '../actions/tableactions';

function* updateTable(action){
  console.log("saga");
  let shapeType = action.payload.shapeType;
  let tableInf = action.payload.tableInf;
  const updateTable = yield call(API.updateTable, shapeType, tableInf);
}

function* removeTable(){
  const deleteTable = yield call(API.deleteTable);
  
}
function* saveTable(action){

  let shapeType = action.payload.shapeType;
  let tableInf = action.payload.tableInf;
  const createTable = yield call(API.createTable, shapeType,tableInf);
}
function* loadTable(){

  const viewTables = yield call(API.viewTables);
  
  let realTable0 = {};
  let realTable1 = {};
  let realTable2 = {};
  var realTableArr=[];
// console.log(viewTables);
  viewTables.map((viewTable)=>{

    if (viewTable.shape_type == 0)
    {
      realTable0 = {
       group:'rect',
       id:viewTable.id,
       name:viewTable.table_name,
       color:viewTable.table_color,
       chairs:{
        top:viewTable.top,
        left:viewTable.lef,
        bottom:viewTable.bot,
        right:viewTable.rig
       },
        width:viewTable.size_wid,
        height:viewTable.size_hei,
       position:{
        x:viewTable.pos_x,
        y:viewTable.pos_y
        },
       rotation:viewTable.rotation
      }
      realTableArr.push(realTable0);

    }
    
    if (viewTable.shape_type == 1){

      realTable1 = {
       group:'square',
       id:viewTable.id,
       name:viewTable.table_name,
       color:viewTable.table_color,
       chairs:{
        top:viewTable.top,
        left:viewTable.lef,
        bottom:viewTable.bot,
        right:viewTable.rig
       },
        size:viewTable.size_wid,
        position:{
        x:viewTable.pos_x,
        y:viewTable.pos_y
        },
       rotation:viewTable.rotation
      }
      realTableArr.push(realTable1);

    }
    if (viewTable.shape_type == 2){

       realTable2 = {
       group:'circle',
       id:viewTable.id,
       name:viewTable.table_name,
       color:viewTable.table_color,
       chairs:viewTable.circularnum,
       position:{
        x:viewTable.pos_x,
        y:viewTable.pos_y
      },
       size:viewTable.size_wid,
       rotation:viewTable.rotation
      }
      realTableArr.push(realTable2);

    }
    
  });

  // console.log(realTableArr);

  yield realTableArr.map((realTableAr)=>{
    return put (Actions.addTable(realTableAr)) 
  });

}

export function* saveSagaWatcher() {

    yield* takeEvery("SAVE_SEAT", saveTable);
}

export function* loadSagaWatcher(){
   yield* takeEvery("LOAD_SEAT", loadTable);
}

export function* deleteSagaWatcher(){

  yield* takeEvery("DELETE_SEAT",removeTable);
}
export function* updateSagaWatcher(){
  yield* takeEvery("UPDATE_SEAT",updateTable);
}

export default [
  saveSagaWatcher(),
  loadSagaWatcher(),
  deleteSagaWatcher(),
  updateSagaWatcher()
];