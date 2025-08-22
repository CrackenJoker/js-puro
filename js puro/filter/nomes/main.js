async function filtrar() {
    try {
        let dados = await fetch("https://gist.githubusercontent.com/jonasruth/61bde1fcf0893bd35eea/raw/10ce80ddeec6b893b514c3537985072bbe9bb265/paises-gentilicos-google-maps.json");
        dados = await dados.json();

        // pega só os gentilicos (não nulos/vazios)
        let nomes = dados.map(pais => pais.gentilico).filter(nome => nome);

        // filtra pelo input digitado
        const input = document.getElementById("filtro").value.toLowerCase();
        let resultadoFiltrado = nomes.filter(nome =>
            nome.toLowerCase().includes(input)
        );

        // mostra na tela
        const resultado = document.getElementById("resultado");
        if (resultadoFiltrado.length > 0) {
            resultado.innerHTML = `<ul>${resultadoFiltrado.map(n => `<li>${n}</li>`).join("")}</ul>`;
        } else {
            resultado.innerHTML = "<p>Nenhum resultado encontrado!</p>";
        }

    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
}

function limpar(){
    document.getElementById("filtro").value = "";
    document.getElementById("resultado").innerHTML = "";
}
