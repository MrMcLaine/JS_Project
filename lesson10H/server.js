var express = require("express");
var bodyParser = require("body-parser");
const {response} = require("express");

var server = express();
var jsonParser = bodyParser.json();
const PORT = 3005;

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/userGet", function (request, response) {
    console.log(request.query);
    response.send("You have successfully used Get method : " + JSON.stringify(request.query));
});

server.post("/userPost", function (request,response){
    console.log(request.body);
    response.send("You have successfully used Post method : " + JSON.stringify(request.body));
});

server.listen(PORT, (error)=>{
    error ? console.log(error) : console.log('listening port ' + `${PORT}`);;
});
