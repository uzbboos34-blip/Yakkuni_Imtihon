import { Router } from "express";
import StaffControllers from "../controllers/staff.controller.js";
import validation from "../middleware/staff.validation.js";
import {checkPermission} from "../middleware/checkPermission.js";
import checkToken from "../middleware/checkToken.js";

const router = Router();

router
    .get("/api/staffs", checkToken,checkPermission("Staff", "GET"), StaffControllers.getAllStaffs)
    .get("/api/staffs/:id", checkToken,checkPermission("Staff", "GET"), StaffControllers.getStaffById)
    .put("/api/staffs/:id", checkToken,checkPermission("Staff", "PUT"), validation.update, StaffControllers.updateStaff)
    .delete("/api/staffs/:id", checkToken,checkPermission("Staff", "DELETE"), StaffControllers.deleteStaff)

export default router;