import { Request, Response } from 'express';
import * as branchService from '../services/branchService';
import { Branch } from '../interfaces/branch';

/**
 * Creates a new branch and responds with the created branch.
 * 
 * @async
 * @param {Request} req - The request object containing the branch data in `req.body`.
 * @param {Response} res - The response object used to send the status and the created branch data.
 * @returns {Promise<void>} A Promise that resolves when the branch is created and the response is sent.
 * 
 * @throws {Error} If there is an error during branch creation, responds with a 400 status and the error message.
 * 
 * @example
 * // POST /branches
 * // req.body = { name: "Branch A", location: "Downtown" }
 * // res.status(201).json({ id: 1, name: "Branch A", location: "Downtown" })
 */
export const createBranch = async (req: Request, res: Response) => {
  try {
    const branch: Branch = req.body; // Get the branch data from the request body
    const newBranch = await branchService.createBranch(branch); // Call the service to create a new branch
    res.status(201).json(newBranch); // Respond with the created branch
  } catch (error) {
    res.status(400).json({ message: (error as Error).message }); // Respond with error message if creation fails
  }
};

/**
 * Retrieves all branches and responds with the list of branches.
 * 
 * @async
 * @param {Request} req - The request object.
 * @param {Response} res - The response object used to send the status and list of branches.
 * @returns {Promise<void>} A Promise that resolves when the list of branches is retrieved and the response is sent.
 * 
 * @throws {Error} If there is an error retrieving branches, responds with a 400 status and the error message.
 * 
 * @example
 * // GET /branches
 * // res.status(200).json([{ id: 1, name: "Branch A", location: "Uptown" }, ...])
 */
export const getAllBranches = async (req: Request, res: Response) => {
  try {
    const branches = await branchService.getAllBranches(); // Call the service to retrieve all branches
    res.status(200).json(branches); // Respond with the list of branches
  } catch (error) {
    res.status(400).json({ message: (error as Error).message }); // Respond with error message if fetching fails
  }
};

/**
 * Retrieves a specific branch by its unique id and responds with the branch's data.
 * 
 * @async
 * @param {Request} req - The request object containing the branch id in `req.params`.
 * @param {Response} res - The response object used to send the status and branch data.
 * @returns {Promise<void>} A Promise that resolves when the branch is found and the response is sent.
 * 
 * @throws {Error} If there is an error retrieving the branch, responds with a 400 status and the error message.
 * 
 * @example
 * // GET /branches/:id
 * // req.params.id = 1
 * // res.status(200).json({ id: 1, name: "Branch A", location: "Uptown" })
 * // If not found, res.status(404).json({ message: "Branch not found" })
 */
export const getBranchById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Get the branch id from the request parameters
    const branch = await branchService.getBranchById(Number(id)); // Call the service to get the branch by id
    if (!branch) {
      res.status(404).json({ message: 'Branch not found' }); // If the branch is not found, respond with 404
    }
    res.status(200).json(branch); // Respond with the branch data if found
  } catch (error) {
    res.status(400).json({ message: (error as Error).message }); // Respond with error message if fetching fails
  }
};

/**
 * Updates the data of a specific branch and responds with the updated branch's data.
 * 
 * @async
 * @param {Request} req - The request object containing the branch id in `req.params` and updated data in `req.body`.
 * @param {Response} res - The response object used to send the status and updated branch data.
 * @returns {Promise<void>} A Promise that resolves when the branch is updated and the response is sent.
 * 
 * @throws {Error} If there is an error updating the branch, responds with a 400 status and the error message.
 * 
 * @example
 * // PUT /branches/:id
 * // req.params.id = 1
 * // req.body = { location: "Downtown" }
 * // res.status(200).json({ id: 1, name: "Branch A", location: "Downtown" })
 * // If not found, res.status(404).json({ message: "Branch not found" })
 */
export const updateBranch = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Get the branch id from the request parameters
    const updatedData = req.body; // Get the updated data from the request body
    const updatedBranch = await branchService.updateBranch(Number(id), updatedData); // Call the service to update the branch
    if (!updatedBranch) {
      res.status(404).json({ message: 'Branch not found' }); // If not found, respond with 404
    }
    res.status(200).json(updatedBranch); // Respond with the updated branch data
  } catch (error) {
    res.status(400).json({ message: (error as Error).message }); // Respond with error message if updating fails
  }
};

/**
 * Deletes a branch by its unique id and responds with a success message.
 * 
 * @async
 * @param {Request} req - The request object containing the branch id in `req.params`.
 * @param {Response} res - The response object used to send the status and deletion message.
 * @returns {Promise<void>} A Promise that resolves when the branch is deleted and the response is sent.
 * 
 * @throws {Error} If there is an error deleting the branch, responds with a 400 status and the error message.
 * 
 * @example
 * // DELETE /branches/:id
 * // req.params.id = 1
 * // res.status(200).json({ message: "Branch deleted successfully" })
 * // If not found, res.status(404).json({ message: "Branch not found" })
 */
export const deleteBranch = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Get the branch id from the request parameters
    const deleted = await branchService.deleteBranch(Number(id)); // Call the service to delete the branch
    if (!deleted) {
      res.status(404).json({ message: 'Branch not found' }); // If not found, respond with 404
    }
    res.status(200).json({ message: 'Branch deleted successfully' }); // Respond with success message
  } catch (error) {
    res.status(400).json({ message: (error as Error).message }); // Respond with error message if deletion fails
  }
};
