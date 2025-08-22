const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];
function calcular(){
    let resultado = document.getElementById("resultado");
    n = Number(document.getElementById("numero").value); 
    if (isNaN(n) || n===0) {
        resultado.innerHTML = "<p>Insira um número valido.</p>";
        return;
    }   
    const items = numbers.map(function(number){
        return `<li>${n} x ${number} = ${n*number}</li>`;
    });
    resultado.innerHTML = `<ul>${items.join("")}</ul>`;

}

function limpar(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    document.getElementById("numero").value = "";
}