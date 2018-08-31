var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ag'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

exports.register = function(req,res){
     console.log("req",req.body);
    var today = new Date();
    var users={
      "username":req.body.username,
      "password":req.body.password,
      "email":req.body.email,      
      "created_date_time":today,
      "emloyee_id": '',
      "created_by":'',
      "custome_two":'',
      "custome_three":'',
      "custome_four":'',
      "custome_five":'',
      "custome_six":''
    }
    connection.query('INSERT INTO ag_users SET ?',users, function (error, results, fields) {
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
  }

  //exports.login = 


exports.saveuser = (userDetails,callback)=>{

    var queryOne = "INSERT INTO ag_users(`username`, `password`, `name`, `created_date_time`, `emloyee_id`, `created_by`) VALUES "+
    "('"+userDetails.username+"','"+userDetails.pawword+"','"+userDetails.name+"','"+userDetails.creation_dt+"','"+userDetails.employee_id+"','"+userDetails.created_by+"')"
    requestConnection.query(queryOne, function (err, results, fields) {
        if (err) {
            console.log("Error while querying database :- " + err);
        }
        else {
            callback(results);
            }
        });
}

// q = "INSERT INTO ag_users(`username`, `password`, `name`, `created_date_time`, `emloyee_id`, `created_by`) VALUES "+
// "('"+userDetails.username+"','"+userDetails.pawword+"','"+userDetails.name+"','"+userDetails.created_date_time+"','"+userDetails.employee_id+"','"+userDetails.created_by+"')"