var express = require("express");
var vechrouter= express();
var mysql = require("mysql");

const connection=mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'manager',
database : 'examdatabase'
});

var myData=[];
connection.connect();

vechrouter.get("/",function(req,res){
    connection.query("select * from tbl_vehicle",function(err,result){
        if(err==null)
        {
            console.log(result);
            myData=result;
            res.contentType("application/json");
            res.send(JSON.stringify(myData));
        }
        else
        {
            res.send("something went wrong...");
        }
    });
});

vechrouter.put("/:vech_no",function(req,res){
    let vno = parseInt(req.params.vech_no);
    let vname = req.body.name;
    let vcomp= req.body.company;
    let vtype= req.body.type;
    let vprice = req.body.price;
    let vdesc = req.body.desc;

    let query=`update tbl_vehicle set vech_name='${vname}',company='${vcomp}',type='${vtype}',price='${vprice}',description='${vdesc}'
    where vech_no=${vno}`;
    console.log(query);

    connection.query(query,function(err,result){
        if(err==null)
        {
            res.contentType("application/json");
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send("something went wrong...");
        }
    });
});
module.exports = vechrouter;



