//promise é usado para processamento assincrono
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

//then acessa uma promise
//falarDepoisDe(2,'teste').then(frase => console.log(frase))
//falarDepoisDe(3, 'Que legal!!').then(frase => frase.concat('?!?')).then(outraFrase => console.log(outraFrase))

function falarDepoisDe2(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
    })
}
falarDepoisDe2(2, 'teste reject').then(frase => console.log(frase)).catch(e => console.log(e))

function falarDepoisDe3(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
        if(!frase){
            reject('Error Não foi enviada a frase!!')
        }
    })
}
 
falarDepoisDe3(2, 'Que legal mais uma vez!!!')
    .then(frase => frase.concat('!!!'))
    .then(novaFrase => console.log(novaFrase))
    .catch(error => console.log(error)) 

falarDepoisDe3().then(frase => frase.concat('!!!'))
.then(novaFrase => console.log(novaFrase))
.catch(error => console.log(error))