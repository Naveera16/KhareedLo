
const mongoose = require("mongoose");




async function connectionDB(){
    try {
        const connectDB = await mongoose.connect(process.env.DB)
        if(connectDB)console.log("~~ Mongo DB Atlas connected successfully!!  ~~")
    } catch (error) {
     console.log(error)   
    }
}

module.exports = {connectionDB}

////------mongodb+srv://admin:<db_password>@khareedlo.7vfzh.mongodb.net/?retryWrites=true&w=majority&appName=KhareedLo


// .env
// PORT=5000
// DB=mongodb+srv://admin:admin@khareedlo.7vfzh.mongodb.net/KhareedLOApp?retryWrites=true&w=majority&appName=KhareedLo