function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Executando promise...")
            resolve()
        }, tempo)
    })
}

//awayt só funciona com async
//sem o awayt, irá executar todas as funções ao mesmo tempo após o tempo passado como parametro
//com await, ira executar uma promise de cada vez, sem necessidade do then()
async function executar(){
    let valor = await retornarValorRapido()
    await esperarPor(3000)
    console.log('Async/Awayt ' + valor)
    await esperarPor(3000)
    console.log('Async/Awayt ' + valor)
    await esperarPor(3000)
    console.log('Async/Awayt ' + valor)
}

executar()

async function retornarValorRapido(){
    return 20;
}

