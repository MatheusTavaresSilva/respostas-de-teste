/*1. Implemente um função em JS que, utilizando a função obtemProximoCliente, carregue todos os CPF em um vetor e retorne o tal
sabendo que quando a função obtemProximoCliente retorna null, se puxou todos
*/

    function obterProximoClient() {
        return 12345
    }

    function obtemCliente() {
        var vetor = []

        if(obterProximoClient() !== null){
            vetor.push(obterProximoClient())
        } else {
            console.log("sem mais cliente")
        }
        
        return vetor
    }


/*2. implemente abaixo uma nova função em JS que, utilizando as funções obtemProximoCliente e ObtemProximoVistante, 
carregue todos os CPFs cadastrados que acessaram o website em um vetor e retorne esse vetor
*/

    function obtemCliente() {
        var vetor = [1]

        if(obterProximoClient() !== null){
            vetor.push(obterProximoClient())
        } else {
            console.log("sem mais cliente")
        }

        return vetor
    }

    function obtemProximoVisitante() {
        return 1
    }

    function obtemVisitantesCadastrados () {
        var clientesCadastrado = obtemCliente()
        var visitante = obtemProximoVisitante()

        var visitantesCadastrado = []

        if (obtemProximoVisitante() !== null){
            var VisitanteCadastrado = clientesCadastrado.filter(checador)

            if(VisitanteCadastrado !== undefined || null){
                visitantesCadastrado.push(visitanteCadastrado)
            }
        }

        function checador (value) {
            return visitante === value
            
        }
    }

    obtemVisitantesCadastrados()