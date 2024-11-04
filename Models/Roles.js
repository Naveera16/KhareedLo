const mongoose = require("mongoose")

const roles_Schema = mongoose.Schema(

    {
        Role_Name: { type: String, required: [true, "Roles must be selected"] },
        Status: { type: String, required: [true, "Enter Status"] },
    }
)


const userRoles = mongoose.model("userRoles", roles_Schema)
module.exports = { userRoles }


