import { getEl, getAllEl } from '../../utils/helpers.js';

export function initCarousel() {
    let slideIndex = 0;
    const slides = getAllEl('.hero__slide');
    const dots = getAllEl('.dot');
    const prevBtn = getEl('#prevBtn');
    const nextBtn = getEl('#nextBtn');
    let slideInterval;

    if (!slides.length) return;

    function showSlide(n) {
        slides.forEach(s => s.classList.remove('hero__slide--active'));
        dots.forEach(d => d.classList.remove('active'));

        slideIndex = (n + slides.length) % slides.length;

        slides[slideIndex].classList.add('hero__slide--active');
        if (dots.length > slideIndex) {
            dots[slideIndex].classList.add('active');
        }
    }

    function moveSlide(n) {
        showSlide(slideIndex + n);
        resetInterval();
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            moveSlide(1);
        }, 6000);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            moveSlide(-1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            moveSlide(1);
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
            resetInterval();
        });
    });

    // Start auto playback
    resetInterval();
}
