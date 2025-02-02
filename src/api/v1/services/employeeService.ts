import { Employee } from '../interfaces/Employee';

let employees: Employee[] = []; // In-memory "database" for the sake of simplicity

export const createEmployee = (employee: Employee): Employee => {
  const newEmployee = { ...employee, id: employees.length + 1 };
  employees.push(newEmployee);
  return newEmployee;
};

export const getAllEmployees = (): Employee[] => {
  return employees;
};

export const getEmployeeById = (id: number): Employee | undefined => {
  return employees.find(emp => emp.id === id);
};

export const updateEmployee = (id: number, updatedData: Partial<Employee>): Employee | undefined => {
  const employeeIndex = employees.findIndex(emp => emp.id === id);
  if (employeeIndex === -1) return undefined;
  
  const updatedEmployee = { ...employees[employeeIndex], ...updatedData };
  employees[employeeIndex] = updatedEmployee;
  return updatedEmployee;
};

export const deleteEmployee = (id: number): boolean => {
  const employeeIndex = employees.findIndex(emp => emp.id === id);
  if (employeeIndex === -1) return false;
  
  employees.splice(employeeIndex, 1);
  return true;
};
