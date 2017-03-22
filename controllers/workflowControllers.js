
var workflow =  require("./../schema/models/workflow");
//var movie =  require("./../models/languagePack");
var get=function(req,res){

  workflow.find(

    function(err,movies){
     if (err) {
      res.status(500);
      res.send('internal server error');
    } 
    else {

     res.status(200);
     res.send(movies);

   }
 }
 )

};


var add=function(req,res){
 var mo=new workflow(req.body);
 mo.save(

   function(err,mov){
     if (err) {
       console.log(err);
       //change 500
       res.status(500);
       res.send('server error');
     } 
     else {
      //che
      res.status(200);
      res.send(mov);

    }
  }
  )

};

var getById=function(req,res){
  console.log(req.params.workflowId);
  var id=req.params.workflowId;
  workflow.findById(id,function(err,mov){
   if (err) {
    res.status(404);
    res.send('Not Found');
  } 
  else {

   res.status(200);
   res.send(mov);

 }
}
)

};


var update=function(req,res){
  console.log(req.params.workflowId);
  var id=req.params.workflowId;
  workflow.findById(id,function(err,mov){
   if (err) {
    res.status(404);
    res.send('Not Found');
  } 
  else {

   mov.workflow_name=req.body.workflow_name;
   mov.creator=req.body.creator;
   mov.description=req.body.description;
   mov.tags=req.body.tags;
	                 //mov.version=req.body.version;


                  mov.save(

                    function(err,mov){
                     if (err) {
                       console.log(err);
                       res.status(500);
                       res.send('server error');
                     } 
                     else {

                       res.status(200);
                       res.send(mov);

                     }
                   }
                   )


                }
              }
              )

};

var del=function(req,res){
workflow.findById(req.params.workflowId,function(err,workfl){
  workfl.remove(function(err){
    if(!err){
      res.status(204);
      res.send("Removed");
    }
  });

});
};

// //patch the particular data 

var patch=function(req,res){
  console.log(req.params.workflowId);
  var id=req.params.workflowId;
  workflow.findById(id,function(err,mov){
   if (err) {
    res.status(404);
    res.send('Not Found');
  } 
  else {

   if (req.body._id) {
    delete req.body._id;
  }
  for (var i in req.body) {
    mov[i]=req.body[i];
  }


  mov.save(

    function(err,mov){
     if (err) {
       console.log(err);
       res.status(500);
       res.send('server error');
     } 
     else {

       res.status(200);
       res.send(mov);

     }
   }
   )


}
}
)

};

// var creator=function(req,res){
//   console.log("Inside creator")
//   console.log(req.query.creator);
//   console.log(new RegExp(req.query.creator+".*", 'i'))
// movie.find({creator:new RegExp(req.query.creator+".*", 'i')},

// function(err,movies){
//                      if (err) {
// 	                           res.status(500);
// 	                           res.send('internal server error');
//                       } 
//                       else {

//                        res.status(200);
// 	                   res.send(movies);

//                       }
//                  }
// 	     )

//    };


var query=function(req,res){

  var key=Object.keys(req.query);
  //     movie.find({tags:{$in:tags}},
  //console.log(req.query[key[0]]);
  console.log(req.query[key]);
  var x=typeof(req.query[key]);
  console.log(x);
  console.log("inside creator");
  if (x=='string') {

    workflow.find({$or:[{workflow_name: { $in: req.query[key]}},{creator: {$in:req.query[key] }}]},

      function(err,movies){
       if (err) {
         res.status(500);
         res.send('internal server error');
       } 
       else {

         res.status(200);
         res.send(movies);

       }
     }
     )
  }
  else{
   workflow.find({tags:{$in: req.query[key]}},

    function(err,movies){
     if (err) {
       res.status(500);
       res.send('internal server error');
     } 
     else {

       res.status(200);
       res.send(movies);

     }
   }
   )
 }


};







module.exports={
 add: add,
	           //get: get,
            getById:getById,
            update:update,
            del:del,
            patch:patch,
             //workflow_name:workflow_name,
             //creator:creator,
             //tags:tags
             query:query
           };