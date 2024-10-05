import express from "express";
import cors from "cors";

import teamRoutes from "./routes/teamRoutes.js";
import servicesRoutes from "./routes/servicesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import reviewsRoutes from "./routes/reviewsRoutes.js";
import consultationsRoutes from "./routes/consultationsRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/team", teamRoutes);
app.use("/api/v1/services", servicesRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/reviews", reviewsRoutes);
app.use("/api/v1/consultation", consultationsRoutes);

export default app;
