const express= require("express")
const userController = require("../controllers/userController")

const router = express.Router()

router.post("/create",userController.create)
router.post("/sendEmail",userController.sendEmailToUsers)



module.exports= router