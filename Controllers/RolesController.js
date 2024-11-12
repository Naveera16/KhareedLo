//--- models
const { userRoles } = require("../Models/Roles");

//Method  ------------ POST
//API ------------ http://localhost:5000/role
//Description --------- User Roles Insertion Functionality

async function createRoles(req, res) {
    const { Role_Name, Status } = req.body;
   // check if role exists
    const roleExists = await userRoles.find({ Role_Name: Role_Name.toLowerCase() })
  // No spaces or spcial characters or numbers
    const roleName_Checker = /^[A-Za-z]+$/;

    if (roleName_Checker.test(Role_Name)) {
        if (roleExists.length > 0) return res.status(500).send({ "error": "Role Already Exists" })
            try {
                const newRole = await userRoles.create(
            {
                Role_Name: Role_Name.toLowerCase(),
                Status: Status
            }
        )

        return res.status(201).send({ "data": req.body })
            } catch (error) {
                // if(error.name == "ValidationError"){

                    return res.status(204).send({"error" : error.errors})
                
                
            }
        
    }
    else {
        return res.status(500).send({ "error": "Special chracter , extra spaces or numbers are not allowed" })
    }
}


//Method  ------------ GET
//API ------------ http://localhost:5000/role
//Description --------- User Roles Calling Functionality

async function getRoles(req, res) {
    //Get all Roles 
    const AllRoles = await userRoles.find();
    return res.status(201).send({ "data": AllRoles })
}




//Method  ------------ Delete
//API ------------ http://localhost:5000/role/:id
//Description --------- User Roles Delete Functionality

async function deleteRoles(req, res) {

try {
    //Finding Role
    const findRole = await userRoles.find({ _id : req.params.id });
// If not exist
if(findRole.length<=0) return res.status(404).send({"error" : "Not Found"})

    const deleteRole = await userRoles.deleteOne({_id : req.params.id})
    return res.status(200).send({ "message": "Delete Roles" })
} catch (error) {
    console.log(error)
}

}




//Method  ------------ Update
//API ------------ http://localhost:5000/role/:id
//Description --------- User Roles Update Functionality

async function updateRoles(req, res) {
 const UpdateRoleID = req.params.id
try {
    //Finding Role
    const oldRoleData = await userRoles.find({ _id : UpdateRoleID.toLowerCase() });
// If not exist
if(oldRoleData.length<=0) return res.status(404).send({"error" : "User Role Not Found"})

  //Role new data
  const {Role_Name ,Status} = req.body


const UpdateRole = await userRoles.updateOne(
    {
        "_id" : oldRoleData[0]._id
    },
    {
        $set : {
            Role_Name : Role_Name.toLowerCase() ,
            Status
        }
    }
)

    return res.status(200).send({ "message": "User Role Updated" })

} catch (error) {
    console.log(error)
}

}

module.exports = { createRoles, getRoles , deleteRoles ,updateRoles  }