const usuarios = [
  { nome: "Carlos", idade: 17 },
  { nome: "Maria", idade: 20 },
  { nome: "João", idade: 15 },
  { nome: "Fernanda", idade: 22 },
];

function filtrar(){
    const input = document.getElementById("filtro").value;
    const resultado = document.getElementById("resultado");

    // filtra os usuários com idade maior ou igual ao input
    const resultadoFiltrado = usuarios.filter(usuario => usuario.idade >= input);

    // mostra na tela
    if (resultadoFiltrado.length > 0) {
        resultado.innerHTML = `<ul>${resultadoFiltrado.map(u => `<li>${u.nome} - ${u.idade} anos</li>`).join("")}</ul>`;
    } else {
        resultado.innerHTML = "<p>Nenhum usuário encontrado!</p>";
    }
}