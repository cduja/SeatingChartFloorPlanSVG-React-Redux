const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set up of access permission to API
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// node server port set up

app.set('port', (process.env.PORT || 3001));

// conect API into MySql db
const host = "localhost"
const user = "root"
const pswd = ""
const dbname = "events"

const pool = mysql.createPool({
  host: host,
  user: user,
  password: pswd,
  port: "3306",
  database: dbname
});

// check if API works correctly 

app.get('/', (req, res) => {

   res.json({
      message: 'API works!',
    });
});
//Update all table detail info saved in db
app.put('/api/events', (req, res) => {
     let shapeType=req.body.shapeType;
     let tableInf=req.body.tableInf;
console.log(shapeType);
console.log(tableInf);

     let upateId = tableInf.id;

     let tblsize=tableInf.size;
     let tbltop=tableInf.chairs.top;
     let tblleft=tableInf.chairs.left;
     let tblbottom=tableInf.chairs.bottom;
     let tblright=tableInf.chairs.right;
     let tblrotation=tableInf.rotation;
     let tblsizewidth=tableInf.width;
     let tblsizeheight=tableInf.height;

     let tblchairnum=tableInf.chairs;

     let tblname=tableInf.name;
     let tblcolor=tableInf.color;
     let tblpos_x=tableInf.position.x;
     let tblpos_y=tableInf.position.y;

    //  let str = ``;
    //  str = `SELECT * FROM scplans ORDER BY id ASC`
    //  pool.query(str, function(err,rows,fields){
    //   rows.map((row)=>{
    //  let querystr = ``;
   
    //   if (shapeType == 0 && row.id == upateId)
    //    {
    //     let querystr0 = ``;
    //     querystr0 = `UPDATE scplans SET table_name ='`+tblname+`', table_color='` + tblcolor + `',pos_x= ` + tblpos_x + `,pos_y=` + tblpos_y + `, top=` + tbltop + `lef=` + tblleft + `,bot=` + tblbottom + `,rig=` + tblright + `,size_wid=` + tblsizewidth + `,size_hei=` + tblsizeheight + `,rotation=` + tblrotation +`,shape_type=` +shapeType+ ` WHERE `+row.id+`=scplans.id`

    //     pool.query(querystr0,
    //         function(err, rows, fields) {
    //           if (err) throw err;
    //           res.json("Insert into rects table");
    //       });
    //     }
    //   else if (shapeType == 1 && row.id == upateId)
    //     {
    //     let querystr1 = ``;
    //     querystr1 = `UPDATE scplans SET table_name ='`+tblname+`', table_color='` + tblcolor + `',pos_x= ` + tblpos_x + `,pos_y=` + tblpos_y + `, top=` + tbltop + `lef=` + tblleft + `,bot=` + tblbottom + `,rig=` + tblright + `,size_wid=` + tblsize+ `,rotation=` + tblrotation +`,shape_type=` +shapeType+ ` WHERE `+row.id+`=scplans.id`

    //     pool.query(querystr1,function(err, rows, fields) {
    //         if (err) throw err;
    //          res.json("Insert into squares table");
    //       });
    //     }
    //   else if ( shapeType == 2 && row.id == upateId )
    //    {
    //     let querystr2 = ``; 
    //     querystr2 = `UPDATE scplans SET table_name ='`+tblname+`', table_color='` + tblcolor + `',pos_x= ` + tblpos_x + `,pos_y=` + tblpos_y + `, circularnum=` + tblchairnum + `, size_wid=` + tblsize+ `,rotation=` + tblrotation +`,shape_type=` +shapeType+ ` WHERE `+row.id+`=scplans.id`

    //     pool.query(querystr2,function(err, rows, fields) {
    //         if (err) throw err;
    //               res.json("Insert into circles table");
    //       });
    //     }
    //   });
    //  });



    //  let querystr = ``;
   
    //   if (shapeType == 0 )
    //    {
    //     let querystr0 = ``;
    //     querystr0 = `UPDATE scplans SET table_name ='`+tblname+`', table_color='` + tblcolor + `',pos_x= ` + tblpos_x + `,pos_y=` + tblpos_y + `, top=` + tbltop + `lef=` + tblleft + `,bot=` + tblbottom + `,rig=` + tblright + `,size_wid=` + tblsizewidth + `,size_hei=` + tblsizeheight + `,rotation=` + tblrotation +`,shape_type=` +shapeType+ ``

    //     pool.query(querystr0,
    //         function(err, rows, fields) {
    //           if (err) throw err;
    //           res.json("Insert into rects table");
    //       });
    //     }
    //   else if (shapeType == 1)
    //     {
    //     let querystr1 = ``;
    //     querystr1 = `UPDATE scplans SET table_name ='`+tblname+`', table_color='` + tblcolor + `',pos_x= ` + tblpos_x + `,pos_y=` + tblpos_y + `, top=` + tbltop + `lef=` + tblleft + `,bot=` + tblbottom + `,rig=` + tblright + `,size_wid=` + tblsize+ `,rotation=` + tblrotation +`,shape_type=` +shapeType+ ``

    //     pool.query(querystr1,function(err, rows, fields) {
    //         if (err) throw err;
    //          res.json("Insert into squares table");
    //       });
    //     }
    //   else if ( shapeType == 2 )
    //    {
    //     let querystr2 = ``; 
    //     querystr2 = `UPDATE scplans SET table_name ='`+tblname+`', table_color='` + tblcolor + `',pos_x= ` + tblpos_x + `,pos_y=` + tblpos_y + `, circularnum=` + tblchairnum + `, size_wid=` + tblsize+ `,rotation=` + tblrotation +`,shape_type=` +shapeType+ ``

    //     pool.query(querystr2,function(err, rows, fields) {
    //         if (err) throw err;
    //               res.json("Insert into circles table");
    //       });
    //     }

});

