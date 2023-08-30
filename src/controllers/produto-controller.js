 const repository = require("../repositories/produto-repository")



 exports.get = async (req, res, next) => {
     const data = await repository.get();
     res.status(200).send(data);
 }

 exports.post = async (req, res, next) => {
     await repository.create(req.body)
     res.status(200).send("Criado com sucesso!")
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
     res.status(200).send("Atualizado com sucesso");
 }

 exports.delete = async (req, res, next) => {
     const id = req.params.id;
     await repository.delete(id);
     res.status(200).send("o item de id:  Deletado com sucesso!");
 }