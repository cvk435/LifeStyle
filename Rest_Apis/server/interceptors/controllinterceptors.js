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

function ControlInterceptor(objectioncollection){
    new EventControllers(objectioncollection);
    new IncubationControllers(objectioncollection);
    new Opportunities(objectioncollection);
    new Stories(objectioncollection);
    new Testimonials(objectioncollection);
    new Users(objectioncollection);
    new ReciverTakeup(objectioncollection);
    new HelperRequests(objectioncollection);
}
module.exports=ControlInterceptor;