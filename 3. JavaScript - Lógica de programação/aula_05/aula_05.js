/*
if else
if e else
*/

// O else if ----- posso ter varias agora else -----apenas um que vai ficar por ultimo

const hora = 50;  // aqui fica pra colocar a hora se colocar um numero qeu não seja a hora vai apenas aparecer OLA
if (hora >= 0 && hora <=11) {
    console.log("bom dia");
} else if (hora >= 12 && hora <= 17){
    console.log("Boa tarde");
} else if(hora >= 18 && hora <= 23){
    console.log("boa noite");
} else{
    console.log("OLA")
}