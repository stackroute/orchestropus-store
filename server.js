var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

var mongoose=require('mongoose');
var db=mongoose.connect("mongodb://localhost/workflowsandlanpacks");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var workflowsRouter=require('./routes/router');

app.listen(5007,function(){
	console.log("Started on PORT 5007");
})

app.use('/workflow',workflowsRouter);
