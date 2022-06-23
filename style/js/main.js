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