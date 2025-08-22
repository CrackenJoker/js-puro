const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function mostrar(){
    const pares = numeros.filter((n)=>n%2===0);
    const numero = pares.map((n)=>`<li>${n}</li>`)
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<ul>${numero.join("")}</ul>`;
}

function limpar(){
    const impares = numeros.filter((n)=>n%2!==0);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}