const mongoose = require("mongoose")

const userAccount_Schema = mongoose.Schema(

    {
userName:{type : String},
userEmail:{type : String},
userPassword:{type : String},
userStatus:{type : String},
userImage:{type : String},

    }
)
module.exports = mongoose.model("userAccounts", userAccount_Schema)