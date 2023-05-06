const form = document.getElementById("form"); //НАЙТИ ФОРМУ
const todoUL = document.getElementById('todo'); // НАЙТИ СПИСОК
const all = document.getElementById('all');
const compl = document.getElementById('compl');
const uncompl = document.getElementById('uncompl');
const ulLi = document.getElementsByTagName('li')

todoUL.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.add('completed')
    } 
    else if (ev.target.tagName === "SPAN") {
        let li = ev.target.parentNode;
        li.remove();
    } 
})

form.addEventListener("submit", event => { // НАВЕШАТЬ АДДИВЕНТЛИСЕНЕР
   event.preventDefault(); // ПРОПИСАТЬ ШТУКУ КОТОРАЯ НЕ ПОЗВОЛЯЕТ ФОРМЕ
   // ПЕРЕЗАГРУЖАТЬ СТРАНИЦУ
   newElement();
});


function newElement() {
    const userInput = document.getElementById("userInput").value;
    const ul = document.querySelector('ul');

    const li = document.createElement("li");
    let text = document.createTextNode(userInput);
    li.appendChild(text);
    if (document.getElementById("userInput").value != "") ul.appendChild(li)
    else alert("beda")
    document.getElementById("userInput").value = ""

    let span = document.createElement('span');
    span.className = "close";
    let x = document.createTextNode('x');
    span.appendChild(x);
    li.appendChild(span);
}

all.addEventListener("click", event => {
    for (let i = 0; i < ulLi.length; i++) {
        if (ulLi.item(i).classList.contains('hide')) {
            ulLi.item(i).classList.remove('hide');
        }
    }
})

compl.addEventListener("click", event => {
    for (let i = 0; i < ulLi.length; i++) {
        if (ulLi.item(i).classList.contains('completed')) {
            ulLi.item(i).classList.remove('hide');
        }
        else {
            ulLi.item(i).classList.add('hide');
        }
    }
})

uncompl.addEventListener("click", event => {
    for (let i = 0; i < ulLi.length; i++) {
        if (ulLi.item(i).classList.contains ('completed')) {
            ulLi.item(i).classList.add('hide');
        }
        else {
            ulLi.item(i).classList.remove('hide');
        }
    }
})
