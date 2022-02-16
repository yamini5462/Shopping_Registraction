var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.get('/getusers', function(request, response){
    mongoClient.connect(connectionString, function(err, clientObject){
         if(!err) {
             var dbo = clientObject.db("ShoppingDB");
             dbo.collection("ShoppingUsers").find().toArray(function(err, documents){
                 if(!err) {
                     response.send(documents);
                 }
             })
         }
    })
});

app.post('/registercustomer', function(request, response){
     mongoClient.connect(connectionString, function(err, clientObject){
        if(!err) {
            var dbo = clientObject.db("ShoppingDB");
            var data = {
                "UserId": request.body.UserId,
                "UserName": request.body.UserName,
                "Password": request.body.Password,
                "Email": request.body.Email,
                "Mobile": request.body.Mobile
            };
            dbo.collection("ShoppingUsers").insertOne(data, function(err, result){
                if(!err) {
                    console.log(`Record Inserted`);
                }
            })
        }
     })
});

app.get('/getproducts', function(request, response){
    mongoClient.connect(connectionString, function(err, clientObject){ 
         if(!err) {
             var dbo = clientObject.db('ShoppingDB');
             dbo.collection('ShoppingUsers').find().toArray(function(err, documents){
                if(!err) {
                    response.send(documents);
                }
             })
         }
    })
});

app.listen(4400);
console.log(`Server Started : http://127.0.0.1:4000`);
