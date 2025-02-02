export interface Employee {
    id?: number; // Optional because it's not provided when creating a new employee
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    branchId: number;
  }
  