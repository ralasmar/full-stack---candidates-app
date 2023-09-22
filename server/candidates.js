const express = require('express')
const router = express.Router()

let candidates = []

router.get('/', (req, res) => {
    res.json({ candidates })
})

router.post('/', (req, res) => {
    const newCandidate = req.body;
    candidates.push(newCandidate)
    res.json({ message: 'Candidate added successfuly', candidate: newCandidate})
    console.log("SENT TO SERVER")
})

router.delete('/:id', (req, res) => {
    const deletedcandidate = req.params.id
    candidates = candidates.filter(candidate => candidate.id !== deletedcandidate)
    res.json({ message: 'candidate deleted successfully' })
    console.log("DELETED FROM SERVER AGAIN")
})

module.exports = router