import PermissionModel from "../models/permission.js";
import { BedRequestError } from "../utils/error.js";
class PermissionService {
    async getAllPermissions() {
        const permissions = await PermissionModel.find();
        return { 
            status: 200, 
            permissions 
        };
    }

    async ownPermissions(req) {
        const { id } = req.user;
        
        const permissions = await PermissionModel.find({ StaffId: id });
        return { 
            status: 200, 
            permissions 
        };
    }       
    async createPermission(req) {
        await PermissionModel.create(req.body);
        return { 
            status: 201, 
            message: "Permission created successfully", 
        };
    }
    async updatePermission(req) {
        const { id } = req.params;
        const permission = await PermissionModel.findByIdAndUpdate(id, req.body);
        if (!permission) {
            throw new BedRequestError(404, "Permission not found");
        }
        return { 
            status: 200, 
            message: "Permission updated successfully"
        };
    }
    async deletePermission(req) {
        const { id } = req.params;
        const permission = await PermissionModel.findByIdAndDelete(id);
        if (!permission) {
            throw new BedRequestError(404, "Permission not found");
        }
        return { 
            status: 200, 
            message: "Permission deleted successfully", 
        };
    }
}
export default new PermissionService();