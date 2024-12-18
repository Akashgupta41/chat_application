import express from "express";
import {signup,login,logout, updateProfile,checkAuth} from '../controllers/auth.cotroller.js';
import {protectRoute} from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/signup',signup); //checked
router.post('/login',login); //checked
router.post('/logout',protectRoute,logout); //checked
router.put('/update-profile',protectRoute,updateProfile); //
router.get('/profile',protectRoute,checkAuth);


export default router;
