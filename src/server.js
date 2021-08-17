const express = require('express')
// const path = require('path')

// const db = require('./database')
// const routes = require('./routes')

const app = express()

// conexão com DB
// db.connect()

// habilitar server para recebr  dados via post (formulário)
app.use(express.urlencoded({ extended:true }))

// definindo as rotas
// app.use('/', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))