const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const bcrypt =require('bcrypt')

const jwt= require('jsonwebtoken')
app.use(cookieParser());

//encryption
// app.get('/',function(req,res){
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("password", salt, function(err, hash) {
//             // Store hash in your password DB.
//             console.log(hash);
//         });
//     });
// })

//decryption
// app.get('/',(req,res)=>{
//     bcrypt.compare("passwor", "$2b$10$aqMMILhq8ktosM3mwXc4b..CKi2azFCN1vXbXPYM2DyZxiHVKI3sK", function(err, result) {
//         // result == true
//         console.log(result);
//     });
// })

//jwt
app.get('/',(req,res)=>{
    let token=jwt.sign({email:"harshitsfswe@gmail.com"},"secret");
    console.log(token);
    res.cookie("token",token);
    res.send("done")
})
app.get('/read',(req,res)=>{
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);
})
app.listen(3000);