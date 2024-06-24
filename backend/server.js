import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
const app = express();
const PORT = process.env.PORT||3001;

dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.get("/", (req,res) => {
    res.send("Heloo World")
})
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT ,()=>{
    connectToMongoDB()
    console.log(`server is connected at ${PORT}`)
})