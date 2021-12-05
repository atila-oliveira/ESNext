//com promise...
const http = require('http')

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res =>{
            let resultado = '';
    
            res.on('data', dados =>{
                resultado += dados
            })
            res.on('end', ()=>{
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        } )
    })
}

//recurso do ES8
// Async/Await tem o objetivo de simplificar uso de promises
//é preciso marcar a função com async para usar await

let obterAlunos = async () => {
    const turmaA = await getTurma('A') //em vez de usar o metodo then(), await faz a mesma coisa
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA,turmaB,turmaC) //uma função async sempre retorna um objeto AsyncFunction

}

obterAlunos().then(alunos => alunos.map(a => a.nome)).then(nomes => console.log(nomes))