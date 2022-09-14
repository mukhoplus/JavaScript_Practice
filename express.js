var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});
  
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});

app.get('/big', (req, res)=>{
    const answer = bigReq();
    console.log(answer);
    res.send(answer);
});
app.get('/small', (req, res)=>{
    const answer = smallReq();
    console.log(answer);
    res.send(answer);
});

function bigReq(){
    for(let i=0; i<5000000000; ++i){}
    return ["big"];
}

function smallReq(){
    return ["small"];
}