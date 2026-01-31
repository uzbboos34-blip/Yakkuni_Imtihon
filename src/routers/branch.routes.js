import { Router } from "express";
import BrancheControllers from "../controllers/branch.controller.js";
import validation from "../middleware/branche.validation.js";
import {checkPermission} from "../middleware/checkPermission.js";
import checkToken from "../middleware/checkToken.js";

const router = Router();

router
    .get("/api/branches", checkToken,checkPermission("Branch", "GET"), BrancheControllers.getAllBranches)
    .get("/api/branches/:id", checkToken,checkPermission("Branch", "GET"), BrancheControllers.getBranchById)
    .post("/api/branches", checkToken,checkPermission("Branch", "POST"), validation.create, BrancheControllers.createBranch)
    .put("/api/branches/:id", checkToken,checkPermission("Branch", "PUT"), validation.update, BrancheControllers.updateBranch)
    .delete("/api/branches/:id", checkToken,checkPermission("Branch", "DELETE"), BrancheControllers.deleteBranch)
export default router;
