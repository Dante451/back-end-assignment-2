import express from 'express';
import { createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee } from '../controllers/employeeController';

const router = express.Router();

router.post('/', createEmployee); // Create Employee
router.get('/', getAllEmployees); // Get all Employees
router.get('/:id', getEmployeeById); // Get Employee by ID
router.put('/:id', updateEmployee); // Update Employee
router.delete('/:id', deleteEmployee); // Delete Employee

export default router;
