import express from "express";
import { getReviews, addReviews } from "../controllers/reviewsController.js";
const router = express.Router();

router.route("/").get(getReviews).post(addReviews);

export default router;
