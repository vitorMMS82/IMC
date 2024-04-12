//IMC
//1. capturar o imc
//2. calcular o imc
//3. gerar clasficação do imc
//4. organizar as informações
//5. salvar os dados na lista
//6. ler a listas com o dados
//7. redenrizar o conteúdo no HTML
//8.




function CapturarValores(){
    const nome = document.getElementById('name').value;
    const altura = document.getElementById('height').value;
    const peso = document.getElementById('weight').value;

    const dadosUsuario = {
        nome: nome,
        altura: altura,
        peso: peso
    }

    return dadosUsuario
}

function CalcularImc(altura, peso){
   const imc = peso / (altura * altura)

   return imc
}

function ClassificarImc(imc){
    if(imc < 18.5) {
        return " abaixo do peso! "
    } else if (imc < 25) {
        return "peso normal!"
    } else if (imc < 30) {
        return "sobrepeso" 
    } else {
        return "PORPETA"
    }

}

function OrganizarDados(dadosUsuario, valorImc, classificacaoImc){
    const dataHoraAtual = Intl.DateTimeFormat('pt-BR', {timeStyle: 'long', datastyle: 'short'}).format(Date.now())
    ...dadosUsuario
    const dadosUsuarioCompleto = {
        imc: valorImc.toFixed(2),
        classificacaoImc: classificacaoImc,
        dataCadastro: dataHoraAtual
    }

    return dadosUsuarioCompleto;
}
