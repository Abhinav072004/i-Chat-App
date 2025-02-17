import User from "../models/user.model.js"

export const getUsersForSidebar = async(req,res)=>{
    try{
         const loggedInUserId = req.user._id

         const filteredUsers = await User.find({_id:{
            $ne:loggedInUserId
         }}).select("-password");
        res.json(filteredUsers); 
    }
    catch(error){
        console.log("Error in getUsersForSidebar", error.message);
        res.json({error:"Internal server error"})
    }

}