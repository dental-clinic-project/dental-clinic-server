import express from 'express';
import cors from 'cors';

import teamRoutes from './routes/teamRoutes.js';
import servicesRoutes from './routes/servicesRoutes.js';
import authRouters from './routes/authRouters.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/team', teamRoutes);
app.use('/api/v1/services', servicesRoutes);
app.use('/api/v1/auth', authRouters);

export default app;
