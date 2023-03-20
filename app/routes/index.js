import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshTokens.js";
 
const router = express.Router();
 
router.get('/', (req, res) => {
    res.json({ message: "Fetched" })
});

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
export default router;