const express = require("express");
const app = express();


// -------- env
require("dotenv").config()
 
//------------DB
const {connectionDB} = require("./Config/Database")


//--- models
const {userRoles} = require("./Models/Roles");
const {userAccounts} = require("./Models/UserAccounts")

//---server listen
app.listen(process.env.PORT,function(){
    console.log(`Server is working on ${process.env.PORT} port`)
    connectionDB()

})