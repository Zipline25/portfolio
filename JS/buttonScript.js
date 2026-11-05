//buttonScript.js
function displayMessage(){
    window.alert('Hello')
}

function addParagraph(){
    const newElement = document.createElement('p');
    newElement.textContent='New Paragraph';
    document.querySelector('.container').appendChild(newElement);
}

function removeParagraph(){
    const list = document.querySelector('.container')
    if(list.children.length != 0)
        list.removeChild(list.lastChild);
}

const btn=document.querySelector('#btn-1')
btn.addEventListener('click', addParagraph);

document.querySelector('#btn-2').addEventListener('click', removeParagraph);