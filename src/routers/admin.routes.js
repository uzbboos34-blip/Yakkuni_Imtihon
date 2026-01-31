import { Router } from "express";
import AdminControllers from "../controllers/admin.controller.js";
import validation from "../middleware/admin.validation.js";
import {checkPermission} from "../middleware/checkPermission.js";
import checkToken from "../middleware/checkToken.js";

const router = Router();

router
    .get("/api/admins", checkToken,checkPermission("Admin", "GET"), AdminControllers.getAllAdmins)
    .get("/api/admins/:id", checkToken,checkPermission("Admin", "GET"), AdminControllers.getAdminById)
    .post("/api/admins", checkToken,checkPermission("Admin", "POST"), validation.create,AdminControllers.createAdmin)
    .put("/api/admins/:id", checkToken,checkPermission("Admin", "PUT"), validation.update, AdminControllers.updateAdmins)
    .delete("/api/admins/:id", checkToken,checkPermission("Admin", "DELETE"), AdminControllers.deleteAdmins)

export default router;