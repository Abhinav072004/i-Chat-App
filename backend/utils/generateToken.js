import jwt from 'jsonwebtoken'

const generateTokenandsetcookie =(userId,res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{expiresIn:'30d'})

    res.cookie("jwt",token,{
        maxAge:30*24*60*60*1000,
        httpOnly: true,// prevent Xss attacks cross-site-scripting attacks
        sameSite:"strict",//CSRF attacks --CRoss site request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    })
}
export default generateTokenandsetcookie;
