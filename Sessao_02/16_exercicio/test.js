/* 
Alex henrique tem 30 anos, pesa 65 kg
tem 1.75 de altura e eseu IMC e de 21*/

const nome = 'Alex';
const sobrenome = 'Henrique';
const idade = 30;
const peso = 65;
const altura = 1.75;
let imc;

imc = peso / (altura * altura);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC e de ${imc}`);