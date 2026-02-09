import mongoose from "mongoose";
import { Genderenum,Providerenum } from "../../common/enums/index.js";


const userschema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true, "Firstname is required"],
        minLength:2,
        maxLength:25
    }, lastname:{
        type:String,
        required:[true, "Lastname is required"],
        minLength:2,
        maxLength:25
    },email:{
        type:String,
        required:true,
        unique:true,
    }, password:{
        type:String,
        required:true
    }, DOB:Date,
    phone:String,
    gender:{
        type:String,
        enum:Object.values(Genderenum),
        default:Genderenum.Male
    },
    confirmEmail:Date,
    provider:{
        type:String,
        enum:Object.values(Providerenum),
        default:Providerenum.System
    },profilePic:String,

},{
    collation:"Users",
    timestamps:true,
    strict:true,
    validateBeforeSave:true,
    strictQuery:true,
    optimisticConcurrency:true,
    autoIndex:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true},
})

userschema.virtual("username").set(function (value){
    const [firstname, lastname] = value?.split(' ') || []
    this.set({firstname, lastname})
}).get(function (){
    return this.firstname + " " + this.lastname
})

export const UserModel = mongoose.models.User || mongoose.model("User", userschema)