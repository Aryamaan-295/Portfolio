let buttons = document.querySelectorAll('.elements');
let buttonNames = document.getElementsByClassName('name');


buttons.forEach(element => {
    element.addEventListener('click', () => {
        window.open("https://en.wikipedia.org/wiki/" + element.childNodes[2].innerHTML, "_blank");
    })    
});