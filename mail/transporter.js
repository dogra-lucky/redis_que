const nodemailer= require("nodemailer")

const transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASSWORD
    }
})

transporter.verify((error,success)=>{
    if (error) {
        console.log("error in smtp",error)
    }else{
        console.log("smtp server is running")
    }
})

module.exports= transporter