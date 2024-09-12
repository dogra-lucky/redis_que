const express= require("express")
const productsController = require("../controllers/productsController")

const router = express.Router()

router.post("/create",productsController.create)
router.put("/:id",productsController.update)
router.get("/:id",productsController.get)
router.post("/category",productsController.createCategory)
router.post("/sub-category",productsController.createSubCategory)



module.exports= router
