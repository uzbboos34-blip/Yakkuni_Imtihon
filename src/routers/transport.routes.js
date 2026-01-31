import { Router } from "express";
import TransportControllers from "../controllers/transport.controller.js";
import validation from "../middleware/transport.validation.js";
import {checkPermission} from "../middleware/checkPermission.js";
import checkToken from "../middleware/checkToken.js";

const router = Router();

router  
    .get("/api/transports", checkToken,checkPermission("Transport", "GET"), TransportControllers.getAllTransports)
    .post("/api/transports", checkToken,checkPermission("Transport", "POST"), validation.create, TransportControllers.createTransport)
    .put("/api/transports/:id", checkToken,checkPermission("Transport", "PUT"), validation.update, TransportControllers.updateTransport)
    .delete("/api/transports/:id", checkToken,checkPermission("Transport", "DELETE"), TransportControllers.deleteTransport)

export default router;