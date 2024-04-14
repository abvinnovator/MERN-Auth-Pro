import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import { UserRouter } from "./routes/user.js";
import cookieParser from 'cookie-parser';


dotenv.config()

const app=express()
app.use(express.json())
app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true,
}))
app.use(cookieParser())
app.use('/auth',UserRouter)


app.get("/users", async (req, res) => {
  try {
    // Extract user information from the token
    const token = req.cookies.token; // Assuming you're storing the JWT token in a cookie named 'token'
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.KEY);
    const username = decoded.username;

    // Fetch the user data based on the username
    const loggedInUser = await User.findOne({ username });
    if (!loggedInUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(loggedInUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch user information" });
  }
});

mongoose.connect('mongodb://127.0.0.1:27017/authenciation')

app.listen(process.env.PORT,()=>{
  console.log("server is running")
})