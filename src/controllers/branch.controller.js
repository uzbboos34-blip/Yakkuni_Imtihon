import brancheService from "../service/branche.service.js";

class BrancheControllers {

    async getAllBranches(req, res, next) {
        try {
            const data = await brancheService.getAllBranches(req)
            if (data) {
                return res.status(data.status).json(data)
            }
        } catch (error) {
            next(error)
        }
    }

    async getBranchById(req, res, next) {
        try {
            const data = await brancheService.getBranchById(req)
            if (data) {
                return res.status(data.status).json(data)
            }
        } catch (error) {
            next(error)
        }
    }

    async createBranch(req, res, next) {
        try {
            const data = await brancheService.createBranch(req)
            if (data) {
                return res.status(data.status).json(data)
            }
        } catch (error) {
            next(error)
        }
    }

    async updateBranch(req, res, next) {
        try {
            const data = await brancheService.updateBranch(req)
            if (data) {
                return res.status(data.status).json(data)
            }
        } catch (error) {
            next(error)
        }
    }

    async deleteBranch(req, res, next) {
        try {
            const data = await brancheService.deleteBranch(req)
            if (data) {
                return res.status(data.status).json(data)
            }
        } catch (error) {
            next(error)
        }
    }

}

export default new BrancheControllers();