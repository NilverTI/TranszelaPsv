export const destinations = [
    { title: 'Lima', sub: 'Múltiples salidas diarias' },
    { title: 'Jauja', sub: 'Múltiples salidas diarias' },
    { title: 'Huaraz', sub: 'Múltiples salidas diarias' },
    { title: 'Cajacay', sub: 'Múltiples salidas diarias' },
    { title: 'Huacho', sub: 'Múltiples salidas diarias' },
    { title: 'Tunan', sub: 'Múltiples salidas diarias' },
    { title: 'Chancay', sub: 'Múltiples salidas diarias' },
    { title: 'Huaycan', sub: 'Múltiples salidas diarias' },
    { title: 'La Oroya', sub: 'Múltiples salidas diarias' },
    { title: 'Huancayo', sub: 'Múltiples salidas diarias' },
    { title: 'Concepcion', sub: 'Múltiples salidas diarias' },
    { title: 'Junin', sub: 'Múltiples salidas diarias' },
    { title: 'Huayre', sub: 'Múltiples salidas diarias' },
    { title: 'Shelby', sub: 'Múltiples salidas diarias' },
    { title: 'Carhuamayo', sub: 'Múltiples salidas diarias' },
    { title: 'Cerro de Pasco', sub: 'Múltiples salidas diarias' },
    { title: 'Huanuco', sub: 'Múltiples salidas diarias' },
    { title: 'Ambo', sub: 'Múltiples salidas diarias' },
    { title: 'Tarma', sub: 'Múltiples salidas diarias' },
    { title: 'Carpapata', sub: 'Múltiples salidas diarias' },
    { title: 'San Ramon', sub: 'Múltiples salidas diarias' },
    { title: 'La Merced', sub: 'Múltiples salidas diarias' }
];

export function renderDestinations() {
    const container = document.getElementById('destinations-container');
    if (!container) return;

    container.innerHTML = destinations.map(dest => {
        // La foto coincidirá exactamente con el título. Ej: "Lima-La Victoria-Yerbateros.jpg"
        const imgSrc = `../assets/images/destinos/${dest.title}.jpg`;
        // Fallback 100% local genérico por si la imagen aún no se ha subido
        const fallbackSrc = '../assets/images/defecto.png';

        return `
        <article class="card">
            <img src="${imgSrc}" alt="${dest.title}" class="card__img" loading="lazy" onerror="this.src='${fallbackSrc}'; this.onerror=null;">
            <div class="card__body">
                <div>
                    <h3 class="dest-card__title">Viaja a <span style="font-size: 22px;">${dest.title}</span></h3>
                    <p class="dest-card__sub">${dest.sub}</p>
                </div>
                <a href="#" class="btn btn--primary u-w-full" aria-label="Ver horarios para viajar a ${dest.title}" style="margin-top: 20px;">VER HORARIOS</a>
            </div>
        </article>
        `;
    }).join('');
}
