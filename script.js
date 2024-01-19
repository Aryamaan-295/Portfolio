

const linkList = document.querySelectorAll('.links');
const navClose = document.getElementsByClassName('close')[0];
const navOpen = document.getElementsByClassName('open')[0];
const nav = document.getElementsByClassName('nav')[0];
const main = document.querySelectorAll('.main')[0];
const section = document.querySelectorAll('.section')[0];

function getProgress() {          
    var topPos = main.scrollTop;
    // Alternatively, you can use document.body.scrollTop || document.documentElement.scrollTop;
    
    // Remaining left to scroll
    var remaining = main.scrollHeight - document.documentElement.clientHeight;
    // scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
    // clientHeight is the inner height of the element, including padding
    
    var percentage = (topPos / remaining) * 100;
    // console.log(main.scrollTop);
    // console.log(remaining);
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
    // currentScrollPercentage();
    var index = Math.floor(getProgress()/33);
    // console.log(index);

    for(let i = 0; i < linkList.length; i++) {
        if(i != index) {
            linkList[i].classList.remove('active');
        }
        if(i == index) {
            linkList[i].classList.add('active');
        }
    }
    // linkList[index].classList.add('active');
    

    
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




function detectColorScheme(){
    var theme="light";    //default to light

    //local storage is used to override OS theme settings
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") == "dark"){
            var theme = "dark";
        }
    } else if(!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        var theme = "dark";
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme=="dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}
detectColorScheme();

//identify the toggle switch HTML element
const toggleSwitch = document.querySelector('#toggle-switch input[type=checkbox]');
console.log(toggleSwitch)
//function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
    }    
}

//listener for changing themes
toggleSwitch.addEventListener('change', switchTheme, false);

//pre-check the dark-theme checkbox if dark-theme is set
if (document.documentElement.getAttribute("data-theme") == "dark"){
    toggleSwitch.checked = true;
}