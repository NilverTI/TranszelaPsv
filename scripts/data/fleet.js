export const fleet = [
    { title: 'Busscar DD 8x2 Mercedes Vissta Buss DD - O500RSDD', img: 'assets/images/fleet/Bus.png' },
    { title: 'Panoramico DD 6x2 Scania Nuevo', img: 'assets/images/fleet/Bus.png' },
    { title: 'Comil Invictus DD Volvo Comil Invictus', img: 'assets/images/fleet/Bus.png' },
    { title: 'Comil Invictus HD 6x2 Scania Nuevo', img: 'assets/images/fleet/Bus.png' },
    { title: 'Comil Invictus DD 2023 6x2 15M Mercedes Campione', img: 'assets/images/fleet/Bus.png' },
    { title: 'Comil Invictus DD 2023 8x2 15M Mercedes Campione', img: 'assets/images/fleet/Bus.png' },
    { title: 'Irizar i6S 6x2 Scania Cabina Br 6', img: 'assets/images/fleet/Bus.png' },
    { title: 'Marcopolo Paradiso G8 1600 LD Parabrisa dividido', img: 'assets/images/fleet/Bus.png' },
    { title: 'G8 1800 DD 6x2 Scania Paradiso G8 1800 - Scania', img: 'assets/images/fleet/Bus.png' },
    { title: 'G7 1200 6x2 Mercedes Paradiso G7 1200', img: 'assets/images/fleet/Bus.png' },
    { title: 'G7 1800 DD 8x2 Scania G7 1800 DD', img: 'assets/images/fleet/Bus.png' },
    { title: 'G7 1800 DD 6x2 15M Scania Paradiso 15M', img: 'assets/images/fleet/Bus.png' },
    { title: 'New G7 1800 DD Mercedes Paradiso', img: 'assets/images/fleet/Bus.png' },
    { title: 'G6 1800 DD 6x2 Scania PERU SERVER', img: 'assets/images/fleet/Bus.png' }
];

export function renderFleet() {
    const container = document.getElementById('fleet-container');
    if (!container) return;

    container.innerHTML = fleet.map(bus => `
        <article class="fleet-card js-lightbox-trigger" data-img="${bus.img}" data-title="${bus.title}">
            <div class="fleet-card__img-container">
                <img src="${bus.img}" alt="${bus.title}" class="fleet-card__img" loading="lazy">
            </div>
            <div class="fleet-card__content">
                <h3 class="fleet-card__title">${bus.title}</h3>
            </div>
        </article>
    `).join('');
}
