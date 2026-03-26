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
                        <div class="search-pill__item" style="position: relative;">
                            <label class="search-pill__label">Origen</label>
                            <div class="search-pill__input-row">
                                <i class="fa-solid fa-location-dot"></i>
                                <input type="text" class="search-pill__input" id="search-origen" placeholder="Buscar Origen" autocomplete="off">
                            </div>
                            <ul class="search-dropdown" id="dropdown-origen" style="display: none;"></ul>
                        </div>

                        <button class="search-pill__swap" id="btn-swap"><i class="fa-solid fa-arrow-right-arrow-left"></i></button>

                        <div class="search-pill__item search-pill__item--bordered search-pill__item--padded" style="position: relative;">
                            <label class="search-pill__label">Destino</label>
                            <div class="search-pill__input-row">
                                <i class="fa-solid fa-location-dot"></i>
                                <input type="text" class="search-pill__input" id="search-destino" placeholder="Buscar Destino" autocomplete="off">
                            </div>
                            <ul class="search-dropdown" id="dropdown-destino" style="display: none;"></ul>
                        </div>

                        <div class="search-pill__item search-pill__item--bordered search-pill__item--padded search-pill__item--date">
                            <label class="search-pill__label">¿Cuándo viajas?</label>
                            <div class="search-pill__date-options">
                                <button class="search-pill__date-btn js-date-btn" data-date="hoy">Hoy</button>
                                <button class="search-pill__date-btn js-date-btn" data-date="manana">Mañana</button>
                                <!-- Using type="date" invisible overlay or styled native picker -->
                                <div style="position: relative; display: inline-block;">
                                    <button class="search-pill__date-btn search-pill__date-btn--active js-date-btn" id="btn-elegir" data-date="elegir"><i class="fa-regular fa-calendar"></i> <span id="lbl-elegir">Elegir</span></button>
                                    <input type="date" id="search-date" style="position: absolute; top:0; left:0; width:100%; height:100%; opacity:0; cursor:pointer;">
                                </div>
                            </div>
                        </div>

                        <button class="btn btn--primary btn--pill search-pill__submit" id="btn-buscar">
                            <i class="fa-solid fa-magnifying-glass"></i> Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
