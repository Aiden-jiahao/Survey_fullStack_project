const express = require('express');
const app = express();

app.get('/',(req, res)=> {
    res.send({ hi: 'there' });
});


const PORT=process.env.PORT || 5000;
app.listen(PORT);

// app.listen (5000);  this is to run the project on site
// on command line , node index.js 