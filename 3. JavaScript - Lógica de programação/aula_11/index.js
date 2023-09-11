//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000
//const data = new Date(0 + tresHoras + umDia);
//console.log(data.toString());

const data = new Date(2021, 3, 12, 15, 14, 27); // o Mes no javaScript começa do zero exemplo janeiro é numero 0 e dezembro numero 11

console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Dia semana', data.getDay());

console.log(data.toString());