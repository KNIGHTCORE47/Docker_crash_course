import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (requset, response) => {
    response.json({
        success: true,
        message: 'Hello World from Docker_Node'
    }).status(200)
})

app.listen(port, function () {
    console.log(`Server running on port http://localhost:${port}`)
})