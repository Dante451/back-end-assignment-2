import { Employee } from '../interfaces/employee';

let employees: Employee[] = []; // In-memory "database" for the sake of simplicity

/**
 * Creates a new employee and adds it to the list of employees.
 * 
 * @param {Employee} employee - The employee object containing details of the new employee.
 * @returns {Employee} The newly created employee with an assigned id.
 * 
 * @example
 * // Creates a new employee
 * const newEmployee = createEmployee({ name: "John Doe", position: "Developer" });
 * console.log(newEmployee); // { id: 1, name: "John Doe", position: "Developer" }
 */
export const createEmployee = (employee: Employee): Employee => {
  const newEmployee = { ...employee, id: employees.length + 1 }; // Create a new employee with a unique id
  employees.push(newEmployee); // Add the new employee to the employees array
  return newEmployee; // Return the newly created employee
};

/**
 * Retrieves all employees from the list.
 * 
 * @returns {Employee[]} An array containing all employees.
 * 
 * @example
 * // Get all employees
 * const allEmployees = getAllEmployees();
 * console.log(allEmployees); // [{ id: 1, name: "John Doe", position: "Developer" }, ...]
 */
export const getAllEmployees = (): Employee[] => {
  return employees; // Return the list of all employees
};

/**
 * Retrieves an employee by their unique id.
 * 
 * @param {number} id - The id of the employee to retrieve.
 * @returns {Employee | undefined} The employee with the specified id, or undefined if not found.
 * 
 * @example
 * // Get an employee by their id
 * const employee = getEmployeeById(1);
 * console.log(employee); // { id: 1, name: "John Doe", position: "Developer" }
 */
export const getEmployeeById = (id: number): Employee | undefined => {
  return employees.find(emp => emp.id === id); // Find and return the employee with the given id
};

/**
 * Updates an employee's data.
 * 
 * @param {number} id - The id of the employee to update.
 * @param {Partial<Employee>} updatedData - The new data to update the employee with.
 * @returns {Employee | undefined} The updated employee, or undefined if the employee with the specified id was not found.
 * 
 * @example
 * // Update an employee's position
 * const updatedEmployee = updateEmployee(1, { position: "Senior Developer" });
 * console.log(updatedEmployee); // { id: 1, name: "John Doe", position: "Senior Developer" }
 */
export const updateEmployee = (id: number, updatedData: Partial<Employee>): Employee | undefined => {
  const employeeIndex = employees.findIndex(emp => emp.id === id); // Find the index of the employee to update
  if (employeeIndex === -1) return undefined; // If no employee found with the id, return undefined
  
  const updatedEmployee = { ...employees[employeeIndex], ...updatedData }; // Merge the existing employee data with the updated data
  employees[employeeIndex] = updatedEmployee; // Update the employee in the array
  return updatedEmployee; // Return the updated employee
};

/**
 * Deletes an employee by their unique id.
 * 
 * @param {number} id - The id of the employee to delete.
 * @returns {boolean} Returns true if the employee was successfully deleted, or false if no employee with the specified id was found.
 * 
 * @example
 * // Delete an employee by their id
 * const success = deleteEmployee(1);
 * console.log(success); // true if employee was deleted, false otherwise
 */
export const deleteEmployee = (id: number): boolean => {
  const employeeIndex = employees.findIndex(emp => emp.id === id); // Find the index of the employee to delete
  if (employeeIndex === -1) return false; // If no employee found with the id, return false
  
  employees.splice(employeeIndex, 1); // Remove the employee from the array
  return true; // Return true indicating the employee was successfully deleted
};
