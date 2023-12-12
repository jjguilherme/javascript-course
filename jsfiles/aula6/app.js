const nome = 'Joao Guilherme';
const sobrenome = ' de Souza';
const idade = 23;
const peso = 84;
const altura = 1.87;




let imc = peso / (altura * altura);

let anoNascimento = 2023 - idade;

console.log(nome + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log('tem ' + altura + ' de altura e seu IMC é de ' + imc);
console.log(nome + sobrenome + ' nasceu em ' + anoNascimento);