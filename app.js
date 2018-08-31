// set up ======================================================================
var express = require('express');
var app = express(); 
var mysql = require('mysql');
var fs = require('fs');					// create our app w/ express	
var login = require('./routes/loginroutes');
var port = process.env.PORT || 8081; 				// set the port
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();


//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});



//Initiallising connection string
const requestConnection = mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password: '',
    database:'ag',
});


app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

//==============================

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
//route to handle user registration
//router.post('/register',login.register);
//router.post('/login',login.login);

requestConnection.connect(function(err){
    if (err) throw err;
    console.log("Connected to DB");
    app.get('/api/tickets',function(req,res){
        console.log(req.hostname);
        var queryOne = 'select * FROM ag_users';
        requestConnection.query(queryOne, function (err, results, fields) {
            if (err) {
                console.log("Error while querying database :- " + err);
            }
            else {
                res.send(JSON.stringify(results));
                }
            });
    });

    app.post('/register',function(req,res){
        console.log("req",req.body);
       var today = new Date();
       var users={
         "username":req.body.username,
         "password":req.body.password,
         "email":req.body.email,      
         "created_date_time":today,
         "emloyee_id": '',
         "created_by":'',
         "custom_two":'',
         "custom_three":'',
         "custom_four":'',
         "custome_five":'',
         "custome_six":''
       }
       requestConnection.query('INSERT INTO ag_users SET ?',users, function (error, results, fields) {
       if (error) {
         console.log("error ocurred",error);
         res.send({
           "code":400,
           "failed":"error ocurred"
         })
       }else{
         console.log('The solution is: ', results);
         res.send({
           "code":200,
           "success":"user registered sucessfully"
             });
       }
       });
     })

    app.post('/login',function(req,res){
        var email= req.body.email;
        var password = req.body.password;
        requestConnection.query('SELECT * FROM ag_users WHERE email = ?',[email], function (error, results, fields) {
        if (error) {
          // console.log("error ocurred",error);
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        }else{
          // console.log('The solution is: ', results);
          if(results.length >0){
            if(results[0].password == password){
              res.send({
                "code":200,
                "success":"login sucessfull"
                  });
            }
            else{
              res.send({
                "code":204,
                "success":"Email and password does not match"
                  });
            }
          }
          else{
            res.send({
              "code":204,
              "success":"Email does not exits"
                });
          }
        }
        });
      }) 

    app.get('/api/getProject',(req,res)=>{
        var queryProjects = 'select * from ag_projects';
        requestConnection.query(queryProjects,(err,results,fields)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(results);
            }
        })
    })

    app.get('/api/getVehicle',(req,res)=>{
        var queryProjects = 'select vehicle_number from ag_vehicle';
        requestConnection.query(queryProjects,(err,results,fields)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(results);
            }
        })
    })

    app.get('/api/getVehicles',(req,res)=>{
        var queryProjects = 'select * from ag_vehicle';
        requestConnection.query(queryProjects,(err,results,fields)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(results);
            }
        })
    })

    app.post('/api/addVehicle',(req,res)=>{
        console.log(req.body);
		var dateOfAddition = new Date();
        var b= req.body;
        var queryProjects = "INSERT INTO `ag_vehicle`(`vehicle_brand`, `vehicle_number`, `fuel_type`, `driver_name`, `driver_mobile_number`, `initial_reading`, `date_of_addition`, `puc_doc`, `registation_doc`, `insurence_doc`)"+
        "VALUES('"+b.vehicle_brand+"','"+b.vehicle_number+"','"+b.fuel_type+"','"+b.driver_name+"','"+b.driver_mobile_number+"','"+b.initial_reading+"','"+dateOfAddition+"','','','')";
        console.log(queryProjects);
		requestConnection.query(queryProjects,(err,results,fields)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(results);
                console.log(results);
            }
        })
    })

    app.post('/api/addProject',(req,res)=>{
        console.log(req.body);
		var dateOfAddition = new Date();
		var vehiclesAssigned = '';
		var specialNote = '';
		var reminder = '';
        var b= req.body;
        var queryProjects = "INSERT INTO ag_projects(`project_name`, `date_of_addition`, `vehicles_assigned`, `description`, `note`, `special_note`, `reminder`, `custom1`, `custom2`, `custom3`, `custom4`)"+
        "VALUES('"+b.project_name+"','"+dateOfAddition+"','"+vehiclesAssigned+"','"+b.description+"','"+b.note+"','"+specialNote+"','"+reminder+"','','','','')";
        console.log(queryProjects);
		requestConnection.query(queryProjects,(err,results,fields)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(results);
                console.log(results);
            }
        })
    })

    app.post('/api/addReading',(req,res)=>{
        console.log(req.body);
        var b= req.body;
        var queryProjects = "INSERT INTO `vehicle_daily_record`(`vehicle_number`, `date_of_journey`, `day_start_reading`, `day_end_reading`, `location-visited`, `mobile_no_driver`, `day_kms`, `maintenance`, `expense_for_maintenance`)"+
        "VALUES('"+b.vehicle_no+"','"+b.date_of_journey+"','"+b.day_start_reading+"','"+b.day_end_reading+"','"+b.locations_visited+"','"+b.drivers_mobile_no+"','"+b.day_kms+"','"+b.maintenance+"','"+b.expense_for_maintenance+"')";
        console.log(queryProjects);
		requestConnection.query(queryProjects,(err,results,fields)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(results);
                console.log(results);
            }
        })
    })

    app.get('/api/getRecords',(req,res)=>{
        var queryProjects = 'select * from vehicle_daily_record';
        requestConnection.query(queryProjects,(err,results,fields)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(results);
            }
        })
    })
});