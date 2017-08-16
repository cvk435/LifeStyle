/**
 * Created by Administrator on 8/14/2017.
 */
var mysql=require('mysql');
var connection = mysql.createPool({
    host:global.config.masterIp,
    user:global.config.dbuser,
    password:global.config.dbpassword,
    database:global.config.dbname
});
var executeQuery=function(flag,querystring,request,callback){
connection.getConnection( function (err,conn) {

try{
    if (err) {
        console.log('ERROR WHILE GETTING CONNECTON');
        callback(err, false);
        return;
    } else {
        conn.query(querystring , function (err, rows, fields) {
            if (!err) {
                conn.release();
                callback(false, rows[0]);
                return;
            } else {
                console.log('SOME ERROR IN QUERY | ', querystring);
                console.log(err);
                conn.release();
                callback(err, false);
            }

        })
    }
}
catch(exception){

    console.log(exception);
}
})

}
module.exports={ executeQuery: executeQuery};