//Arrow function

const soma = (a, b) => a + b;
console.log(soma(2,3))

//Lembrete: caso Arrow function tenha um corpo, o return tem q ser explícito
const sub = (x,y) =>{
    return x - y;
}
console.log(sub(10,3))

//Arrow function (this)
//this em arrow function é associado ao local em que a funçao foi escrita
const lexico1 = ()=>console.log(this === exports)

lexico1()

//parametro default
function log(texto = 'Node'){
    console.log(texto)
}
log()
log(undefined) //imprime o valor padrão
log(null) //imprime null

//operador rest(...) - operador que agrupa vários parâmetros passados em uma função em um array
function total(...numeros){
    let total = 0;
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))

//Object.values(retorna valores de um objeto)/Object.entries(retorna arrays chave valor de um objeto)
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

//melhoria notação literal objeto
const nome = 'Ana';
//const pessoa = {nome: nome, ola: function(){}} //antes EMCMA 2015
const pessoa = {nome,
ola(){
   return 'Olá ' + nome
}} //pos ACMA 2015
console.log(pessoa)
console.log(pessoa.ola())

//class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au au'
    }
}
console.log(new Cachorro().falar())