// Programa para calcular o alcance horizontal de um projétil
// Fórmulas:
// xmax = (v0^2 * Math.sin(2 * ângulo)) / gravidade
// v0 = Math.sqrt((2 * forçaElastica * larguraDoCano) / massa)

// Constantes
const gravidade = 9.8; // m/s²
const larguraDoCano = 0.06; // metros (6 cm)
const constanteElastica = 10; // N/m

// Função para converter graus para radianos
function grausParaRadianos(graus) {
    return graus * (Math.PI / 180);
}

// Função para calcular a força elástica
function calcularForcaElastica(deformacao) {
    return constanteElastica * deformacao;
}

// Função para calcular a velocidade inicial (v0)
function calcularVelocidadeInicial(forcaElastica, massa) {
    return Math.sqrt((2 * forcaElastica * larguraDoCano) / massa);
}

// Função para calcular o alcance horizontal (xmax)
function calcularAlcanceHorizontal(velocidadeInicial, angulo) {
    const anguloRad = grausParaRadianos(angulo);
    return (Math.pow(velocidadeInicial, 2) * Math.sin(2 * anguloRad)) / gravidade;
}

// Função principal para obter os inputs do usuário e calcular o alcance
function calcular() {
    const angulo = parseFloat(prompt('Digite o ângulo de lançamento (em graus):'));
    const deformacao = parseFloat(prompt('Digite o valor da deformação da mola (em metros):'));
    const massa = parseFloat(prompt('Digite a massa do projétil (em kg):'));

    const forcaElastica = calcularForcaElastica(deformacao);
    const velocidadeInicial = calcularVelocidadeInicial(forcaElastica, massa);
    const alcanceHorizontal = calcularAlcanceHorizontal(velocidadeInicial, angulo);

    alert(`O alcance horizontal do projétil é: ${alcanceHorizontal.toFixed(2)} metros`);
}

// Chama a função calcular
calcular();
