import crypto from 'crypto'

const IV_LENGTH = 16;
const ENCRYPTION_SECRET_KEY = Buffer.from("51575367123987456369258741852369")

export const encrypt = (text)=>{
    const iv = crypto.randomBytes(IV_LENGTH);


    const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_SECRET_KEY, iv)

    let encryption_data = cipher.update(text, 'utf-8', 'hex')
    encryption_data = cipher.final('hex')
    
    return `${iv.toString('hex')}:${encryption_data}`
} 

export const decrypt = (encrypted_data)=>{
    const [iv, encryption_text] = encrypted_data.split(':');

    const binaryLikeIV = Buffer.from(iv,'hex')

    const decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_SECRET_KEY, binaryLikeIV)

    let decypted_data = decipher.update(encrypted_data, 'utf-8', 'hex')
    encryption_data = decipher.final('utf-8')
    
    return `${iv.toString('hex')}:${encryption_data}`
} 