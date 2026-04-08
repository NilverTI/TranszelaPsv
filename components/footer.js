export function renderFooter(isNested = false) {
    const pagesPath = isNested ? './' : 'pages/';
    const footerRoot = document.getElementById('app-footer');

    if (!footerRoot) return;

    footerRoot.innerHTML = `
        <footer class="footer">
            <div class="l-container l-grid l-grid--4">
                <div>
                    <div class="footer__logo">
                        <span class="header__logo-text">
                            <span class="header__logo-text--dark">TRANS</span><span class="header__logo-text--primary">ZELA</span>
                        </span>
                    </div>
                    <h4 class="footer__title">Ayuda o contacto</h4>
                    <div class="footer__contact-wrap">
                        <a href="#" class="footer__contact-btn"><i class="fa-brands fa-whatsapp footer__whatsapp-icon"></i>950 3630 88</a>
                        <div class="footer__contact-btn footer__contact-btn--address">
                            <i class="fa-solid fa-location-dot" style="margin-top: 3px;"></i> 
                            <span class="footer__address-text">Av. Javier Prado 1109,<br>Lima</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="footer__title js-footer-accordion" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
                        Rutas principales <i class="fa-solid fa-chevron-down accordion-icon"></i>
                    </h4>
                    <ul class="footer__routes footer-accordion-content">
                        <li class="footer__routes-item"><a href="#">Lima-La V.-Yerbateros</a></li>
                        <li class="footer__routes-item"><a href="#">Jauja</a></li>
                        <li class="footer__routes-item"><a href="#">Huaraz</a></li>
                        <li class="footer__routes-item"><a href="#">Cajacay</a></li>
                        <li class="footer__routes-item"><a href="#">Huacho</a></li>
                        <li class="footer__routes-item"><a href="#">Tunan</a></li>
                        <li class="footer__routes-item"><a href="#">Chancay</a></li>
                        <li class="footer__routes-item"><a href="#">Huaycan</a></li>
                        <li class="footer__routes-item"><a href="#">La Oroya</a></li>
                        <li class="footer__routes-item"><a href="#">Huancayo</a></li>
                        <li class="footer__routes-item"><a href="#">Concepcion</a></li>
                        <li class="footer__routes-item"><a href="#">Junin</a></li>
                        <li class="footer__routes-item"><a href="#">Huayre</a></li>
                        <li class="footer__routes-item"><a href="#">Shelby</a></li>
                        <li class="footer__routes-item"><a href="#">Carhuamayo</a></li>
                        <li class="footer__routes-item"><a href="#">Cerro de Pasco</a></li>
                        <li class="footer__routes-item"><a href="#">Huanuco</a></li>
                        <li class="footer__routes-item"><a href="#">Ambo</a></li>
                        <li class="footer__routes-item"><a href="#">Tarma</a></li>
                        <li class="footer__routes-item"><a href="#">Carpapata</a></li>
                        <li class="footer__routes-item"><a href="#">San Ramon</a></li>
                        <li class="footer__routes-item"><a href="#">La Merced</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer__title">Enlaces</h4>
                    <ul>
                        <li class="footer__list"><a href="${pagesPath}destinos.html" class="footer__list-link">Destinos</a></li>
                        <li class="footer__list"><a href="#" class="footer__list-link">Pasajero frecuente</a></li>
                        <li class="footer__list"><a href="#" class="footer__list-link">Centro de ayuda</a></li>
                        <li class="footer__list"><a href="#" class="footer__list-link">Protección de datos</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer__title">Legal</h4>
                    <ul>
                        <li class="footer__list"><a href="#" class="footer__list-link">Términos y Condiciones</a></li>
                        <li class="footer__list"><a href="#" class="footer__list-link u-text-white footer__list-link--highlight">Portal de proveedor</a></li>
                        <li class="footer__list">
                            <a href="${pagesPath}reclamaciones.html" class="footer__claim">
                                <img src="https://www.munisanjeronimocusco.gob.pe/wp-content/uploads/2023/07/libro-de-reclamaciones.jpg" alt="Libro" class="footer__claim-img">
                                <span class="footer__claim-text">Libro de<br>reclamaciones</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

        <!-- Floating Chatbot Widget -->
        <div class="chatbot-container" id="chatbot-container">
            <!-- Botón Flotante -->
            <div class="chatbot" id="chatbot-btn">
                <div class="chatbot__bubble">Hola, soy tu MAPACHON<small>Estoy aquí para ayudarte</small></div>
                <div class="chatbot__icon">
                    <img src="https://img.freepik.com/premium-vector/cute-robot-waving-hand-cartoon-illustration_138676-2744.jpg" alt="Robot" class="chatbot__img">
                </div>
            </div>

            <!-- Formulario Desplegable -->
            <div class="chatbot-widget" id="chatbot-widget" style="display: none;">
                <div class="chatbot-widget__header">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="https://img.freepik.com/premium-vector/cute-robot-waving-hand-cartoon-illustration_138676-2744.jpg" alt="Robot Mapacho" style="width:35px; border-radius:50%; border:2px solid var(--color-primary);">
                        <div>
                            <strong style="font-size: 14px; font-weight: 800;">MAPACHON Asistente</strong>
                            <small style="display:block; font-size:11px; color:#aaa;">En línea 🟢</small>
                        </div>
                    </div>
                    <button class="chatbot-widget__close" id="chatbot-close"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="chatbot-widget__body">
                    <p class="chatbot-widget__msg">
                        ¡Hola! 👋 Soy Mapachon. ¿En qué te puedo ayudar el día de hoy?
                    </p>
                    <textarea id="chatbot-input" class="chatbot-widget__input" placeholder="Escribe tu consulta o duda aquí..."></textarea>
                    <button id="chatbot-send" class="btn btn--primary u-w-full" style="padding: 12px; font-size: 13px; margin-top: 15px;">
                        <i class="fa-brands fa-whatsapp" style="font-size: 16px;"></i> Enviar por WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `;
}
