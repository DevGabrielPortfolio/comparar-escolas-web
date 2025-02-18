const resultado = document.getElementById('resultado');

document.getElementById('gerarRelatorio').addEventListener('click', () => {
    // Função auxiliar para capturar e converter valores
    const getValue = (id) => document.getElementById(id).value.trim();
    const getNumber = (id) => Number(getValue(id));

    const cod1 = getValue('codigo1'), cidade1 = getValue('cidade1'), ano1 = getNumber('anoConstrucao1'), cursos1 = getNumber('quantCursos1');
    const cod2 = getValue('codigo2'), cidade2 = getValue('cidade2'), ano2 = getNumber('anoConstrucao2'), cursos2 = getNumber('quantCursos2');

    if (![cod1, cidade1, cod2, cidade2].every(Boolean) || [ano1, cursos1, ano2, cursos2].some(isNaN)) {
        resultado.textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const anoAtual = new Date().getFullYear();
    const idade1 = anoAtual - ano1, idade2 = anoAtual - ano2;

    const [cidadeMaior, cidadeMenor, maiorCursos, menorCursos] = 
        cursos1 >= cursos2 ? [cidade1, cidade2, cursos1, cursos2] : [cidade2, cidade1, cursos2, cursos1];

    resultado.innerHTML = `
#Relatório Cadastro<br>

O código ${cod1} pertence à Escola SENAI de ${cidade1}.<br>
A escola foi construída em ${ano1} e tem ${idade1} anos.<br>
<br>
O código ${cod2} pertence à Escola SENAI de ${cidade2}.<br>
A escola foi construída em ${ano2} e tem ${idade2} anos.<br>
<br>
#Fim do Relatório Cadastro<br>
<br>
#Relatório de Cursos<br>
<br>
O SENAI de ${cidadeMenor} tem menos cursos que o SENAI de ${cidadeMaior}.<br>
${cidadeMaior}: ${maiorCursos} cursos vs ${cidadeMenor}: ${menorCursos} cursos.<br>
<br>
#Fim do Relatório de Cursos`;
});

document.getElementById('limparRelatorio').addEventListener('click', () => {
    ['codigo1', 'cidade1', 'anoConstrucao1', 'quantCursos1', 'codigo2', 'cidade2', 'anoConstrucao2', 'quantCursos2']
        .forEach(id => document.getElementById(id).value = "");
    resultado.textContent = "";
});
