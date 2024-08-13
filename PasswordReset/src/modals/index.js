import mongoose from "mongoose";
import 'dotenv/config.js'

mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`)
.then(()=>console.log("Mongo DB connected...."))
.catch((err)=>console.log(err))

export default mongoose