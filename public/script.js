const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const pages = document.querySelectorAll('.page');
const links = document.querySelectorAll('a');
const iframes = document.querySelectorAll('iframe');
const works = document.querySelectorAll('.work');

let hasPressedKey = false;
let canPressKey = false;

document.body.style.overflowY = 'hidden';

window.onbeforeunload = function() {
    pages.forEach(page => {
        page.style.transition = 'none';
        page.style.transform = 'translateX(100%)';
        title.style.transform = 'translateY(0)';
        title.style.opacity = 100;
        scrollTo(document.body.scrollLeft, 0);
    });
}

function changePage() {
    pages.forEach(page => {page.style.transform = 'translateX(-100%)';});
    links.forEach(i => {i.tabIndex = 0});
    iframes.forEach(i => {i.tabIndex = 0});
    
    document.body.style.overflowY = 'scroll';
}

works.forEach(div => {
    div.addEventListener('click', function() {
        window.open(div.querySelector('a').getAttribute('href'), '_blank'); 
    });
});

links.forEach(i => {i.tabIndex = -1});
iframes.forEach(i => {i.tabIndex = -1});

document.addEventListener('keyup', () => {
    pages.forEach(page => {page.style.transition = 'all 1000ms';});
    if (!hasPressedKey && canPressKey) {
        title.style.transform = 'translateY(100vh)';
        title.style.opacity = 0;
        setInterval(changePage, 1200);
        hasPressedKey = true;
    }
});

subtitle.addEventListener('animationend', () => {subtitle.classList.add('finished');});

setInterval(function() {canPressKey = true;}, 2000);