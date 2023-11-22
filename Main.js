const express = require("express")
const path = require("path")
var cors = require('cors')
const app = express()
var bodyParser = require('body-parser');  
const UserModel = require("./mongodb");
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname));
PORT = 5000

var error=""
app.get('/',function(req,res) {
    res.render(__dirname + "/Userauthentication.html", { error });
    error=""
});
  
app.post("/SignUp",bodyParser.urlencoded({ extended: false }) ,async function (req, res) {
    const { email, password, confirmpassword } = req.body
    if (confirmpassword === password) {
        console.log(email)
        const r = await UserModel.insertMany({ email, password, confirmpassword });
        console.log(r)
        error = ""
        res.redirect("/");
    }
    else {
        error="Password does not match"
        res.redirect("/")
    }
})
app.post("/Login",bodyParser.urlencoded({ extended: false }) ,async function (req, res) {
    const { email, password } = req.body
    const r = await UserModel.findOne({ email, password });
    // console.log(r)
    if (r) {
        error = ""
        res.render(__dirname + "/home.html");
    }
    else {
        error="Incorrect Password"
        res.redirect("/")
    };

})
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
