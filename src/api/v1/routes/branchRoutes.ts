import express from 'express';
import { createBranch, getAllBranches, getBranchById, updateBranch, deleteBranch } from '../controllers/branchController';

const router = express.Router();

router.post('/', createBranch); // Create Branch
router.get('/', getAllBranches); // Get all Branches
router.get('/:id', getBranchById); // Get Branch by ID
router.put('/:id', updateBranch); // Update Branch
router.delete('/:id', deleteBranch); // Delete Branch

export default router;
