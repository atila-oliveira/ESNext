recebeValor = x => x

 let promise = new Promise(function(recebeValor){
     return recebeValor(3)
 })
 //let promise = new Promise(recebeValor => recebeValor(3))
 promise.then(v => console.log(v))