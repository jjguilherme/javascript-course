//funcao pra ver se eh quadrado
// funcao pra ver se eh inteiro
// pra ver se é NaN
// arredondando paraa baixo
// arredondando para cima
// com duas casas decimais



const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;