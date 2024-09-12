const User = require("../models/users")

const Queue= require("bull")

const sendUserMail= require("../mail/sendMail")

const emailQueue= new Queue("mailQueue",{
    redis:{
        port:process.env.REDIS_PORT,
        host:process.env.REDIS_URI
    }
})


exports.create= async(req,res)=>{
    try {
        const {name,email}= req.body
        const user = await User.create({
            name,email
        })

        sendUserMail({name,email})
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}


exports.sendEmailToUsers= async(req,res)=>{
    try {

        const users= await User.find()
        users.forEach((user,index)=>{
            emailQueue.add({user},{attempts:1,delay:2000}).then(()=>{
                if (index+1==users.length) {
                    res.json({
                        message:"all users added to queue"
                    })
                }
            })
        })
        
    } catch (error) {
        console.log(error)

        res.status(400).json(error)
        
    }
}