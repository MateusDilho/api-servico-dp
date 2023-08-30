//CRIANDO UM SERVIÇO EM NODE 

//import http to node
const http = require('http')
//instacia o app configurado
const app = require('../src/app')

//expor a porta
const port = buscarPorta(process.env.PORT || '3000') //processo do node para passar a porta
//subir o server
const server = http.createServer(app) //método proprio do objeto/pacote http para instanciar o objeto



// console.log(server)



//pede pro servidor escutar a porta definida.
server.listen(port)
server.on('error', onError) //captura erros durante a execução doservidor
server.on('listen', onListening)

console.log('Api executada na porta: ' + port);



//FUNÇÕES----------------------------------------------------------------------------------------------


//função de tratamento do erro ON
function onError(error) {
    if (error.syscall !== 'listen') { //o listen é o retorno do servidor, quando funciona ele joga o liste, se der erro ele joga outra coisa e cai no if.
        throw error;
    }

    const bind = typeof port === 'string' //caso a função seja verdadeira
        ?
        'Pipe' + port //coloca o resultado verdadeiro
        :
        'Port' + port // coloca o resultado falso

    //outros erros padrões...
    switch (error.code) { //...estudar switch case
        case "EACCES":
            console.error(bind + 'required elevated privileges')
            process.exit(1)
            break;
        case "EADDRINUSE":
            console.log(bind + 'is already in use');
            process.exit(1)
            break;
        default:
            throw error;
    }
}

function onListening() { //traz informações para nos ajudar no debug, address é o endereço do servidor
    var addr = server.address();
    var bind = typeof addr === 'string' ? `pipe ${addr}` : `${addr.family}:${addr.port}`;
    debug('Listening on' + bind)
}

//cria o método da porta
function buscarPorta(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) { //se validar que é um inteiro retorne a porta
        return val
    } else if (port > 0) {
        return port;
    } else {
        return false;
    }

}