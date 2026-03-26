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

    // Hamburger Menu Logic
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const headerNav = document.getElementById('header-nav');
    if (hamburgerBtn && headerNav) {
        hamburgerBtn.addEventListener('click', () => {
            headerNav.classList.toggle('header__nav--active');
            const icon = hamburgerBtn.querySelector('i');
            if (headerNav.classList.contains('header__nav--active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Footer Accordion Logic
    const footerAccordion = document.querySelector('.js-footer-accordion');
    const footerContent = document.querySelector('.footer-accordion-content');
    if (footerAccordion && footerContent) {
        footerAccordion.addEventListener('click', () => {
            footerAccordion.classList.toggle('js-footer-accordion--open');
            footerContent.classList.toggle('footer-accordion-content--open');
        });
    }

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
