const router=require('express').Router();
const { createTeam, getTeams }=require('../controllers/requestController.js')

router.post("/createteam",createTeam);
router.get("/getTeams",getTeams);

module.exports=router;