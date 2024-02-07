// Const para o limite de cada elo
const limiteFerro = 10;
const limiteBronze = 20;
const limitePrata = 50;
const limiteOuro = 80;
const limiteDiamante = 90;
const limiteLendario = 100;

// Função que calcula o saldo de vitórias
function calcularSaldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;   
}

// Função para ranquear o herói com base no saldo de vitórias
function Rankear(){
    let saldoVitorias = calcularSaldoVitorias(70, 9);

    let nivel;

    // Determina o nível com base no saldo de vitórias
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

    // Exibe o resultado
    console.log(`O herói tem de saldo de vitórias ${saldoVitorias} e está no nível de ${nivel}.`)
}

// Chamada da função para ranquear o herói
Rankear();
