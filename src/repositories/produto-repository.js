const mongoose = require('mongoose')
const Produto = mongoose.model('Produto') //pega o objeto da Model

exports.get = async () => { //pega todas colecoes ativas da base
    const result = await Produto.find({ativo:true}) //aguarda o banco responder
    return result;
}

exports.create = async(data) => {
    let produto = Produto(data) //recebe o json e cria o modelo
    await produto.save();
}

exports.delete = async (id) => {
    await Produto.findByIdAndUpdate(
        id, {
            $set: {
                ativo: false
            }
        }
    )
}

exports.getById = async (id) => {
    const result = await Produto.findOne({_id: id},
        "_id nome preco ativo"
    );

    return result;
}


exports.update = async (id, data) => {
    await Produto.findByIdAndUpdate(id, {
        $set: {
            nome: data.nome,
            preco: data.preco,
            ativo: data.ativo
        }
    })
}