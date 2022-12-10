//Домашка продвинутый FrontEnd 
//10.12.22
// Швец Антон вечерняя группа

const button_hello = document.querySelector('.button_hello');
button_hello.addEventListener('click', () => {
    console.log('Hello, World!');
})

const button_paragraph = document.querySelector('.button_two_paragraph');
const two_paragraph = document.querySelector('.two_paragraph');
button_paragraph.addEventListener('click', () =>{
    const newPar = document.createElement('p');
    const newPar2 = document.createElement('p');
    newPar.innerText = 'Параграф1';
    newPar2.innerText = 'Параграф2';
    two_paragraph.append(newPar);
    two_paragraph.append(newPar2);
    newPar.style.color = 'blue';
    newPar2.style.color = 'red';
    newPar.style.fontSize = '20px';
    newPar2.style.fontSize = '24px';
});

const multiplikation = (num1,num2) => {
    return num1 * num2;
}


console.log(multiplikation(4,3));

const quad = (num1) =>{
    return num1**3;
}

console.log(quad(4));
