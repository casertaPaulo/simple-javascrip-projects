const nomes = [
    {nome: 'Paulo'},
    {nome: 'Cavalcante'},
    {nome: 'Atílio'}
 ] 

nomes.forEach((UmDosNomes, indice, arrayCompleto) => {
    console.log(UmDosNomes);
    console.log(indice);
    console.log(arrayCompleto);
})
 
 /*
 nomes.forEach(valorAtual => {
     console.log(valorAtual);
 })
 
 nomes.forEach(function (UmDosNomes, indice){
     console.log(`O nome ${UmDosNomes.nome} está na posição ${indice}`);
 })
 */
console.log('=============================');

const values = [1, 2, 3, 4, 5];
values.forEach((n) =>{
    if (n <= 4) {
        console.log(n);
    }else{
        console.log(n + ' ' + 'maior que 4');
    }
})