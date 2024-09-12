const express= require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const PORT= process.env.PORT|| 6000
const morgan = require("morgan")

require("./mail/transporter")
require("./processes/index")
const app  = express()
app.use(express.json())
app.use(morgan("tiny"))

mongoose.connect(process.env.MONGODB_URI).then(()=>{console.log("mongodb connected")}).catch((err)=>{
    console.log("error connecting mongodb",err)
})


app.use("/users",require("./routes/user"))
app.use("/products",require("./routes/products"))

app.listen(PORT,()=>{console.log("app is running at port",PORT)})