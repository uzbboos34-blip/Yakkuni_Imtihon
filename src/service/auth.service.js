import fs from "fs";
import { join } from "path";
import { BedRequestError } from "../utils/error.js";
import { passCompare, passHash } from "../utils/bcrypt.js";
import staffsModel from "../models/staffs.model.js";
import { accessToken, refreshToken } from "../utils/jwt.js";
class AuthService {
    async register(req) {
        const userAgent = req.get("User-Agent");

        const agent = {
            userAgent,
            time: new Date().toISOString()
        };


        const { branch,username ,password,email, birth_date, gender, otp } = req.body;

        const data = fs.readFileSync(join(process.cwd(), "src", "database", "otp.json"), "utf-8")
        let otps = JSON.parse(data) || []
        

        const existOtp = otps.find(o => o.otp == +otp && o.email == email)
        

        if (!existOtp) {
            throw new BedRequestError(400, "email or otp wrong")
        }

        const passwordHash = await passHash(password)

        const newUser = await staffsModel.create({
            branch,
            username,
            password: passwordHash,
            email,
            birth_date,
            gender 
    })


        if (!newUser) {
            throw new BedRequestError(400, "Staff not created")
        }

        fs.writeFileSync(join(process.cwd(), "src", "database", "agent.json"), JSON.stringify(agent, null, 4))

        return {
            status: 201,
            message: "Staff registered successfully",
            accessToken:accessToken(newUser._id, newUser.username, newUser.role),
            refreshToken:refreshToken(newUser._id, newUser.username, newUser.role)
        }
    }

    async login(req) {
        const userAgent = req.get("user-agent");

        const data = {
            userAgent,
            time: new Date().toISOString()
        };

        const { username, password } = req.body;

        const staff = await staffsModel.findOne({ username: username })

        if (!staff) {
            throw new BedRequestError(400, "Username or password wrong")
        }

        if (!await passCompare(password, staff.password)) {
            throw new BedRequestError(400, "Username or password wrong")
        }
        fs.writeFileSync(join(process.cwd(), "src", "database", "agent.json"), JSON.stringify(data, null, 4))

        return {
            status: 200,
            message: "Login successful",
            accessToken:accessToken(staff._id, staff.username, staff.role),
            refreshToken:refreshToken(staff._id, staff.username, staff.role)
        }
    }
}
export default new AuthService();