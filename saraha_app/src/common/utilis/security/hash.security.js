import { genSalt, hash , compare } from "bcrypt";
import { SALT_ROUND } from "../../../../config/config.service.js";
import * as argon2 from "argon2"
import { HashApproachEnum } from "../../enums/security.enums.js";


export const generate_hash = async ({plain_text, salt = SALT_ROUND, minor = 'b', approach = HashApproachEnum.bcrypt}= {})=>{
    let hash_value;
    switch (approach) {
        case HashApproachEnum.argon2:
            hash_value = await argon2.hash(plain_text)
            break;
        default:
            const generated_salt = await genSalt(salt, minor)
            hash_value = await hash(plain_text, generated_salt)
            break;
    }


    return hash_value
    
}





export const compare_hash = async ({plain_text, cipher_text, approach = HashApproachEnum.bcrypt}= {})=>{
    let match = false;
    switch (approach) {
        case HashApproachEnum.argon2:
            match = await argon2.verify(cipher_text,plain_text)
            break;
        default:
            match = await compare(plain_text, cipher_text)
            break;
    }


    return match
    
}