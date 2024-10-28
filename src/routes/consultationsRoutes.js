import express from "express";
import {
  validateConsultation,
  getConsultation,
  validateForAppointment,
  appointmentForConsultation,
} from "../controllers/consultationsController.js";
const router = express.Router();

router.route("/").get(validateConsultation, getConsultation);
router.route("/:id").post(validateForAppointment, appointmentForConsultation);

export default router;
