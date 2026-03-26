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
                    <a href="#" class="footer__contact-btn"><i class="fa-brands fa-whatsapp footer__whatsapp-icon"></i> 999 999 996</a>
                    <div class="footer__contact-btn footer__contact-btn--address">
                        <i class="fa-solid fa-location-dot"></i> 
                        <span class="footer__address-text">Av. Javier Prado 1109,<br>La Victoria - Lima, Perú</span>
                    </div>
                </div>
                <div>
                    <h4 class="footer__title">Rutas principales</h4>
                    <ul class="footer__routes">
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

        <!-- Floating Chatbot -->
        <div class="chatbot">
            <div class="chatbot__bubble">Hola, soy tu MAPACHO<small>Estoy aquí para ayudarte</small></div>
            <div class="chatbot__icon">
                <img src="https://img.freepik.com/premium-vector/cute-robot-waving-hand-cartoon-illustration_138676-2744.jpg" alt="Robot" class="chatbot__img">
            </div>
        </div>
    `;
}
