const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')

const app = express()

dotenv.config()

app.use(cors())

app.use('/api/user', userRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})