import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { initCarousel } from './modules/animations.js';
import { initLightbox } from './modules/lightbox.js';
import { initClaims } from './modules/claims.js';
import { renderDestinations } from './data/destinations.js';
import { renderFleet } from './data/fleet.js';
import { initSearch } from './modules/search.js';
import { initChatbot } from './modules/chatbot.js';

document.addEventListener('DOMContentLoaded', () => {
    // Determine if we are in a subfolder "pages/"
    const isNested = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
    
    // Mount layout components
    renderHeader(isNested);
    renderFooter(isNested);
    initSearch();
    initChatbot();

    // Initialize interactive modules
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        initCarousel();
    }

    // Render dynamic data
    renderDestinations();
    renderFleet();

    const lightbox = document.getElementById('fleet-lightbox');
    if (lightbox) {
        initLightbox();
    }

    const claimForm = document.getElementById('claim-form');
    if (claimForm) {
        initClaims();
    }
});
