 
var express =  require("express");
var controllers=require('./../controllers/workflowControllers');

var router=express.Router();



// moviesRouter.get('/',moviecontrollers.get);
router.post('/',controllers.add);
router.delete('/:workflowId',controllers.del);

  
router.get('/:workflowId',controllers.getById);
//moviesRouter.get('/:movieId',moviecontrollers.query);
router.put('/:workflowId',controllers.update);
router.patch('/:workflowId',controllers.patch);




router.get('/',controllers.query);

module.exports=router;
