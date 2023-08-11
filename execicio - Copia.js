// FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY

var dadosR = ["a"];


// Função para verificar a resposta
function verificaResposta() {

    let tabela = document.getElementById('tabela').innerHTML = '<tr><th>Resposta</th><th>Resultado</th><th>Reiniciar</th></tr>';
    let resposta = document.getElementById("resposta").value;

    for (let i = 0; i <= (dadosR.length - 1); i++) {
     if (resposta == dadosR[i]) {
        tabela += "<tr><td>" + dadosR[i] + "</td><td>Correta</td><td><button type='button' onclick='Recarregar()'>Reiniciar</button></td></tr>";

     } else {
        tabela += "<tr><td>" + dadosR[i] + "</td><td>Errada</td><td><button type='button' onclick='Recarregar()'>Reiniciar</button></td></tr>";
        alert("Opção incorreta");
     }

     document.getElementById('tabela').innerHTML = tabela;
}
}
function Recarregar(){
    location.reload();
    document.getElementById('resposta').focus();
}
/*


function editar(i) {

    document.getElementById('nomeUser').value = dadosResposta[(i - 1)];

    dadosResposta.splice(dadosResposta[(i - 1)], 1);



}

// função para excluir nome

function excluir(i) {

    dadosResposta.splice((i - 1),);

    document.getElementById('tabela').deleteRow(i);
}
*/