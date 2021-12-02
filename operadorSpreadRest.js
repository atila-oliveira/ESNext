//operador ... rest (juntar)/spread (espalhar)

const funcionario = {
    nome: 'Maria',
    salario: 12340.90
}
const clone = {...funcionario} //espalha todos os atributos de funcionario no obj clone
console.log(clone)


const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]

console.log(grupoFinal)