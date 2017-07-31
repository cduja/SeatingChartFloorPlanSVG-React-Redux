
// send tables detail info to API

function createTable(query1,query2){

  console.log("query1",query1);
  console.log("query2",query2);

    return fetch(`http://localhost:3001/api/events`, {
    method: 'post',
    headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'
    },
    body: JSON.stringify({shapeType: query1, tableInf: query2})
  }).then(checkStatus)
    .then(parseJSON);
  
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}
// get tables details info from API

function viewTables(){

  return fetch(`http://localhost:3001/api/events`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);

}

function deleteTable(){
  return fetch(`http://localhost:3001/api/events`,{
    method: 'delete',
    accept: 'applicatioin/json',
  }).then(checkStatus)
    .then(parseJSON);
}

function updateTable(query1,query2){

  console.log("asdf");
  console.log("query1",query1);
  console.log("query2",query2);

    return fetch(`http://localhost:3001/api/events`, {
    method: 'put',
    headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'
    },
    body: JSON.stringify({shapeType: query1, tableInf: query2})
  }).then(checkStatus)
    .then(parseJSON);
}

const API = { createTable, viewTables,deleteTable,updateTable } 
export default API;