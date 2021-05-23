const banner = document.querySelector('.banner-announcement');
const dayOfWeek = new Date().getDay();
if (dayOfWeek === 6) {
    banner.classList.add('visible');
}