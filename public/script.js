const pages = document.querySelectorAll('.page');
const title = document.querySelectorAll('.title')[0];
const a = document.querySelectorAll('a');
const iframe = document.querySelectorAll('iframe');
let hasPressedKey = false;
let canPressKey = false;

document.body.style.overflowY = 'hidden';
a.forEach(i => {i.tabIndex = -1});
iframe.forEach(i => {i.tabIndex = -1});

window.onbeforeunload = function() {
    pages.forEach(page => {
        page.style.transition = 'none';
        page.style.transform = 'translateX(100%)';
        title.style.transform = 'translateY(0)';
        title.style.opacity = 100;
        scrollTo(document.body.scrollLeft, 0);
    });
}

function waitForTitleAnimation() {canPressKey = true;}
setInterval(waitForTitleAnimation, 1000);

function changePage() {
    pages.forEach(page => {page.style.transform = 'translateX(-100%)';});
    a.forEach(i => {i.tabIndex = 0});
    iframe.forEach(i => {i.tabIndex = 0});

    document.body.style.overflowY = 'scroll';
}

function onKeyPress() {
    pages.forEach(page => {page.style.transition = 'all 1000ms';});
    if (!hasPressedKey && canPressKey) {
        title.style.transform = 'translateY(100vh)';
        title.style.opacity = 0;
        setInterval(changePage, 1200);
        hasPressedKey = true;
    }
}

document.addEventListener('keyup', onKeyPress);

// links

const workDivs = document.querySelectorAll('.work');

workDivs.forEach(div => {
    div.addEventListener('click', function() {
        window.open(div.querySelector('a').getAttribute('href'), '_blank'); 
    });
});