// Importing morgan
import express from 'express';
import morgan from "morgan";
import employeeRoutes from './api/v1/routes/employeeRoutes';
import branchRoutes from './api/v1/routes/branchRoutes';

const app = express();

// Use morgan for HTTP request logging
app.use(morgan("combined"));

app.use(express.json());
app.use('/api/v1/employees', employeeRoutes);
app.use('/api/v1/branches', branchRoutes);

export default app;
