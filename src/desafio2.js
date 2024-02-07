const limiteFerro = 10;
const limiteBronze = 20;
const limitePrata = 50;
const limiteOuro = 80;
const limiteDiamante = 90;
const limiteLendario = 100;


function calcularSaldoVitorias(vitorias, derrotas) {
    return saldoVitorias = vitorias - derrotas;
    
}

function Rankear(){
    let saldoVitorias = calcularSaldoVitorias(70, 9);

    let nivel;

    if (saldoVitorias <= limiteFerro) {
        nivel = "Ferro";
    } else if (saldoVitorias <= limiteBronze) {
        nivel = "Bronze";
    } else if (saldoVitorias <= limitePrata) {
        nivel = "Prata";
    } else if (saldoVitorias <= limiteOuro) {
        nivel = "Ouro";
    } else if (saldoVitorias <= limiteDiamante) {
        nivel = "Diamante";
    } else if (saldoVitorias <= limiteLendario) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log(`O herói tem de saldo de vitórias ${saldoVitorias} e está no nível de ${nivel}.`)
}

Rankear();
