// Função para calcular o nível baseado no número de vitórias
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
    
    // Determina o nível baseado no saldo de vitórias
    let nivel;

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    } else {
        nivel = 'Desconhecido';
    }

    // Retorna o saldo de vitórias e o nível
    return { saldoVitorias, nivel };
}

// Testando a função com um exemplo
const vitorias = 97;
const derrotas = 05;

// Calcula o saldo de vitórias e o nível
const resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem final
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
