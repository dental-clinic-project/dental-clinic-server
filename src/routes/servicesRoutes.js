import express from "express";
import { getServices, getService } from "../controllers/servicesController.js";
const router = express.Router();

router.route("/").get(getServices);
router.route("/:service").get(getService);

export default router;
