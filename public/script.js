const pages = document.querySelectorAll('.page');

function slide(requestedPage) {  
    pages.forEach( page => {
        page.style.transform = `translateX(${-(requestedPage * 100)}%)`
    });
}