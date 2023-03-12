let array = [3, 2, 1];
array.push(4);//Adiciona valores na última posição do Array
console.log(array);
console.log(`O número de indíces desse array é ${array.length}`);//length -> conta o número de indíces
console.log(array.sort());//sort -> coloca os valores do indices em ordem crescente

console.log(`O primeiro valor do array é: ${array[0]}`);
console.log(`O segundo valor do array é: ${array[1]}`);

//percorrendo array com 'for'
for (var pos = 0; pos < array.length; pos++){
    console.log(array[pos]);
}
//maneira mais simplificada
for (let pos in array){
    console.log(`Valor da posição é: ${array[pos]}`);
}

console.log(array.indexOf(3));//indexOf busca o valor dentro do array
