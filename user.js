const express = require('express');
const user = express.Router();
const db = require('../database/database');
//user.get('/',(req,res) =>{
//    res.send("Hello I'm user");
//});

function getDialogue(){
  
    return new Promise(function(resolve,reject){
  
      resolve({
        "uName":"Anuththara",
        "uid":"3"
      });
    })
  }
  
  getDialogue().then(result => {
    console.log(result);
    const obj = result;
  
    const userData ={
      uName:obj.uName,
      uid:obj.uid
    };
  
    return db.collection('users').doc('user3')
    .set(userData).then(() => console.log('new user written to database'));
  });
  

module.exports = user;