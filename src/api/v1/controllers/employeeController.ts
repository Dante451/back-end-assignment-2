import { Request, Response } from 'express';
import * as employeeService from '../services/employeeService';
import { Employee } from '../interfaces/Employee';

/**
 * Creates a new employee and responds with the created employee.
 * 
 * @async
 * @param {Request} req - The request object containing the employee data in `req.body`.
 * @param {Response} res - The response object used to send the status and the created employee data.
 * @returns {Promise<void>} A Promise that resolves when the employee is created and the response is sent.
 * 
 * @throws {Error} If there is an error during employee creation, responds with a 400 status and the error message.
 * 
 * @example
 * // POST /employees
 * // req.body = { name: "John Doe", position: "Developer" }
 * // res.status(201).json({ id: 1, name: "John Doe", position: "Developer" })
 */
export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employee: Employee = req.body; // Get the employee data from the request body
    const newEmployee = await employeeService.createEmployee(employee); // Call service to create a new employee
    res.status(201).json(newEmployee); // Respond with the created employee
  } catch (error) {
    res.status(400).json({ message: error.message }); // Respond with error message if creation fails
  }
};

/**
 * Retrieves all employees and responds with the list of employees.
 * 
 * @async
 * @param {Request} req - The request object.
 * @param {Response} res - The response object used to send the status and list of employees.
 * @returns {Promise<void>} A Promise that resolves when the list of employees is retrieved and the response is sent.
 * 
 * @throws {Error} If there is an error retrieving employees, responds with a 400 status and the error message.
 * 
 * @example
 * // GET /employees
 * // res.status(200).json([{ id: 1, name: "John Doe", position: "Developer" }, ...])
 */
export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await employeeService.getAllEmployees(); // Get the list of employees from the service
    res.status(200).json(employees); // Respond with the list of employees
  } catch (error) {
    res.status(400).json({ message: error.message }); // Respond with error message if fetching fails
  }
};

/**
 * Retrieves a specific employee by their unique id and responds with the employee's data.
 * 
 * @async
 * @param {Request} req - The request object containing the employee id in `req.params`.
 * @param {Response} res - The response object used to send the status and employee data.
 * @returns {Promise<void>} A Promise that resolves when the employee is found and the response is sent.
 * 
 * @throws {Error} If there is an error retrieving the employee, responds with a 400 status and the error message.
 * 
 * @example
 * // GET /employees/:id
 * // req.params.id = 1
 * // res.status(200).json({ id: 1, name: "John Doe", position: "Developer" })
 * // If not found, res.status(404).json({ message: "Employee not found" })
 */
export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Get the employee id from the request parameters
    const employee = await employeeService.getEmployeeById(Number(id)); // Call service to get employee by id
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' }); // If not found, respond with 404
    }
    res.status(200).json(employee); // Respond with the employee data if found
  } catch (error) {
    res.status(400).json({ message: error.message }); // Respond with error message if fetching fails
  }
};

/**
 * Updates the data of a specific employee and responds with the updated employee's data.
 * 
 * @async
 * @param {Request} req - The request object containing the employee id in `req.params` and updated data in `req.body`.
 * @param {Response} res - The response object used to send the status and updated employee data.
 * @returns {Promise<void>} A Promise that resolves when the employee is updated and the response is sent.
 * 
 * @throws {Error} If there is an error updating the employee, responds with a 400 status and the error message.
 * 
 * @example
 * // PUT /employees/:id
 * // req.params.id = 1
 * // req.body = { position: "Senior Developer" }
 * // res.status(200).json({ id: 1, name: "John Doe", position: "Senior Developer" })
 * // If not found, res.status(404).json({ message: "Employee not found" })
 */
export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Get the employee id from the request parameters
    const updatedData = req.body; // Get the updated data from the request body
    const updatedEmployee = await employeeService.updateEmployee(Number(id), updatedData); // Call service to update the employee
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' }); // If not found, respond with 404
    }
    res.status(200).json(updatedEmployee); // Respond with the updated employee data
  } catch (error) {
    res.status(400).json({ message: error.message }); // Respond with error message if updating fails
  }
};

/**
 * Deletes an employee by their unique id and responds with a success message.
 * 
 * @async
 * @param {Request} req - The request object containing the employee id in `req.params`.
 * @param {Response} res - The response object used to send the status and deletion message.
 * @returns {Promise<void>} A Promise that resolves when the employee is deleted and the response is sent.
 * 
 * @throws {Error} If there is an error deleting the employee, responds with a 400 status and the error message.
 * 
 * @example
 * // DELETE /employees/:id
 * // req.params.id = 1
 * // res.status(200).json({ message: "Employee deleted successfully" })
 * // If not found, res.status(404).json({ message: "Employee not found" })
 */
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Get the employee id from the request parameters
    const deleted = await employeeService.deleteEmployee(Number(id)); // Call service to delete the employee
    if (!deleted) {
      return res.status(404).json({ message: 'Employee not found' }); // If not found, respond with 404
    }
    res.status(200).json({ message: 'Employee deleted successfully' }); // Respond with success message
  } catch (error) {
    res.status(400).json({ message: error.message }); // Respond with error message if deletion fails
  }
};

