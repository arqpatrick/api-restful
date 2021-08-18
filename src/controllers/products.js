const ProductsModel = require('../models/products')

async function get(req, res) {
  const products = await ProductsModel.find()

  res.send(products)
}


async function post(req, res) {
  const {
    name,
    brand,
    price,
  } = req.body

  // console.log(req.body)

  const product = new ProductsModel({
    name,
    brand,
    price,
  })

  product.save()

  res.send({
    message: 'sucess'
  })
}

async function put(req, res) {
  const { id } = req.params // pegar o id para localizar o produto

 /*  
 const product = await ProductsModel.findOne({ _id: id }) // busca o _id do DB com o id pegou na API

  await product.updateOne(req.body) // ele pega todos os campos e atualiza apenas o que for modificado

  res.send({
    message: 'success', // mensagem de sucesso e retorno do produto
    product,
  }) 
  ! nesse caso ele grava no banco, mas o retorno do product não mostra atualizado, devido ao método product.updateOne
  */ 

  const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

  res.send({
    message: 'success',
    product,
  })

}

module.exports = {
  get,
  post,
  put,
}