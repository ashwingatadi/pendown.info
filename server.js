const express = require('express');

var port = process.env.PORT || 3000;
var app = express();

app.get('/',(req, res)=>{
    res.send('<h1>This Site will be available soon</h1>');
});

app.listen(port,()=>{
    console.log(`App Started running on port ${port}`);
});