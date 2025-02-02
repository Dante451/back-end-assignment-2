import { Request, Response } from 'express';
import * as employeeService from '../services/employeeService';
import { Employee } from '../interfaces/Employee';

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employee: Employee = req.body;
    const newEmployee = await employeeService.createEmployee(employee);
    res.status(201).json(newEmployee); // Respond with the created employee
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json(employees); // Respond with the list of employees
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const employee = await employeeService.getEmployeeById(Number(id));
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedEmployee = await employeeService.updateEmployee(Number(id), updatedData);
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await employeeService.deleteEmployee(Number(id));
    if (!deleted) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
