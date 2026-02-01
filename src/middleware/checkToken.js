import { NotFoundError, UnauthorizedError } from "../utils/error.js"
import { verifyToken } from "../utils/jwt.js";;
import Admin from "../models/admin.model.js";
import Staff from "../models/staffs.model.js";
import fs from "fs";
import { join } from "path";

export default async(req, res, next) =>{
        try {
            
            const authHeader = req.headers.authorization;
            const userAgent = req.headers["user-agent"]
            const agent = fs.readFileSync(join(process.cwd(), "src", "database", "agent.json"), "utf-8")
            const temp = JSON.parse(agent) || []            
            
            if (!(userAgent == temp.userAgent)) {
                throw new UnauthorizedError(401, "Sizda ruxsat yo'q");
            }
            
            if (!authHeader) {
                throw new UnauthorizedError(401, "Token required");
            }


            
            const token = authHeader.split(" ")[1];
                    
            if (!token) {
                throw new UnauthorizedError(401, "Don't send without token")
            }
            const data = verifyToken(token)
            

            if (data.role === "SuperAdmin") {
                req.user = data
                return next();  
            }
            
            
            let user
            if (data.role == "Admin") {
                user = await Admin.findById(data.id)
            } else if (data.role == "Staff") {
                user = await Staff.findById(data.id)
            }
    
            if (!user) {
                throw new NotFoundError(404, "User not found")
            }
            req.user = data
            next()
        } catch (error) {
            if (error.name == "TokenExpiredError") {
                error.status = 400
                next(error)
            }else{
                next(error)
            }
        }
    
}