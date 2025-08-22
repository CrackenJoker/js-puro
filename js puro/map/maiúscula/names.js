const nomes = ["joelson", "ana", "carlos"];
// Usa map para retornar todos os nomes em MAIÚSCULAS
function maiuscula() {
    const nomesMaiusculas = nomes.map(nome => nome.toUpperCase());
    const lista =nomesMaiusculas.map((nome => `<li>${nome}</li>`));
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<ul>${lista.join("")}</ul>`;
}

function limpar() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}