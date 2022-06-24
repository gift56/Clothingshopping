var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const scrollHeader = () => {
    const Header = document.getElementById('header')

    if (this.scrollY >= 50) Header.classList.add('scroll-header'); else Header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
});

cartShop.addEventListener('click', () => { cart.classList.add('show_cart') })

loginToggle.addEventListener('click', () => { loginForm.classList.add('show_cart') })

loginClose.addEventListener('click', () => { loginForm.classList.remove('show_cart') })

cartClose.addEventListener('click', () => { cart.classList.remove('show_cart') })
