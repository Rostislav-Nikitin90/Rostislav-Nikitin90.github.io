const banner = document.querySelector('.banner-announcement');
const dayOfWeek = new Date().getDay();
if (dayOfWeek === 7) {
    banner.classList.add('visible');
}