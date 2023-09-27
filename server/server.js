const express = require('express')
const cors = require('cors')
const candidatesRouter = require('./candidates')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/candidates', candidatesRouter)

//testing server
app.get('/api', (req, res) => {
    res.json({ backendData: "Hello from server" })
})

app.post('/api/candidates', (req, res) => {
    res.json({candidates: req.body}) 
})


app.listen(8000, () => {
    console.log('server is running on port 8000...')
})