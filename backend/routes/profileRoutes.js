const router=require('express').Router();
const { getTeam } =require('../controllers/profileController.js')

router.get('/getTeam/:userId',getTeam);

module.exports=router;
