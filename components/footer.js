export function renderFooter(isNested = false) {
    const pagesPath = isNested ? './' : 'pages/';
    const footerRoot = document.getElementById('app-footer');
    
    if (!footerRoot) return;

    footerRoot.innerHTML = `
        <footer class="footer">
            <div class="l-container l-grid l-grid--4">
                <div>
                    <div class="footer__logo">
                        <span style="font-size: 28px; font-weight: 900; letter-spacing: -1px;">
                            <span style="color: var(--color-dark-text);">TRANS</span><span style="color: var(--color-primary);">ZELA</span>
                        </span>
                    </div>
                    <h4 class="footer__title">Ayuda o contacto</h4>
                    <a href="#" class="footer__contact-btn"><i class="fa-brands fa-whatsapp" style="color: #25D366; font-size: 20px;"></i> 999 999 996</a>
                    <div class="footer__contact-btn" style="align-items: flex-start; cursor: default;">
                        <i class="fa-solid fa-location-dot"></i> 
                        <span style="line-height:1.4">Av. Javier Prado 1109,<br>La Victoria - Lima, Perú</span>
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
                        <li class="footer__list"><a href="#" class="footer__list-link u-text-white" style="font-weight: 700; display:block; margin: 15px 0 20px;">Portal de proveedor</a></li>
                        <li class="footer__list">
                            <a href="#" class="footer__claim">
                                <img src="https://www.munisanjeronimocusco.gob.pe/wp-content/uploads/2023/07/libro-de-reclamaciones.jpg" alt="Libro" class="footer__claim-img">
                                <span style="line-height: 1.2;">Libro de<br>reclamaciones</span>
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
