import express from "express";
import {getFeedPosts, getUserPosts, likePost} from '../controllers/posts.js';
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

// Read
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDaTE
router.patch("/:id/like", verifyToken, likePost);

export default router;
