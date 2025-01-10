// Script para manipular o formulário //
            <script>
                document.addEventListener("DOMContentLoaded", () => {
                    // Constantes do sistema físico
                    const GRAVIDADE = 9.8; // Aceleração da gravidade em m/s²
                    const LARGURA_DO_CANO = 0.06; // Comprimento do cano em metros (6 cm)
                    const CONSTANTE_ELASTICA = 10; // Constante elástica da mola em N/m
        
                    function grausParaRadianos(graus) {
                        return graus * (Math.PI / 180);
                    }
        
                    function calcularForcaElastica(deformacao) {
                        return CONSTANTE_ELASTICA * deformacao;
                    }
        
                    function calcularVelocidadeInicial(forcaElastica, massa) {
                        return Math.sqrt((2 * forcaElastica * LARGURA_DO_CANO) / massa);
                    }
        
                    function calcularAlcanceHorizontal(velocidadeInicial, angulo) {
                        const anguloRad = grausParaRadianos(angulo);
                        return (Math.pow(velocidadeInicial, 2) * Math.sin(2 * anguloRad)) / GRAVIDADE;
                    }
        
                    function calcular() {
                        // Obtém valores do formulário
                        const angulo = parseFloat(document.getElementById('angulo').value);
                        const deformacao = parseFloat(document.getElementById('deformacao').value);
                        const massa = parseFloat(document.getElementById('massa').value);
        
                        // Verifica se todos os valores foram preenchidos
                        if (!angulo || !deformacao || !massa) {
                            document.getElementById('resultado').innerHTML =
                                "Por favor, preencha todos os campos do formulário.";
                            return;
                        }
        
                        // Verifica se os valores são válidos
                        if (angulo <= 0 || deformacao <= 0 || massa <= 0) {
                            document.getElementById('resultado').innerHTML =
                                "Os valores devem ser maiores que zero.";
                            return;
                        }
        
                        // Realiza os cálculos
                        const forcaElastica = calcularForcaElastica(deformacao);
                        const velocidadeInicial = calcularVelocidadeInicial(forcaElastica, massa);
                        const alcanceHorizontal = calcularAlcanceHorizontal(velocidadeInicial, angulo);
        
                        // Exibe o resultado
                        document.getElementById('resultado').innerHTML =
                            `O alcance horizontal do projétil é: <strong>${alcanceHorizontal.toFixed(2)}</strong> metros.`;
                    }
        
                    // Associa a função calcular ao botão
                    document.getElementById('calcularBotao').addEventListener("click", calcular);
                });
            </script>
