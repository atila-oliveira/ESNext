const fs = require('fs')
const path = require('path')

function lerArquivo(path){
    return new Promise(resolve =>{
        fs.readFile(path, function(_, conteudo){
            resolve(conteudo.toString())

        })
        console.log('depois de ler...')
    })
}

const caminho = path.join(__dirname, 'dados.txt')
//console.log(lerArquivo(caminho))
lerArquivo(caminho)
//.then(conteudo => console.log(conteudo))
.then(conteudo => conteudo.split('\n'))
.then(linha => console.log(linha[1]))