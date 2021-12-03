const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)//nao funciona. retorna undefined
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function(){}, 'function'],
    [{}, 'Objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((vl,ch)=>{
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123)) //retorna true se houver o elemento no MAP
chavesVariadas.delete(123) //retorna true se encontrar o elemento que será deletado
console.log(chavesVariadas.has(123))//retorna false pois foi deletado não existindo mais no map
console.log(chavesVariadas.size)//retorna o tamanho do map

//chaves não podem ser repetidas. Se repetir, valerá a última
chavesVariadas.set('a', 'a')
chavesVariadas.set('a', 'b')
console.log(chavesVariadas)
//valores podem ser repetidos
chavesVariadas.set('b', 'c')
chavesVariadas.set('c', 'c')
console.log(chavesVariadas)