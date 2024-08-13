import mongoose from "./index.js";
import {validateEmail} from '../common/validations.js'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name is required!!"]
    },
    email:{
        type: String,
        required: [true, "Email is required!!"],
        validate:{
            validator: validateEmail,
            message:props => `${props.value} is not a valid email`
        }
    },
    password:{
        type: String,
        required:[true, "Password is required"]
    }
})

export default new mongoose.model('users', userSchema)