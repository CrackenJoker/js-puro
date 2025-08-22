const produtos = [
  { nome: "Teclado", preco: 5000 },
  { nome: "Rato", preco: 5000 },
  { nome: "Monitor", preco: 250000 }
];
// Usa map para adicionar uma propriedade desconto de 10% em cada produto
function mostrarDesconto(){
    const produtosComDesconto = produtos.map(function(produto){
        produto.desconto = produto.preco * 0.1
        produto.precoFinal = produto.preco - produto.desconto
        return produto
    })

    const listaProdutos = produtosComDesconto.map(function(produto){
        return `
        <tr>
            <td>${produto.nome}</td>
            <td>${(produto.preco/100).toFixed(2)}€</td>
            <td>${(produto.desconto/100).toFixed(2)}€</td>
            <td>${(produto.precoFinal/100).toFixed(2)}€</td>
        </tr>
    `;
    })
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `${listaProdutos.join("")}`;
}

function limparTabela() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}