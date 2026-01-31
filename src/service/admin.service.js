import adminModel from "../models/admin.model.js";
import { BedRequestError } from "../utils/error.js";

class AdminService {
    async getAllAdmins() {
        const admins = await adminModel.find();
        return {
            status: 200,
            admins
        }
    }

    async getAdminById(req) {
        const { id } = req.params;
        const admin = await adminModel.findById(id);
        return {
            status: 200,
            admin
        }   
    }
    async createAdmin(req){
        await adminModel.create(req.body)
        return{
            status:201,
            message:"Admin create successfully"
        }
    }

    async updateAdmin(req) {
        const { id } = req.params;
        const admin = await adminModel.findByIdAndUpdate(id, req.body);

        if (!admin) {
            throw new BedRequestError(404, "Admin not found");
        }
        return {
            status: 200,
            message: "Admin updated successfully"
        };
    }

    async deleteAdmin(req) {
        const { id } = req.params;
        const admin = await adminModel.findByIdAndDelete(id);
        if (!admin) {
            throw new BedRequestError(404, "Admin not found");
        }
        return {
            status: 200,
            message: "Admin deleted successfully",
        };  
    }   
}
export default new AdminService();