/**
 * Created by Administrator on 8/16/2017.
 */
function Utils(){
   this.getQueryString=function(callName,paramsArr){
       console.log('utils');
       var queryString= " CALL " + callName + "(";
       paramsArr.forEach(function(item,index){
           if(index === (paramsArr.length -1))
               queryString = queryString + "'" + item + "'";
           else
               queryString = queryString + "'" + item + "',";
       },this);
       queryString = queryString + ");";
       return queryString;

   };
}
module.exports=Utils;
