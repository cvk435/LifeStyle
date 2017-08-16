var EventService=require('../services/eventservice');

function EventControllers(objectcollection) {

    var app=objectcollection.app;
   var eventservice=new EventService(objectcollection);
    console.log('test1');
   // app.use(function(req,res,next){
   //     console.log('the Requested url is : '+ req.url);
   //     switch (req.url){
   //         case '/test':
   //             console.log('test');
   //             break;
   //         case '/test1':
   //             console.log('test1');
   //             break;
   //         case '/test2':
   //             console.log('test2');
   //             break;
   //         case '/test3':
   //             console.log('test3');
   //             break;
   //         default:
   //             console.log('test4');
   //             break;
   //     }
   //
   // });

    app.post('/'+global.config.apversion+'/test',function(req,res,next){
        console.log(req.url);
        eventservice.getEvents(req.body ,function(err,data){
            if(err === false){
                console.log(data);
                res.send(data);
            }

        });

    });
}
module.exports=EventControllers;