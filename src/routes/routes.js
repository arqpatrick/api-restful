const router = require('express').Router()

/* 
//* VERBOS HTTP
//* GET - obter dados
//* POST - enviar/receber dados
//* PUT - atualizar dados
//* DELETE - remover dados
*/

const ProductController = require('../controllers/products')

router.get('/products', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)

module.exports = router