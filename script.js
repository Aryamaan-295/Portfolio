let linkList = document.querySelectorAll('.links');
let navClose = document.getElementsByClassName('close')[0];
let navOpen = document.getElementsByClassName('open')[0];
let nav = document.getElementsByClassName('nav')[0];

for(let i = 0; i < linkList.length; i++) {
    linkList[i].onclick = function () {
        let j = 0;
        while(j < linkList.length) {
            linkList[j++].className = 'links';
        }

        linkList[i].className = 'links active';
    }
}


function closeNav() {
    nav.style.display = 'none';
    nav.style.left = '-310px';
    navOpen.style.display = 'inline';
}

function openNav() {
    nav.style.display = 'block';
    nav.style.left = '0px';
    navOpen.style.display = 'none';
}