import mongoose from 'mongoose'
const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI,).then(()=>{
            console.log("Connected to MongoDB")
        })
    }
    catch (error){
        console.log(error)
    }
}
export default connectToMongoDB;