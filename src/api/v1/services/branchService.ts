import { Branch } from '../interfaces/Branch';

let branches: Branch[] = []; // In-memory "database" for simplicity

/**
 * Creates a new branch and adds it to the list of branches.
 * 
 * @param {Branch} branch - The branch object containing details of the new branch.
 * @returns {Branch} The newly created branch with an assigned id.
 * 
 * @example
 * // Creates a new branch
 * const newBranch = createBranch({ name: "New Branch", location: "Uptown" });
 * console.log(newBranch); // { id: 1, name: "New Branch", location: "Uptown" }
 */
export const createBranch = (branch: Branch): Branch => {
  const newBranch = { ...branch, id: branches.length + 1 }; // Create a new branch with a unique id
  branches.push(newBranch); // Add the new branch to the branches array
  return newBranch; // Return the newly created branch
};

/**
 * Retrieves all branches from the list.
 * 
 * @returns {Branch[]} An array containing all the branches.
 * 
 * @example
 * // Get all branches
 * const allBranches = getAllBranches();
 * console.log(allBranches); // [{ id: 1, name: "New Branch", location: "Uptown" }, ...]
 */
export const getAllBranches = (): Branch[] => {
  return branches; // Return the list of all branches
};

/**
 * Retrieves a branch by its unique id.
 * 
 * @param {number} id - The id of the branch to retrieve.
 * @returns {Branch | undefined} The branch with the specified id, or undefined if not found.
 * 
 * @example
 * // Get a branch by its id
 * const branch = getBranchById(1);
 * console.log(branch); // { id: 1, name: "New Branch", location: "Uptown" }
 */
export const getBranchById = (id: number): Branch | undefined => {
  return branches.find(branch => branch.id === id); // Find and return the branch with the given id
};

/**
 * Updates a branch's data.
 * 
 * @param {number} id - The id of the branch to update.
 * @param {Partial<Branch>} updatedData - The new data to update the branch with.
 * @returns {Branch | undefined} The updated branch, or undefined if the branch with the specified id was not found.
 * 
 * @example
 * // Update a branch's location
 * const updatedBranch = updateBranch(1, { location: "Downtown" });
 * console.log(updatedBranch); // { id: 1, name: "New Branch", location: "Downtown" }
 */
export const updateBranch = (id: number, updatedData: Partial<Branch>): Branch | undefined => {
  const branchIndex = branches.findIndex(branch => branch.id === id); // Find the index of the branch to update
  if (branchIndex === -1) return undefined; // If no branch found with the id, return undefined
  
  const updatedBranch = { ...branches[branchIndex], ...updatedData }; // Merge the existing branch data with the updated data
  branches[branchIndex] = updatedBranch; // Update the branch in the array
  return updatedBranch; // Return the updated branch
};

/**
 * Deletes a branch by its unique id.
 * 
 * @param {number} id - The id of the branch to delete.
 * @returns {boolean} Returns true if the branch was successfully deleted, or false if no branch with the specified id was found.
 * 
 * @example
 * // Delete a branch by its id
 * const success = deleteBranch(1);
 * console.log(success); // true if branch was deleted, false otherwise
 */
export const deleteBranch = (id: number): boolean => {
  const branchIndex = branches.findIndex(branch => branch.id === id); // Find the index of the branch to delete
  if (branchIndex === -1) return false; // If no branch found with the id, return false
  
  branches.splice(branchIndex, 1); // Remove the branch from the array
  return true; // Return true indicating the branch was successfully deleted
};

