import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { initCarousel } from './modules/animations.js';
import { initLightbox } from './modules/lightbox.js';
import { initClaims } from './modules/claims.js';

document.addEventListener('DOMContentLoaded', () => {
    // Determine if we are in a subfolder "pages/"
    const isNested = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
    
    // Mount layout components
    renderHeader(isNested);
    renderFooter(isNested);

    // Initialize interactive modules
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        initCarousel();
    }

    const lightbox = document.getElementById('fleet-lightbox');
    if (lightbox) {
        initLightbox();
    }

    const claimForm = document.getElementById('claim-form');
    if (claimForm) {
        initClaims();
    }
});
