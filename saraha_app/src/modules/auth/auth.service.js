import { UserModel } from "../../DB/model/index.js"
import { compare_hash, encrypt, generate_hash } from "../../common/utilis/index.js"

export const signup = async (inputs) => {
    
    const {username, email, password, phone} = inputs
    const checkEmailExist = await UserModel.findOne({email})
    if (checkEmailExist) {
        throw new Error("Email exists", {cause:{status:404}})
    }
    const user = await UserModel.create({username, email, password:await generate_hash({plain_text:password}), phone:await encrypt(phone)})
    return user
}




export const login = async (inputs) => {
    
    const { email, password} = inputs
    const checkUserExist = await UserModel.findOne({email})
    if (!checkUserExist) {
        throw new Error("invalid login cradintials", {cause:{status:404}})
    }
    const match = await compare_hash({plain_text: password, cipher_text:checkUserExist.password})
    if(!match){
        throw new Error("invalid login cradintials", {cause:{status:404}})
    }
    return checkUserExist
}
