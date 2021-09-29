const express = require('express');
const app = express();


app.set('port',5353);

const server = app.listen(app.get('port'),(req,res)=>{
    console.log(`Server is running at port: ${server.address().port}`);
});