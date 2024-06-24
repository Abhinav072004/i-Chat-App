import jwt from  'jsonwebtoken'
import User from '../models/user.model.js';

const protectRoute = async(req,res,next) =>{
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Not Authorized"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.json({error:"unauthorized"})
        }
            const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({error:" User Not found"})
        }
        req.user =user
        next()
    }
    catch(error){
        console.log("error in protectroute controllers",error.message)
        res,json({error:"Internal server error"})
    }
}
export default protectRoute;