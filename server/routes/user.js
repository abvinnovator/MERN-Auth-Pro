import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
const router = express.Router()
import {User} from '../Models/User.js'
import nodemailer from 'nodemailer'

router.post('/signup',async (req,res)=>{

const {username,email,password}=req.body
const user = await User.findOne({email})

if(user){
    return res.json({messasge:"User already exist"})
}

const hashpassword=await bcrypt.hash(password,10)

const newUser = new User({
    username,
    email,
    password:hashpassword,
    
})

await newUser.save()

return res.json({status:true,messasge:"record register"})

})
router.post('/login',async (req,res)=>{
    const{email,password}=req.body
    const user = await User.findOne({email})
    if(!user){
        return res.json({messasge:"user is not registered"})
    }
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword){
        return res.json({message:"password incorect"})

    }
    const token = jwt.sign({username:user.username},process.env.KEY,{expiresIn:"1d"})
    res.cookie("token",token,{httpOnly:true,maxAge:360000})
    return res.json({status:true,message:"login success"})
})
router.post('/forgot-password',async (req,res)=>{
    const {email}= req.body
    try{
        const user=await User.findOne({email})
        if(!user){
            return req.json({message:"user not registered"})

        }
        const token = jwt.sign({id:user._id},process.env.KEY,{expiresIn:"5m"})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'brahmavamsi1234@gmail.com',
              pass: 'ezva fsmp ezia enxk'
            }
          });
          
          var mailOptions = {
            from: 'brahmavamsi1234@gmail.com',
            to: email,
            subject: 'reset password',
            text: `http://localhost:5173/resetpassword/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              return res.json({message:"error sent"})
            } 
            else {
             return res.json({status:true,message:"email sent"})
            }
          });
       
    } 
    catch(err){
        console.log(err)
    }
})
router.post('/reset-password/:token',async (req,res)=>{
  const token = req.params.token;
  const{password}=req.body
  try{
const decoded = jwt.verify(token,process.env.KEY);
const id = decoded.id;
const hashPassword= await bcrypt.hash(password,10)
await User.findByIdAndUpdate({_id:id},{password:hashPassword})
return res,json({status:true,message:"update success"})
  }
  catch(err){
 return res.json("invalid token")
  }
})
router.post('/logout', async (req, res) => {
  try {
    
      res.clearCookie('token');
      return res.json({ status: true, message: "Logout success" });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: "Error during logout" });
  }
});
export{router as UserRouter}