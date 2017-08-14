function EventControllers(objectioncollection) {

    var app=objectioncollection.app;
    app.get('/', function(req, res, next) {
        console.log('EventControllers');
    });
}
module.exports=EventControllers;