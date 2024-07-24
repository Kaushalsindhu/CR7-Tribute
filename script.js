const scroller = document.querySelector('#charity-scroller');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation(){
    scroller.setAttribute("data-animated", true);

    const scrollerInner = document.querySelector('.charity-scroller-inner');
    const scrollerContent = Array.from(scrollerInner.children);
    
    scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
    })
}


let leftCards = document.querySelectorAll('.card-left');
let rightCards = document.querySelectorAll('.card-right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const leftHiddenElements = document.querySelectorAll('.hidden-left');
const rightHiddenElements = document.querySelectorAll('.hidden-right');
leftHiddenElements.forEach((el) => observer.observe(el));
rightHiddenElements.forEach((el) => observer.observe(el));