require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const allMovies = require('./allMovies')
const port = process.env.PORT || 3339

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(allMovies)
})

app.listen(port, () => {
    console.log(`Api está rodando na porta ${port}`);
})
