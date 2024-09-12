const sendEmail = require("../mail/sendMail")

const emailQueProcess = async(job,done)=>{
    try {
        const {name,email}= job.data.user

        await sendEmail({name,email})
        done()
        
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = emailQueProcess