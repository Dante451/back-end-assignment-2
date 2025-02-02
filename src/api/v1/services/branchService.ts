import { Branch } from '../interfaces/Branch';

let branches: Branch[] = []; // In-memory "database" for simplicity

export const createBranch = (branch: Branch): Branch => {
  const newBranch = { ...branch, id: branches.length + 1 };
  branches.push(newBranch);
  return newBranch;
};

export const getAllBranches = (): Branch[] => {
  return branches;
};

export const getBranchById = (id: number): Branch | undefined => {
  return branches.find(branch => branch.id === id);
};

export const updateBranch = (id: number, updatedData: Partial<Branch>): Branch | undefined => {
  const branchIndex = branches.findIndex(branch => branch.id === id);
  if (branchIndex === -1) return undefined;
  
  const updatedBranch = { ...branches[branchIndex], ...updatedData };
  branches[branchIndex] = updatedBranch;
  return updatedBranch;
};

export const deleteBranch = (id: number): boolean => {
  const branchIndex = branches.findIndex(branch => branch.id === id);
  if (branchIndex === -1) return false;
  
  branches.splice(branchIndex, 1);
  return true;
};
