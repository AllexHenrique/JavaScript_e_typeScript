// const frutas = ['Pera', 'Maça', 'Uva'];


// for (let indice in frutas){
//     console.log(frutas[indice]);
// }

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Alex',
    sobrenome: 'Henrique',
    idade: '30'
};
for (let chaves in pessoa){
    console.log(chaves);
};

console.log(pessoa.nome);
console.log(pessoa['nome']);
