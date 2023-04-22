const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const header = document.querySelector('.header');

const pages = document.querySelectorAll('.page');
const links = document.querySelectorAll('a');
const iframes = document.querySelectorAll('iframe');
const works = document.querySelectorAll('.work');
const fadeIns = document.querySelectorAll('.scroll-fade-in');

const bottomOfWindow = window.scrollTop + window.clientHeight;

let hasPressedKey = false;
let canPressKey = false;

document.body.style.overflowY = 'hidden';
pages[1].style.opacity = 0;

window.onbeforeunload = () => {
    pages.forEach(page => {
        page.style.transition = 'none';
        page.style.transform = 'translateX(100%)';
        title.style.transform = 'translateY(0)';
        title.style.opacity = 1;
        scrollTo(document.body.scrollLeft, 0);
    });
}

function changePage() {
    pages[1].style.opacity = 1;
    document.body.style.overflowY = 'scroll';
    
    pages.forEach(page => {page.style.transform = 'translateX(-100%)';});
    links.forEach(i => {i.tabIndex = 0});
    iframes.forEach(i => {i.tabIndex = 0});
    
    checkElementLocation();
}

function checkElementLocation() {
    fadeIns.forEach(function(fadeIn) {
        var bottomOfObject = fadeIn.offsetTop + fadeIn.offsetHeight;

        if (bottomOfWindow > bottomOfObject) {
            fadeIn.classList.add('fade-in');
        }
    });
}

works.forEach(div => {
    div.addEventListener('click', function() {
        window.open(div.querySelector('a').getAttribute('href'), '_blank'); 
    });
});

links.forEach(i => {i.tabIndex = -1;});
iframes.forEach(i => {i.tabIndex = -1;});
fadeIns.forEach(i => {i.addEventListener('animationend', () => {header.classList.add('finished');});});

function onEvent() {
    pages.forEach(page => {page.style.transition = 'all 1000ms';});
    if (!hasPressedKey && canPressKey) {
        title.style.transform = 'translateY(100vh)';
        title.style.opacity = 0;
        setInterval(changePage, 1200);
        hasPressedKey = true;
    }
}

document.addEventListener('keyup', onEvent);
document.addEventListener('mouseup', onEvent);
window.addEventListener('scroll', () => {
    checkElementLocation();
    onEvent();
});

subtitle.addEventListener('animationend', () => {subtitle.classList.add('finished');});
header.addEventListener('animationend', () => {header.classList.add('finished');});

setInterval(() => {canPressKey = true;}, 2000);