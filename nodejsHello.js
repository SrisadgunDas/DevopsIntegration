const express = require('express');
const app = express();
// const connection = require('./database');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/create', async(req, res)=>{
    console.log("helloooooo")
    res.send("Hello sadgun")
    // // let data = req.params
    // let q = `SELECT * FROM EMPLOYEES`
    // await connection.query(q, (err, result)=>{
    //     if(err) throw err;
    //     console.log(result);
    //     res.send(result)
    // })
})
// app.post('/addDetails', )
app.listen(4000, ()=>{
    console.log("server is done");
})