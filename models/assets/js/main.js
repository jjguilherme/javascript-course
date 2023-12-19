const elementos = [
    {tag:'p', texto: 'Qualquer texto que você quiser'},
    {tag:'div', texto: 'Palmeiras tem Mundial!'},
    {tag:'footer', texto: 'Seremos campeões da libertadores'},
    {tag:'section', texto: 'Chora curintia'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i<elementos.length; i++){
    let{ tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);