import { Request, Response } from 'express';
import * as branchService from '../services/branchService';
import { Branch } from '../interfaces/Branch';

export const createBranch = async (req: Request, res: Response) => {
  try {
    const branch: Branch = req.body;
    const newBranch = await branchService.createBranch(branch);
    res.status(201).json(newBranch); // Respond with the created branch
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllBranches = async (req: Request, res: Response) => {
  try {
    const branches = await branchService.getAllBranches();
    res.status(200).json(branches); // Respond with the list of branches
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBranchById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const branch = await branchService.getBranchById(Number(id));
    if (!branch) {
      return res.status(404).json({ message: 'Branch not found' });
    }
    res.status(200).json(branch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBranch = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedBranch = await branchService.updateBranch(Number(id), updatedData);
    if (!updatedBranch) {
      return res.status(404).json({ message: 'Branch not found' });
    }
    res.status(200).json(updatedBranch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBranch = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await branchService.deleteBranch(Number(id));
    if (!deleted) {
      return res.status(404).json({ message: 'Branch not found' });
    }
    res.status(200).json({ message: 'Branch deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
