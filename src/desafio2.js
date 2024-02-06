let vitorias = 70;
let derrotas = 9;

function sum(vitorias, derrotas){
    return vitorias - derrotas;
}


function saldoRankeds() {
    let saldoVitorias = sum(vitorias, derrotas);
    nivel = "";


    if(saldoVitorias <= 10) {
        nivel = "Ferro";
    }else if(saldoVitorias > 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    }else if(saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = "Prata";
    }else if(saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro";
    }else if(saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = "Diamante";
    }else if(saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = "Lendário";
    }else {
        nivel = "Imortal";
    }

    console.log(`O herói tem de saldo de vitórias ${saldoVitorias} está no nível de ${nivel}`)
}


saldoRankeds();

