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