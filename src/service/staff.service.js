import staffsModel from "../models/staffs.model.js";
import { BedRequestError } from "../utils/error.js";

class StaffService {
    async getAllStaffs() {
        const staffs = await staffsModel.find();
        return {
            status: 200,
            staffs
        }
    }

    async getStaffById(req) {
        const { id } = req.params;
        const staff = await staffsModel.findById(id);
        return {
            status: 200,
            staff
        }   
    }

    async updateStaff(req) {
        const { id } = req.params;
        const staff = await staffsModel.findByIdAndUpdate(id, req.body);

        if (!staff) {
            throw new BedRequestError(404, "Staff not found");
        }
        return {
            status: 200,
            message: "Staff updated successfully"
        };
    }

    async deleteStaff(req) {
        const { id } = req.params;
        const staff = await staffsModel.findByIdAndDelete(id);
        if (!staff) {
            throw new BedRequestError(404, "Staff not found");
        }
        return {
            status: 200,
            message: "Staff deleted successfully",
        };  
    }   
}
export default new StaffService();