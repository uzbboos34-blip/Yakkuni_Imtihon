import {Router} from "express";
import AuthControllers from "../controllers/auth.controller.js";
import validation from "../middleware/auth.validation.js";

const router = Router();

router
    .post("/api/register", validation.register, AuthControllers.register)
    .post("/api/login", validation.login, AuthControllers.login)

export default router;    