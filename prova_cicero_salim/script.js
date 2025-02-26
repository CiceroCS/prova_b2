function registrarAluno(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("As notas devem ser entre 0 e 10.");
        return;
    }

    const media = (nota1 + nota2) / 2;
    const situacao = media >= 5 ? "Aprovado" : "Reprovado";
    const linha = criarLinhaTabela(nome, matricula, nota1, nota2, media, situacao);
    adicionarLinhaTabela(linha);
    limparCamposFormulario();
}
function criarLinhaTabela(nome, matricula, nota1, nota2, media, situacao) {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${media.toFixed(2)}</td>
        <td>${situacao}</td>
    `;
    return linha;
}
function adicionarLinhaTabela(linha) {
    const tbody = document.querySelector('#tabela tbody');
    tbody.appendChild(linha);
}
function limparCamposFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
}
function excluirtabela() {
    const tbody = document.querySelector('#tabela tbody');
    tbody.innerHTML = '';
}
document.getElementById('formulario').addEventListener('submit', registrarAluno);
document.getElementById('excluirtabela').addEventListener('click', excluirtabela);