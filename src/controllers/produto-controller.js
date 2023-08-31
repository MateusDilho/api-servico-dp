 const repository = require("../repositories/produto-repository")

 const validationContract = require('.../util/validator') //pra poder fazer a validação precisa criar um require dela

//role = "manager"
 exports.get = async (req, res, next) => {
     const data = await repository.get();

     if (data == null)
         res.status(204).send()

     res.status(200).send(data);
 }

 //role = "manager, atendente", ex se tentar acessar o método get() receberia o erro 403 pq n tem o acesso liberado
 exports.post = async (req, res, next) => {
     let contract = new validationContract();
     contract.hasMinLen(req.body.nome, 4, 'O nome precisa de no mínimo 4 caracteres.')
     contract.hasMaxLen(req.body.nome, 20, 'O nome pode ter no máximo 20 caracteres.') //Função criada na classe validator.js

    try {
        if(!contract.isValid()){
            res.status(400).send({message: "Erro ao cadastrar as informações. Favor validar"});
            return;
        }

        await repository.create(req.body)
        res.status(201).send("Criado com sucesso!")
    } catch (e) {
        res.status(500).send({message: "Erro no servidor, favor contactar o administrador."})

    }


     
 }

 exports.getById = async (req, res, next) => {
     const id = req.params.id;
     await repository.getById(id);

     if (data == null)
         res.status(404).send()
     res.status(200).send(data)

 }

 exports.update = async (req, res, next) => {

     //http://localhost:3000/produto/IDHASH
     const id = req.params.id; //Na rota daremos o apelido deste id
     await repository.update(id, res.body);

     //Enviar um e-mail que sofreu uma alteração 
     
     res.status(200).send("Atualizado com sucesso");
 }

 exports.delete = async (req, res, next) => {
     const id = req.params.id;
     await repository.delete(id);
     res.status(200).send("o item de id:  Deletado com sucesso!");
 }