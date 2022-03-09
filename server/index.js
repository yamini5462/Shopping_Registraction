var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());

app.get('/', function(req, res){
   res.send(`
   <h2>IShop - Online Shopping</h2>
    <h3>Requests</h3>
    <ul>
       <li> <a href="http://127.0.0.1:3030/products"> GET - Products</a></li>
    </ul>
   `);
});

app.get('/products', function(req, res){
   mongoClient.connect(connectionString, function(err, clientObject){
       if(!err) {
          var dbo = clientObject.db("smartshopdb");
          dbo.collection("tblproducts").find().toArray(function(err, documents){
             if(!err) {
                res.send(documents);
             }
          })
       }
   })
});

app.get('/products/:id', function(req, res){
   var productId = parseInt(req.params.id);
   mongoClient.connect(connectionString, function(err, clientObject){
      if(!err) {
         var dbo = clientObject.db("smartshopdb");
         dbo.collection("tblproducts").find({id:productId}).toArray(function(err, documents){
            if(!err) {
               res.send(documents);
            }
         })
      }
  })
});


app.listen(3030);
console.log(`Server Started : http://127.0.0.1:3030`);




