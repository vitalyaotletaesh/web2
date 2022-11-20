let offset = 0; // Смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function() {
    offset += 570;
    if (offset > 2280) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});