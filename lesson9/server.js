const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(PORT, (error)=>{
    error ? console.log(error) : console.log('listening port' + `${PORT}`);;
});

app.get('/', (req, res) => {
    res.sendFile(createPath('index'));
});

app.get("/formGet", function (request, response) {
    console.log(request.query);
    let obj = request.query;
    response.send("You have successfully used Get method : " + JSON.stringify(request.query));
});

app.post("/formPost", function (request,response){
    console.log(request.body);
    response.send("You have successfully used Post method : " + JSON.stringify(request.body));
});