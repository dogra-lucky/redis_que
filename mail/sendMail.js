const transporter= require("./transporter")

const sendEmail= async ({name,email})=>{
    try {
        const mailOptions = {
            from:"lucky@yopmail.com",
            to:email,
            subject:"message queue",
            html:"<h2>this is message queue mail</h2>"
        }

        await transporter.sendMail(mailOptions)
        
    } catch (error) {
        throw new Error()
    }
}

module.exports= sendEmail