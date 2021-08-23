// Responsive hidden navbar
let nav = document.querySelector('.header__nav-list')
let nav_hamburger = document.querySelector('.header__nav-hamburger');
let nav_close = document.querySelector('.header__nav-list_close');

nav_hamburger.addEventListener('click', (event) => {
    nav.classList.add('header__nav-list_shown');
    document.body.style = "overflow: hidden";
    event.stopPropagation();
});
nav_close.addEventListener('click', () => {
    nav.classList.remove('header__nav-list_shown');
    document.body.style = "overflow: auto";
});
nav.addEventListener('click', (event) => {
    event.stopPropagation();
})
document.body.addEventListener('click', () => {
    nav.classList.remove('header__nav-list_shown');
    document.body.style = "overflow: auto";
});


// Phone number tooltip
let phone = document.querySelector('.header__phone');
let phone_pic = document.querySelector('.header__phone-pic');

phone_pic.addEventListener('click', showPhoneNumber);

function showPhoneNumber(event) {
    phone.classList.add('header__phone_shown');
    phone_pic.removeEventListener('click', showPhoneNumber);
    event.stopPropagation();
    document.body.addEventListener('click', hidePhoneNumber);
};

function hidePhoneNumber() {
    phone.classList.remove('header__phone_shown');
    document.body.removeEventListener('click', hidePhoneNumber);
    phone.addEventListener('click', (event) => {
        event.stopPropagation();
    })
    phone_pic.addEventListener('click', showPhoneNumber);
};


// CAROUSEL

let button_left = document.querySelector('.reviews__carousel-button-left');
let button_right = document.querySelector('.reviews__carousel-button-right');
let carousel = document.querySelector('.reviews__carousel');
let cards = document.querySelectorAll('.reviews__card');

let i = 1;
let margin = 0;
let card_width = cards[0].offsetWidth;

button_right.addEventListener('click', () => {
    let card_width = cards[i].offsetWidth;
    if(i < cards.length - 1) {
        i++;
        margin -= card_width;
        cards[i - 1].classList.remove('reviews__card-center');
        cards[i].classList.add('reviews__card-center');

        carousel.style.marginLeft = margin + 'px'
    }
})

button_left.addEventListener('click', () => {
    let card_width = cards[i].offsetWidth  ;
    if(i > 0) {
        i--;
        margin += card_width;
        cards[i + 1].classList.remove('reviews__card-center');
        cards[i].classList.add('reviews__card-center');

        carousel.style.marginLeft = margin + 'px'
    }
})




