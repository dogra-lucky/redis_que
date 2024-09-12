const Queue = require("bull")
const path = require("path")
const emailQueue= new Queue("mailQueue",{
    redis:{
        port:process.env.REDIS_PORT,
        host:process.env.REDIS_URI
    }
})

emailQueue.process(path.join(__dirname,"emailQueue.js"))

emailQueue.on("completed",(job)=>{
    console.log(`completed job number ${job.id}`)
})