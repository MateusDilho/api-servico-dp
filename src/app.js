const express = require('express') //import do express
const app = express() //criar instancia do express
app.use(express.json()) 
const mongoose = require('mongoose')

mongoose.connect('mongodb://fiap:123456@localhost:27017/admin')

app.use(express.urlencoded({
    extended: true
})) 

//registro da model
require('./models/produto')

//Rotas mapeadas
const produtoRouter = require('./routers/produto-route')
//colocar a rota do index dentro do app
const index = require('./routers/index')

app.use('/', index) //exponha a rota inicial
app.use('/produto', produtoRouter) //cria a rota produto, e adiciona o resto das rotas mapeadas a url


module.exports = app; //exportando o app
