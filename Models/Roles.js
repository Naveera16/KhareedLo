const mongoose = require("mongoose")

const roles_Schema = mongoose.Schema(

    {
Role_Name:{type : String , required: [true,"Roles must be selected"]},
Status:{type : String , required: [true,"Enter Status"]},
}
)


module.exports = mongoose.model("userRoles",roles_Schema)


