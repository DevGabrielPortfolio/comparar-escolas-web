const botaoCalcular = document.getElementById('gerarRelatorio');
const botaoLimpar = document.getElementById('limparRelatorio');

class Senai{
    codigo;
    cidade;
    anoConstrucao;
    qtdeCursos;

    constructor(codigo, cidade, anoConstrucao, qtdeCursos){
        this.cidade = cidade;
        this.codigo = codigo;
        this.anoConstrucao = anoConstrucao;
        this.idade = this.calcularIdade();
        this.qtdeCursos = qtdeCursos;
    }

    calcularIdade(){
        return new Date().getFullYear() - this.anoConstrucao;
    }

    dadosEscola() {
        return `Código: ${this.codigo}, Cidade: ${this.cidade}, Ano de Construção: ${this.anoConstrucao}, Idade: ${this.idade} anos, Cursos: ${this.qtdeCursos}`;
    }
}

function compararEscolas(escola1, escola2) {
    if (escola1.qtdeCursos > escola2.qtdeCursos) {
        return `${escola1.cidade} tem mais cursos que ${escola2.cidade}.`;
    } else if (escola1.qtdeCursos < escola2.qtdeCursos) {
        return `${escola2.cidade} tem mais cursos que ${escola1.cidade}.`;
    } else {
        return `Ambas as escolas possuem a mesma quantidade de cursos.`;
    }
}

botaoCalcular.addEventListener('click', function gerarRelatorio(){

    const cod1 = document.getElementById('codigo1').value;
    const cidade1 = document.getElementById('cidade1').value;
    const ano1 = document.getElementById('anoConstrucao1').value;
    const cursos1 = document.getElementById('quantCursos1').value;

    const cod2 = document.getElementById('codigo2').value;
    const cidade2 = document.getElementById('cidade2').value;
    const ano2 = document.getElementById('anoConstrucao2').value;
    const cursos2 = document.getElementById('quantCursos2').value;
    
    
    console.log(cursos2);

    const escola1 = new Senai(cod1, cidade1, ano1, cursos1);
    const escola2 = new Senai(cod2, cidade2, ano2, cursos2);
    const comparacao = compararEscolas(escola1, escola2);

    console.log(escola1);
    console.log(escola2);
    console.log(comparacao);

    document.getElementById('relatorio').style.display = 'flex';

    document.getElementById('relatorio').innerHTML = `
        <h3>Relatório das Escolas SENAI</h3>
        <p>${escola1.dadosEscola()}</p>
        <p>${escola2.dadosEscola()}</p>
        <h3>Comparação</h3>
        <p>${comparacao}</p>
    `;

})

botaoLimpar.addEventListener('click', function limparRelatorio(){
    document.getElementById('codigo1').value = '';
    document.getElementById('cidade1').value = '';
    document.getElementById('anoConstrucao1').value = '';
    document.getElementById('quantCursos1').value = '';

    document.getElementById('codigo2').value = '';
    document.getElementById('cidade2').value = '';
    document.getElementById('anoConstrucao2').value = '';
    document.getElementById('quantCursos2').value = '';

    document.getElementById('relatorio').innerHTML = '';
    document.getElementById('relatorio').style.display = 'none';
})