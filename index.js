const express = require("express");
const app = express();


// -------- env
require("dotenv").config()
 
// --------- MIDDLEWEARS
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//------------DB
const {connectionDB} = require("./Config/Database")


// MODELS - IMPORTED
const {createRoles , getRoles , deleteRoles , updateRoles} = require("./Controllers/RolesController")

// --User Role API {GET, POST}
app.route("/role").get(getRoles).post(createRoles)

// --User Role API {Delete, Update}
app.route("/role/:id").delete(deleteRoles).put(updateRoles)


//---server listen
app.listen(process.env.PORT,function(){
    console.log(`Server is working on ${process.env.PORT} port`)
    connectionDB()

})