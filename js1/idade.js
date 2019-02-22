function idade(dia, mes,ano) {
    var data_atual = new Date,
        ano_atual = data_atual.getFullYear(),
        mes_atual = data_atual.getMonth() + 1,
        dia_atual = data_atual.getDate(),

        dia = +dia,
        mes = +mes,
        ano = +ano,
        
        idade = ano_atual - ano;

    if (mes_atual < mes || mes_atual == mes && dia_atual < dia) {
        idade--;
    }
 
    return idade;
}

var dia,
    mes,
    ano;

dia = prompt('Digite o dia de seu nascimento: ');
mes = prompt('Digite o mes de seu nascimento: ');
ano = prompt('Digite o ano de seu nascimento: ');

alert("Idade: " + idade(dia, mes, ano) + " anos");
