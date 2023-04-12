const pages = document.querySelectorAll('.page');

function slide(requestedPage) {  
    pages.forEach( page => {
        page.style.transform = `translateX(${-(requestedPage * 100)}%)`
    });
}

// accordions

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.parentElement.classList.toggle('active');
        
        if (question.parentElement.classList.contains('active')) {
            question.querySelectorAll('.accordion-identifier')[0].innerHTML = '▼'
        }
        else {
            question.querySelectorAll('.accordion-identifier')[0].innerHTML = '▲';
        }
    });
});