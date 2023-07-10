const empregado = {
    salarioBase: 5000,
    valorHoraExtra: 100,
    qtHorasExtras: 10,
    calculaSalario: function () {
        return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras);
    }
};
//console.log(empregado);

class Exemplo{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

var objeto =  Exemplo("alo", 65)
console.log(objeto)