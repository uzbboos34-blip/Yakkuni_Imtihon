import { config } from "dotenv";
import Jwt from "jsonwebtoken";
config()

export function accessToken(id, username, role) {
    return Jwt.sign({id, username, role}, process.env.JWT_SECRET,{expiresIn:"1h"})
}
export function refreshToken(id, username, role) {
    return Jwt.sign({id, username, role}, process.env.JWT_SECRET,{expiresIn:"1d"})
}

export function verifyToken(token) {    
    return Jwt.verify(token, process.env.JWT_SECRET)
}
