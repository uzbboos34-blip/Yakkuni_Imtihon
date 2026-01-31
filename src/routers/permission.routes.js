import { Router } from "express";
import permissionController from "../controllers/permission.controller.js";
import checkToken from "../middleware/checkToken.js";
import validation from "../middleware/prmission.validation.js";
import {checkPermission} from "../middleware/checkPermission.js";

const router = Router();

router  
    .get("/api/permissions", checkToken,checkPermission("Permission", "GET"), permissionController.getAllPermissions)
    .get("/api/ownPermissions", checkToken,permissionController.ownPermissions)
    .post("/api/permissions", checkToken,checkPermission("Permission", "POST"), validation.create, permissionController.createPermission)
    .put("/api/permissions/:id", checkToken,checkPermission("Permission", "PUT"), validation.update, permissionController.updatePermission)
    .delete("/api/permissions/:id", checkToken,checkPermission("Permission", "DELETE"), permissionController.deletePermission)
export default router;