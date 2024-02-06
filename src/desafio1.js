let nome = "DiamondHammer";
let xp = 9002;
let nivel = "";


// Primeira forma

if(xp <= 1000) {
    nivel = "Ferro";
}else if(xp > 1000 && xp <= 2000) {
    nivel = "Bronze";
}else if(xp > 2000 && xp <= 5000) {
    nivel = "Prata";
}else if(xp > 5000 && xp <= 7000) {
    nivel = "Ouro";
}else if(xp > 7000 && xp <= 8000) {
    nivel = "Platina";
}else if(xp > 8000 && xp <= 9000) {
    nivel = "Ascendente";
}else if(xp > 9001 && xp <= 10000) {
    nivel = "Imortal";
}else {
    nivel = "Radiente";
}


// Segunda forma

// switch(true) {
//     case xp < 1001:
//     nivel = "Ferro";
//     break;

//     case xp >= 1001 && xp <= 2000:
//     nivel = "Bronze";
//     break;

//     case xp >= 2001 && xp <= 5000:
//     nivel = "Prata";
//     break;

//     case xp >= 5001 && xp <= 7000:
//     nivel = "Ouro";
//     break;

//     case xp >= 7001 && xp <= 8000:
//     nivel = "Platina";
//     break;

//     case xp >= 8001 && xp <= 9000:
//     nivel = "Ascendente";
//     break;

//     case xp >= 9001 && xp <= 10000:
//     nivel = "Imortal";
//     break;

//     default:
//     nivel = "Radiante";
// }


console.log(`O herói de nome ${nome} está no nível de ${nivel}.`);

