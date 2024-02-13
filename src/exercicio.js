// 1.Escreva uma função em JavaScript que mostre na tela a mensagem “Bom dia, Mundo!!!”.

// function mostraMsg(){
//     console.log("Bom dia, Mundo!!!");
// }

// mostraMsg();

// 2.Escreva uma função que retorne o cubo de um número fornecido pelo usuário.

// function retornaCubo(numeroAoCubo){
//     let calculoCubo = numeroAoCubo * numeroAoCubo * numeroAoCubo;
//     return console.log(calculoCubo);
// }

// retornaCubo(2);

// 3.Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).

// function convertaFToC(grauEmF){
//     calculo = (grauEmF - 32) / 1.8;
//     return console.log(`A temperatura de ${grauEmF}ºF convertida para Celsius é ${calculo}ºC`);
// }

// convertaFToC(96.8);

// 4. Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

// function areaTriangulo(valorBase, valorAltura){
//     calculo = (valorBase * valorAltura) / 2
//     return console.log(`A área do triângulo é ${calculo}`)
// }

// areaTriangulo(8, 6);

// 5. Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).

// function contaVogais(texto) {
//     var cont = 0;
//     texto=texto.toLowerCase();
//     for(var i=0; i<texto.length; i++){
//         if(texto.charAt(i)=="a"||texto.charAt(i)=="e"||texto.charAt(i)=="i"||texto.charAt(i)=="o"||texto.charAt(i)=="u"){
//             cont++; //Incrementa a contagem de vogais
//         }
//     }
//     return cont;
// }

// contaVogais("manual");

// 6. Tarefa: Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração o tipo de item.

// Entrada
// Peça ao usuário para digitar o tipo do item mágico que deseja criar, o dano e a resistência

// Saída
// Imprima o tipo do item, o dano, a resistência e o dano em combate.

// Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado. Quando o tipo do item for igual a 'arma' deve-se multiplicar o dano por dois this.dano * 2 e quando não for arma, é retornado no dano this.dano.

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Entrada	Saída
// Espada
// 200
// 300	Tipo: Espada
// Dano: 200
// Resistencia: 300
// Dano em combate: 200
// Cajado
// 600
// 800	Tipo: Cajado
// Dano: 600
// Resistencia: 800
// Dano em combate: 600
// Arco
// 900
// 500	Tipo: Arco
// Dano: 900
// Resistencia: 500
// Dano em combate: 900


// //Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// //- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// //- "print": imprime um texto de saída (output), pulando linha.

// // Definição da classe ItemMagico
// class ItemMagico {
//     //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
//       constructor(  ) {
    
    
//       }
    
//       calcularDano() {
//         return this.tipo === 'arma' ? this.dano * 2 : this.dano;
//       }
//     }
    
//     // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
//     const tipoItem = gets();
//     const danoItem = parseInt(gets());
//     const resistenciaItem = parseInt(gets());
    
//     //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
    
//     // TODO: Imprima os atributos do item personalizado
//     print("Tipo: " + );
//     print("Dano: " + );
//     print("Resistencia: " + itemPersonalizado.resistencia);
    
//     // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
//     const danoTotal = itemPersonalizado.calcularDano();
//     print("Dano em combate: " + danoTotal);



// RESOLVIDO:

// //Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// //- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// //- "print": imprime um texto de saída (output), pulando linha.

// // Definição da classe ItemMagico
// class ItemMagico {
//     //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
//       constructor( tipo, dano, resistencia) {
//         this.tipo = tipo;
//         this.dano = dano;
//         this.resistencia = resistencia;
//       }
    
//       calcularDano() {
//         return this.tipo === 'arma' ? this.dano * 2 : this.dano;
//       }
//     }
    
//     // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
//     const tipoItem = gets("Digite o tipo do item mágico:");
//     const danoItem = parseInt(gets("Digite o dano do item:"));
//     const resistenciaItem = parseInt(gets("Digite a resistência do item:"));
    
//     //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
//     const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);
    
//     // TODO: Imprima os atributos do item personalizado
//     print("Tipo: " + itemPersonalizado.tipo);
//     print("Dano: " + itemPersonalizado.dano);
//     print("Resistencia: " + itemPersonalizado.resistencia);
    
//     // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
//     const danoTotal = itemPersonalizado.calcularDano();
//     print("Dano em combate: " + danoTotal);

// TESTANDO PARA VER SE IGNOROU O ARQUIVO