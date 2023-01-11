const router = require('express').Router()
const axios = require('axios')

router.get('/', async (req, res) => {
    try {
        const username = req.query.username
        const users = await axios.get(`https://api.github.com/users/${username}`)
        
        res.status(200).json(users.data)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// router.get('/repo', async (req, res) => {
    
//     try {
//         const result = await axios.get(`https://api.github.com/users/${req.query.username}/repos`)

//         // console.log(result)

//         res.status(200).json(result)
//     }
//     catch (err) {
//         res.status(500).json(err)
//     }
// })

module.exports = router