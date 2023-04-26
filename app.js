require('dotenv').config()
const express = require('express')
const{ requestRouter } = require('./src/routes/request.router')
const app = express()
const port = Number(process.env.PORT) || 8080

app.use(express.json());

app.use('/api/v1/joke', requestRouter)

app.use((err, req, res, next) =>{
    return res.status(err.status || 500).json({
        status: 'failed',
        message: err.message
    })
})

app.listen(port, ()=> console.log(`Server is listening on PORT: ${port}`))
