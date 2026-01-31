import branchesModel from "../models/branches.model.js";
import { BedRequestError } from "../utils/error.js";

class BrancheService {
    async getAllBranches() {
        const branches = await branchesModel.find();
        return { 
            status: 200, 
            branches 
        };
    }

    async getBranchById(req) {
        const { id } = req.params;
        const branch = await branchesModel.findById(id);
        if (!branch) {
            throw new BedRequestError(404, "Branch not found");
        }
        return { 
            status: 200, 
            branch 
        };
    }
    async createBranch(req) {
        const { name, address } = req.body;
        await branchesModel.create({ name, address });

        return { 
            status: 201, 
            message: "Branch created successfully", 
        };
    }
    async updateBranch(req) {
        const { id } = req.params;
        const { name, address } = req.body;

        const branch = await branchesModel.findByIdAndUpdate(id, { name, address });
        if (!branch) {
            throw new BedRequestError(404, "Branch not found");
        }
        return { 
            status: 200, 
            message: "Branch updated successfully", 
        };
    }
    async deleteBranch(req) {
        const { id } = req.params;
        const branch = await branchesModel.findByIdAndDelete(id);
        if (!branch) {
            throw new BedRequestError(404, "Branch not found");
        }
        return { 
            status: 200, 
            message: "Branch deleted successfully", 
        };
    }
}
export default new BrancheService();