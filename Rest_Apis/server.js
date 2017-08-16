/**
 * Created by Administrator on 8/9/2017.
 */
var globalconfig=require('./server/utils/globalconfig');
var db=require('./server/utils/dbwrapper');
var ControllerInterceptor=require('./server/interceptors/controllinterceptors');
var express=require('express');
var bodyparser=require('body-parser');
var app = express();
app.use(bodyparser.json());

// app.use(function (req,res,next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//     next();
// })
var cors = require('cors');
app.use(cors({origin: '*',methods:'GET, POST, OPTIONS, PUT, PATCH, DELETE'}));
var objectcollection={
    app:app,
    db:db
};
new ControllerInterceptor(objectcollection);
var server=require('http').createServer(app).listen(global.config.serviceport);
console.log(global.config.serviceport);

