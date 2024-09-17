const express = require('express');
const cors = require('cors');

const teamRoutes = require('./routes/teamRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const authRouters = require('./routes/authRouters');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/team', teamRoutes);
app.use('/api/v1/services', servicesRoutes);
app.use('/api/v1/auth', authRouters);

module.exports = app;
