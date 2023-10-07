// essa é um tentativa de recriação do jogo de advinhar o número
// a ideia não é ter decorado o código mas ter entendido a lógica e poder replicar o que foi feito

let numeroSecreto = 5;

//aqui são as primeiras mensagens que o usuário receberá e por onde ele começará interagir com o jogo
alert("Bem vindo ao jogo do número secreto!");

let chute

while (chute != numeroSecreto) {
    chute = prompt("Escreva aqui o seu palpite:");
    if (chute == numeroSecreto) {
        alert(`Parabéns! Você acaba de acertar o número secreto ${numeroSecreto}.`);
        } else {
            if(chute < numeroSecreto) {
                alert(`O número secreto é maior que o número ${chute}.`);
            } else {
                alert(`O número secreto é menor que o número ${chute}.`);
            }
    }
}



