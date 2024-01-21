

const linkList = document.querySelectorAll('.links');
const navClose = document.getElementsByClassName('close')[0];
const navOpen = document.getElementsByClassName('open')[0];
const nav = document.getElementsByClassName('nav')[0];
const main = document.querySelectorAll('.main')[0];
const sections = document.querySelectorAll('.section');
const toggle = document.getElementById('toggle');

function getProgress() {          
    var topPos = main.scrollTop;
    

    var remaining = main.scrollHeight - document.documentElement.clientHeight;


    
    var percentage = (topPos / remaining) * 100;


    return percentage;
}

function closeNav() {
    nav.style.display = 'none';
    nav.style.left = '-310px';
    navOpen.style.display = 'inline';
}

function openNav() {
    nav.style.display = 'flex';
    nav.style.left = '0px';
    navOpen.style.display = 'none';
}

main.addEventListener('scrollend', function() {
    var num = sections.length - 1;

    var index = Math.floor(getProgress()*num/100);


    for(let i = 0; i < linkList.length; i++) {
        if(i != index) {
            linkList[i].classList.remove('active');
        }
        if(i == index) {
            linkList[i].classList.add('active');
        }
    }

    

    
    getProgress();
});

for(let i = 0; i < linkList.length; i++) {
    linkList[i].onclick = function () {
        let j = 0;
        while(j < linkList.length) {
            linkList[j++].className = 'links';
        }
        linkList[i].className = 'links active';
    }
}



function changeStyle() {
    var theme = document.getElementsByTagName("link")[0];

    console.log(toggle.checked);

    if (toggle.checked) {
        theme.setAttribute("href" , "style-dark.css");
    }
    else {
        theme.setAttribute("href" , "style.css");    
    }
}

