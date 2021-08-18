# api-restful

1
```bash
mkdir api-restful
cd api-restful
npm init -y
git init
echo 'node_modules' > .gitignore
npm i --save-dev nodemon
npm i express mongoose
mkdir -p src/routes
touch src/routes/routes.js
touch src/server.js
code .
```

2
package.json
```json
{
  "name": "api-restful",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.12"
  },
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.13.7"
  }
}
```

3
src / server.js
```js
const express = require('express')
const path = require('path')

// const db = require('./database')
const routes = require('./routes/routes')

const app = express()

// conexão com DB
db.connect()

// habilitar server para receber dados json no corpo da requisição - postman
app.use(express.json())

// definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
```

4
src / routes / routes.js
```js
const router = require('express').Router()

router.get('/clientes', (req, res) => {

  res.send({
    ok: 123
  })
})

module.exports = router
```

5
```bash
git add.
git comment -m "estrutura inicial"
git remote add origin https://github.com/usuario_github/repositorio-criado.git
git push --set-upstream origin master
npm run dev
```
---

6
```bash
mkdir -p src/database
touch src/database/db.js


```
