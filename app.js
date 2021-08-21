const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const public = path.resolve(__dirname, './public/');
app.use(express.static(public));

console.log(__dirname);

app.listen(port, ()=>{
    console.log("Server initialized at port " /*+ port*/);
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('./views/index.html'));
});

app.get('/create', (req, res)=>{
    res.sendFile(path.resolve('./views/submitWork.html'));
});