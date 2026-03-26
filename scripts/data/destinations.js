export const destinations = [
    { title: 'Lima', sub: 'La Victoria / Yerbateros', img: '/assets/Lima.jpg', fallback: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=400' },
    { title: 'Jauja', sub: 'Múltiples salidas diarias', img: '/assets/Jauja.jpg', fallback: 'https://images.unsplash.com/photo-1526392060635-9d60198810f7?q=80&w=400' },
    { title: 'Huaraz', sub: 'Múltiples salidas diarias', img: '/assets/Huaraz.jpg', fallback: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400' },
    { title: 'Cajacay', sub: 'Múltiples salidas diarias', img: '/assets/Cajacay.jpg', fallback: 'https://images.unsplash.com/photo-1582206666993-294711893c5d?q=80&w=400' },
    { title: 'Huacho', sub: 'Múltiples salidas diarias', img: '/assets/Huacho.jpg', fallback: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=400' },
    { title: 'Tunan', sub: 'Múltiples salidas diarias', img: '/assets/Tunan.jpg', fallback: 'https://images.unsplash.com/photo-1587595432321-7009472e39fc?q=80&w=400' },
    { title: 'Chancay', sub: 'Múltiples salidas diarias', img: '/assets/Chancay.jpg', fallback: 'https://images.unsplash.com/photo-1518182170546-076616fd4027?q=80&w=400' },
    { title: 'Huaycan', sub: 'Múltiples salidas diarias', img: '/assets/Huaycan.jpg', fallback: 'https://images.unsplash.com/photo-1596401057633-5481d6dabd53?q=80&w=400' },
    { title: 'La Oroya', sub: 'Múltiples salidas diarias', img: '/assets/LaOroya.jpg', fallback: 'https://images.unsplash.com/photo-1610421838183-503612d62d22?q=80&w=400' },
    { title: 'Huancayo', sub: 'Múltiples salidas diarias', img: '/assets/Huancayo.jpg', fallback: 'https://images.unsplash.com/photo-1580798725838-51f4c7185038?q=80&w=400' },
    { title: 'Concepcion', sub: 'Múltiples salidas diarias', img: '/assets/Concepcion.jpg', fallback: 'https://images.unsplash.com/photo-1577700547900-a292d34639cb?q=80&w=400' },
    { title: 'Junin', sub: 'Múltiples salidas diarias', img: '/assets/Junin.jpg', fallback: 'https://images.unsplash.com/photo-1590497537158-9419b48995a9?q=80&w=400' },
    { title: 'Huayre', sub: 'Múltiples salidas diarias', img: '/assets/Huayre.jpg', fallback: 'https://images.unsplash.com/photo-1588612198083-d5fce0b09f44?q=80&w=400' },
    { title: 'Shelby', sub: 'Múltiples salidas diarias', img: '/assets/Shelby.jpg', fallback: 'https://images.unsplash.com/photo-1601004111303-34e4024c08dc?q=80&w=400' },
    { title: 'Carhuamayo', sub: 'Múltiples salidas diarias', img: '/assets/Carhuamayo.jpg', fallback: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=400' },
    { title: 'Cerro de Pasco', sub: 'Múltiples salidas diarias', img: '/assets/CerroDePasco.jpg', fallback: 'https://images.unsplash.com/photo-1560645607-425b747053e1?q=80&w=400' },
    { title: 'Huanuco', sub: 'Múltiples salidas diarias', img: '/assets/Huanuco.jpg', fallback: 'https://images.unsplash.com/photo-1517627402856-2e8aa192dff1?q=80&w=400' },
    { title: 'Ambo', sub: 'Múltiples salidas diarias', img: '/assets/Ambo.jpg', fallback: 'https://images.unsplash.com/photo-1576402891979-5e7e01235cb3?q=80&w=400' },
    { title: 'Tarma', sub: 'Múltiples salidas diarias', img: '/assets/Tarma.jpg', fallback: 'https://images.unsplash.com/photo-1558293963-3f1ee5afdbca?q=80&w=400' },
    { title: 'Carpapata', sub: 'Múltiples salidas diarias', img: '/assets/Carpapata.jpg', fallback: 'https://images.unsplash.com/photo-1563810142-ffedaf5625d8?q=80&w=400' },
    { title: 'San Ramon', sub: 'Múltiples salidas diarias', img: '/assets/SanRamon.jpg', fallback: 'https://images.unsplash.com/photo-1610940316496-e8d1a1bb70df?q=80&w=400' },
    { title: 'La Merced', sub: 'Múltiples salidas diarias', img: '/assets/LaMerced.jpg', fallback: 'https://images.unsplash.com/photo-1502021680532-838cfc650323?q=80&w=400' }
];

export function renderDestinations() {
    const container = document.getElementById('destinations-container');
    if (!container) return;

    container.innerHTML = destinations.map(dest => `
        <article class="card">
            <img src="${dest.img}" alt="${dest.title}" class="card__img" loading="lazy" onerror="this.src='${dest.fallback}';">
            <div class="card__body">
                <div>
                    <h3 class="dest-card__title">Viaja a <span>${dest.title}</span></h3>
                    <p class="dest-card__sub">${dest.sub}</p>
                </div>
                <a href="#" class="btn btn--primary u-w-full" aria-label="Ver horarios para viajar a ${dest.title}" style="margin-top: 20px;">VER HORARIOS</a>
            </div>
        </article>
    `).join('');
}
