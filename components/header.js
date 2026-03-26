export function renderHeader(isNested = false) {
    const rootPath = isNested ? '../' : './';
    const headerRoot = document.getElementById('app-header');

    if (!headerRoot) return;

    headerRoot.innerHTML = `
        <div class="header-wrapper">
            <header class="header">
                <div class="l-container header__container">
                    <div class="header__logo">
                        <a href="${rootPath}index.html" class="header__logo-link">
                            <span class="header__logo-text">
                                <span class="header__logo-text--dark">TRANS</span><span class="header__logo-text--primary">ZELA</span>
                            </span>
                        </a>
                    </div>
                    <nav class="header__nav">
                        <a href="#" class="header__nav-link">Contacto</a>
                        <a href="#" class="header__nav-link"><img src="https://flagcdn.com/w20/pe.png" alt="Peru" style="height:14px; border-radius:2px;"> Perú</a>
                        <a href="#" class="header__nav-link">Autogestión</a>
                    </nav>
                </div>
            </header>

            <!-- Inner Search Pill -->
            <div class="search-pill-overlay">
                <div class="l-container">
                    <div class="search-pill">
                        <div class="search-pill__item">
                            <label class="search-pill__label">Origen</label>
                            <div class="search-pill__input-row">
                                <i class="fa-solid fa-location-dot"></i>
                                <input type="text" class="search-pill__input" placeholder="Buscar Origen">
                            </div>
                        </div>

                        <button class="search-pill__swap"><i class="fa-solid fa-arrow-right-arrow-left"></i></button>

                        <div class="search-pill__item search-pill__item--bordered search-pill__item--padded">
                            <label class="search-pill__label">Destino</label>
                            <div class="search-pill__input-row">
                                <i class="fa-solid fa-location-dot"></i>
                                <input type="text" class="search-pill__input" placeholder="Buscar Destino">
                            </div>
                        </div>

                        <div class="search-pill__item search-pill__item--bordered search-pill__item--padded search-pill__item--date">
                            <label class="search-pill__label">¿Cuándo viajas?</label>
                            <div class="search-pill__date-options">
                                <button class="search-pill__date-btn">Hoy</button>
                                <button class="search-pill__date-btn">Mañana</button>
                                <button class="search-pill__date-btn search-pill__date-btn--active"><i class="fa-regular fa-calendar"></i> Elegir</button>
                            </div>
                        </div>

                        <button class="btn btn--primary btn--pill search-pill__submit">
                            <i class="fa-solid fa-magnifying-glass"></i> Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
