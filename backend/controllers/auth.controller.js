import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import generateTokenandsetcookie from '../utils/generateToken.js'

export const signup = async (req,res) =>{
   try{
    const {fullName, username, password, confirmPassword , gender}= req.body;
    if(password !== confirmPassword){
        return res.json({error:"Password not matched"})
    }
    const user = await User.findOne({username})

    if(user){
        return res.json({error:"User already exist"})
    }
    //hashed the password//
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt) 

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
       
        gender,
        profilePic:gender === "male"? boyProfilePic : girlProfilePic,
    })
    if(newUser){
         generateTokenandsetcookie(newUser._id,res);
    await newUser.save();
    res.json({_id:newUser._id, 
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
    })}
    else{
        res.json({error:"Invalid user data"})
    }
    }
    catch(error){
        console.log("Error in signup controller",error.message)
        res.json({error:"Internal Server error"})

    }
};

export const login = async(req,res) =>{
    
    try{
        const  {username,password} = req.body;
        const user= await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password||"")

        if(!user || !isPasswordCorrect)

    return    res.json({error:"Invalid Credentials"
    })
    generateTokenandsetcookie(user._id,res);
    res.json({
        _id:user._id, 
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic
    })

}
    catch(error){
        console.log("error in login ",error.message)
        res.json({error:"Internal Server error"})

    }
}

export const logout = (req,res) =>{
   try{
    res.cookie("jwt","",{maxAge:0})
    res.json({message:"Logged out SUccessfully"})

   }
   catch(error){
    console.log("Error in logout controller",error.message)
    res.json({error:"Internal server error"})

   }
}