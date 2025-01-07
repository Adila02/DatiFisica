
//Seção Four//

document.addEventListener("DOMContentLoaded", () => {
    // Botão "Comece agora"
    const startNowButton = document.querySelector(".button.primary");
    startNowButton.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Mensagem de boas-vindas
        alert("Bem-vindo(a) ao DatiFísica! Você será redirecionado para criar sua conta.");
        
        // Redirecionar (substitua pela URL real futuramente)
        window.location.href = "https://example.com/registro";
    });

    // Botão "Saiba mais"
    const learnMoreButton = document.querySelector(".button:not(.primary)");
    learnMoreButton.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Mostrar informações adicionais
        alert("O DatiFísica é uma plataforma educacional inovadora que combina física e estatística para ajudar no aprendizado.");
        
        // Alternativamente, você pode abrir um modal ou redirecionar:
        // Exemplo de redirecionamento:
        // window.location.href = "https://example.com/saiba-mais";
    });
});



// código do formulario de contato (four) //

document.addEventListener("DOMContentLoaded", () => {
    // Capturar o botão de envio
    const submitButton = document.querySelector(".button.submit");

    // Evento de clique no botão de envio
    submitButton.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Capturar os valores dos campos
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validação simples
        if (!name || !email || !message) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Simular envio de dados
        console.log("Dados enviados:");
        console.log(`Nome: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Mensagem: ${message}`);

        // Feedback para o usuário
        alert("Mensagem enviada com sucesso!");
    });

    // Adicionar eventos nos ícones sociais
    const socialIcons = document.querySelectorAll(".icons a");
    socialIcons.forEach((icon) => {
        icon.addEventListener("click", (event) => {
            event.preventDefault(); // Impede redirecionamento
            alert(`Você clicou no ícone: ${icon.classList[1].replace('fa-', '')}`);
        });
    });
});


