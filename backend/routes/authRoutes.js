const router=require('express').Router();
const  { LoginValidation,SignupValidation } =require('../middleware/authMiddleware.js')
const {Login,Signup} =require('../controllers/authController.js')

router.post("/Login",LoginValidation,Login);
router.post("/Signup",SignupValidation,Signup);

module.exports= router;
