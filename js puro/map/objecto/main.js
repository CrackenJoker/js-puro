const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 25 },
  { nome: "Maria", idade: 30 }
];

function mostrar(){
    const nomes = pessoas.map(item=>item.nome)
    const idades = pessoas.map(item=>item.idade)
    const listaNomes = nomes.map(nome => `<li>Nome:${nome}</li>`);
    const listaIdades = idades.map(idade => `<li>Idade:${idade}</li>`);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<ul>${listaNomes.join("")} - ${listaIdades.join("")}</ul>`;
}

function limpar() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}