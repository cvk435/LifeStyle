/**
 * Created by Administrator on 8/14/2017.
 */

var EventControllers=require('../controllers/eventcontrollers');
var IncubationControllers=require('../controllers/incubationcontroller');
var Opportunities=require('../controllers/opportunities');
var Stories=require('../controllers/stories');
var Testimonials=require('../controllers/testimonials');
var Users=require('../controllers/users');
var ReciverTakeup=require('../controllers/recivertakeup');
var HelperRequests=require('../controllers/helperrequest');

function ControlInterceptor(objectcollection){
    new EventControllers(objectcollection);
    new IncubationControllers(objectcollection);
    new Opportunities(objectcollection);
    new Stories(objectcollection);
    new Testimonials(objectcollection);
    new Users(objectcollection);
    new ReciverTakeup(objectcollection);
    new HelperRequests(objectcollection);
}
module.exports=ControlInterceptor;