	// call all the required packages
    const express = require('express')
    const bodyParser= require('body-parser')
    const multer = require('multer');
    const fs = require("fs");
    const path = require("path");
    //CREATE EXPRESS APP
    const app = express();
    const exec = require('child_process').exec

//um auf CSS und Javascript zuzugreifen.
app.use(express.static("scripts"));
app.use('/images', express.static(__dirname + '/images'));
//app.use('/videos', express.static(__dirname + '/videos'));
app.get('/favico.ico', (req, res) => {
    res.sendStatus(404);
});
//zeigt den homepage
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.listen(3121, () => console.log('Server started on port 3121'));
