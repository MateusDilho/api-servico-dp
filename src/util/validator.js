let errors = []

//td vez q chamar o método ele começar vazio
function validationContract() {
    errors = []
}

validationContract.prototype.isRequired = (value, message) => { //prototype método do js para criar uma função
    if(!value || value.leght <= 0)
        errors.push({message: message}) //cria o objeto message
}

validationContract.prototype.hasMinLen = (value, min, message) =>{ //hasMinLen é o nome da função
    if(!value || value.lenght < min)
        errors.push({message: message})
}

validationContract.prototype.hasMaxLen = (value, max, message) => {
    if(!value || value.lenght > max)
      errors.push({message: message})
}

validationContract.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = validationContract //Pra permitir que exporte esse JS, essa classe