// Delete all table detail info saved in db
app.delete('/api/events', (req, res) => {

  let delStr = ``;
  delStr = `DELETE FROM scplans`
  pool.query(delStr, function(err,rows,fields){
    if(err) throw err;
    res.json("Delete all table info in db");

  });
});



// fetch all table detail info of seating chart saved to db.

app.get('/api/events', (req, res) => {

let str = ``;

str = `SELECT * FROM scplans`

pool.query(str, function(err,rows,fields){
  
  if(err) throw err;
  
   if(rows.length>0)
    { 

     res.json
     (
      rows.map((row) => {
        // console.log(row);
        return row;
      }),
   )

   }
   else {
       res.json([]);
   }


  });
});

// save all table detail info to db 
app.post('/api/events', (req, res) => {

     let shapeType=req.body.shapeType;
     let tableInf=req.body.tableInf;

     let tblsize=tableInf.size;
     let tbltop=tableInf.chairs.top;
     let tblleft=tableInf.chairs.left;
     let tblbottom=tableInf.chairs.bottom;
     let tblright=tableInf.chairs.right;
     let tblrotation=tableInf.rotation;
     let tblsizewidth=tableInf.width;
     let tblsizeheight=tableInf.height;

     let tblchairnum=tableInf.chairs;

     let tblname=tableInf.name;
     let tblcolor=tableInf.color;
     let tblpos_x=tableInf.position.x;
     let tblpos_y=tableInf.position.y;

     let querystr = ``;

      if (shapeType == 0 )
       {
        let querystr0 = ``;
        querystr0 = `INSERT INTO scplans (table_name,table_color,pos_x,pos_y,top,lef,bot,rig,size_wid,size_hei,rotation,shape_type) VALUES ('`+tblname+`','` + tblcolor + `',` + tblpos_x + `,` + tblpos_y + `,` + tbltop + `,` + tblleft + `,` + tblbottom + `,` + tblright + `,` + tblsizewidth + `,` + tblsizeheight + `,` + tblrotation + `,` +shapeType+ `)`

        pool.query(querystr0,
            function(err, rows, fields) {
              if (err) throw err;
              res.json("Insert into rects table");
          });
        }
      else if (shapeType == 1)
        {
        let querystr1 = ``;
        querystr1 = `INSERT INTO scplans (table_name,table_color,pos_x,pos_y,top,lef,bot,rig,size_wid,rotation,shape_type) VALUES ('`+tblname+`','` + tblcolor + `',` + tblpos_x + `,` + tblpos_y + `,` + tbltop + `,` + tblleft + `,` + tblbottom + `,` + tblright + `,` + tblsize + `,` + tblrotation + `,` +shapeType+ `)`

        pool.query(querystr1,function(err, rows, fields) {
            if (err) throw err;
             res.json("Insert into squares table");
          });
        }
      else if ( shapeType == 2 )
       {
        let querystr2 = ``; 
        querystr2 = `INSERT INTO scplans (table_name,table_color,pos_x,pos_y, circularnum, size_wid,rotation,shape_type) VALUES ('`+tblname+`','` + tblcolor + `',` + tblpos_x + `,` + tblpos_y + `,` + tblchairnum + `,` + tblsize + `,` + tblrotation + `,` +shapeType+ `)`

        pool.query(querystr2,function(err, rows, fields) {
            if (err) throw err;
                  res.json("Insert into circles table");
          });
        }
        
      });
      
  app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
  });