// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso':


const pontuacaoUsuario = 5000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
const corUsuario = 'Red';
const corPadrao = corUsuario || 'Preta';


console.log(nivelUsuario, corPadrao);

//if (pontuacaoUsuario >= 1000){
//    console.log('Usuário VIP');
//} else {
//    console.log('Usuário normal');
//}