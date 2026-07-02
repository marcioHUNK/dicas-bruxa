// pega TODOS os botões que abrem/fecham um card
const gatilhos = document.querySelectorAll(".card-gatilho");

gatilhos.forEach((gatilho) => {
  gatilho.addEventListener("click", () => {
    // o texto é o elemento "irmão" logo depois do botão, dentro do mesmo .card
    const texto = gatilho.nextElementSibling;

    // alterna a classe "aberto" -- se tem, tira; se não tem, coloca
    texto.classList.toggle("aberto");
  });
});