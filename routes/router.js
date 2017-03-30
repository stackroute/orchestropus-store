 
var express =  require("express");
var controllers=require('./../controllers/workflowControllers');

var router=express.Router();


router.get('/get',controllers.get);
router.post('/add',controllers.add);
//router.delete('/:workflowId',controllers.del);

  
// router.get('/:workflowId',controllers.getById);

// router.put('/:workflowId',controllers.update);
// router.patch('/:workflowId',controllers.patch);
// router.get('/',controllers.query);

module.exports=router;
