// Load the http module to create an http server.
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://mongoServer:27017/myproject';


// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});

  MongoClient.connect(mongoUrl, function(err, db) {
    console.log("Connected successfully to server");
    response.write("Hello World ! <br /><br/><img src='/img/img.jpg' style='width:200px;height:200px'/><br/><br/>");

    insertDocuments(db, function() {
      findDocuments(db, function(docs) {
        response.end(JSON.stringify(docs));
        db.close();
    });
    });
  });
});

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : Math.random()}, {a : Math.random()}, {a : Math.random()}
  ], function(err, result) {
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    console.log("Found the following records");
    callback(docs);
  });
}

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running !");
