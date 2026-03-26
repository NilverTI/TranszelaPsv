/**
 * Lightbox module for Fleet images
 */
export const initLightbox = () => {
    const lightbox = document.getElementById('fleet-lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox__img');
    const lightboxCaption = lightbox.querySelector('.lightbox__caption');
    const closeBtn = lightbox.querySelector('.lightbox__close');
    const triggers = document.querySelectorAll('.js-lightbox-trigger');

    const openLightbox = (imgSrc, title) => {
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = title;
        lightbox.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closeLightbox = () => {
        lightbox.classList.remove('is-active');
        document.body.style.overflow = '';
        // Clear src after animation to avoid flicker on next open
        setTimeout(() => {
            if (!lightbox.classList.contains('is-active')) {
                lightboxImg.src = '';
            }
        }, 300);
    };

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const imgSrc = trigger.getAttribute('data-img');
            const title = trigger.getAttribute('data-title');
            if (imgSrc) {
                openLightbox(imgSrc, title);
            }
        });
    });

    closeBtn.addEventListener('click', closeLightbox);

    // Close on click outside content
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
            closeLightbox();
        }
    });
};
