/**
 * Disclaimer Modal Module
 * Shows a legal disclaimer when the user enters the site.
 */

export function initDisclaimer() {
    // Only show on the home page (root or index.html)
    const path = window.location.pathname;
    const isHomePage = path === '/' || path === '/index.html' || path.endsWith('/index.html') || path === '';
    
    // Also check if we are not in the "pages" directory
    const isInsidePages = path.includes('/pages/') || path.includes('\\pages\\');

    if (!isHomePage || isInsidePages) {
        return;
    }

    const modalHTML = `

        <div class="disclaimer-modal" id="disclaimer-modal">
            <div class="disclaimer-modal__overlay"></div>
            <div class="disclaimer-modal__content">
                <div class="disclaimer-modal__body">
                    <div class="disclaimer-modal__header">
                        <i class="fa-solid fa-circle-info disclaimer-modal__title-icon"></i>
                        <h2 class="disclaimer-modal__title">Aviso Importante</h2>
                    </div>
                    <p class="disclaimer-modal__text">Este sitio no guarda relación con la administración de la empresa de transportes Transzela. Es un proyecto sin fines de lucro con objetivos de simulación y roleplay en Peru Server (ETS2).</p>
                    
                    <a href="https://www.transzela.com.pe" target="_blank" rel="noopener noreferrer" class="disclaimer-modal__link">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        <span>Ir a la página oficial: <strong>transzela.com.pe</strong></span>
                    </a>
                </div>

                <div class="disclaimer-modal__actions">
                    <button class="disclaimer-modal__btn" id="close-disclaimer">
                        <span>Continuar al sitio</span>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>

            </div>


        </div>

    `;

    // Append modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('disclaimer-modal');
    const closeBtn = document.getElementById('close-disclaimer');

    // Show modal with a small delay for better impact
    setTimeout(() => {
        modal.classList.add('disclaimer-modal--active');
        // Prevent scrolling while modal is open
        document.body.style.overflow = 'hidden';
    }, 500);

    // Close functionality
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('disclaimer-modal--active');
        document.body.style.overflow = '';

        // Remove from DOM after animation
        setTimeout(() => {
            modal.remove();
        }, 500);
    });
}
