export function renderHeader(isNested = false) {
    const rootPath = isNested ? '../' : './';
    const headerRoot = document.getElementById('app-header');

    if (!headerRoot) return;

    headerRoot.innerHTML = `
        <div class="header-wrapper">
            <header class="header">
                <div class="l-container header__container">
                    <div class="header__logo">
                        <a href="${rootPath}Index.html" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 28px; font-weight: 900; letter-spacing: -1px;">
                                <span style="color: var(--color-dark-text);">TRANS</span><span style="color: var(--color-primary);">ZELA</span>
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

                        <div class="search-pill__item search-pill__item--bordered search-pill__item--padded" style="padding-left: 30px;">
                            <label class="search-pill__label">¿Cuándo viajas?</label>
                            <div style="display: flex; gap: 5px;">
                                <button class="btn btn--link" style="padding: 6px 14px; border: 1px solid var(--color-border); border-radius: 20px; font-size: 12px; font-weight: 600; color: var(--color-text-muted);">Hoy</button>
                                <button class="btn btn--link" style="padding: 6px 14px; border: 1px solid var(--color-border); border-radius: 20px; font-size: 12px; font-weight: 600; color: var(--color-text-muted);">Mañana</button>
                                <button class="btn btn--link" style="color: var(--color-text-main); font-weight: 700;"><i class="fa-regular fa-calendar"></i> Elegir</button>
                            </div>
                        </div>

                        <button class="btn btn--primary btn--pill" style="padding: 16px 40px; margin-left: 10px;">
                            <i class="fa-solid fa-magnifying-glass"></i> Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
