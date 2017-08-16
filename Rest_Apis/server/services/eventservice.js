/**
 * Created by Administrator on 8/16/2017.
 */
var Utils=require('../utils/utils');

function EventService(objectcollection) {
   var util= new Utils();
    var db=objectcollection.db;
    this.getEvents = function (request,callback) {
        var paramsArr=new Array(
            request.var_school_id,
            request.var_school_name,
            request.var_school_year,
            request.var_school_students,
            request.var_school_staff,
            request.var_school_bus,
            request.var_school_locations,
            request.var_school_awards,
            request.var_school_principal
        );
        var querystring=util.getQueryString("prd_school_insert",paramsArr);
        console.log(querystring);
        if(querystring !==''){
            db.executeQuery(1,querystring,request,function (err,response) {
                if (err === false) {
                            callback(false, response, 200);
                    return;
                } else {
                    callback(err, false, -9999);
                    return;
                }
            });

        }
    }
}
module.exports=EventService;