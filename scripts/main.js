import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { initCarousel } from './modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {
    // Determine if we are in a subfolder "pages/"
    const isNested = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
    
    // Mount layout components
    renderHeader(isNested);
    renderFooter(isNested);

    // Initialize interactive modules if their domains exist on the page
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        initCarousel();
    }
});
