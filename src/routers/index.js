//primeiro ponto de acesso(rota)
const express = require('express');
const { response } = require('../app');

const router = new express.Router()

router.get('/', (req,res,next)=>{// response
    res.status(200).send({
        nome:'Mateus D.',
        info: 'minha primeira rota',
        versao: 1.0

    });
})

router.post('/', (req, res, next) => { //request
    console.log(req.body);
    //request requisição que estamos recebendo
    //response é  status
    const message = 'recebido com sucesso!';

    res.status(201).send(message);//status code Created!

})

router.put('/', (req, res, next) => {
    console.log(req.body);

    const message = 'recebido put!'

    res.status(200).send(message)
})
router.put('/', (req, res, next) => {
    console.log(req.body);

    const message = 'recebido put!'

    res.status(200).send(message)
})

module.exports = router