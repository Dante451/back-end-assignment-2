// Importing morgan
import morgan from "morgan";

// Use morgan for HTTP request logging
app.use(morgan("combined"));

import express from 'express';
import employeeRoutes from './api/v1/routes/employeeRoutes';
import branchRoutes from './api/v1/routes/branchRoutes';

const app = express();

app.use(express.json());
app.use('/api/v1/employees', employeeRoutes);
app.use('/api/v1/branches', branchRoutes);

export default app;
