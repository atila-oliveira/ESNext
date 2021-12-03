//set é um conjunto. Estrutura não indexada(sem índices) que não aceita repetições
const times = new Set()
times.add('Vasco')
times.add('Flamengo')
times.add('Palmeiras')
times.add('Vasco')

console.log(times) //Vasco aparecerá uma vez pois é repetido
console.log(times.size)//retornará 3
console.log(times.has('Flamengo'))//retornará true
console.log(times.delete('Flamengo'))//retornará true se encontrar o elemento e o deletará
console.log(times.has('Flamengo'))//retornará false pois foi deletado 

//outra forma de criar um set

const nomes = ['ana', 'lucas', 'julia', 'ana']
const nomesSet = new Set(nomes)
console.log(nomesSet)