const SCHEDULE_OVERRIDES = {
    Lima: {
        origin: 'Huancayo',
        durationMin: 430,
        terminal: 'Terminal Central Huancayo',
        departures: ['05:40', '09:15', '15:20', '22:10'],
        services: ['Premium Inca Suite', 'Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 46
    },
    Huancayo: {
        origin: 'Lima',
        durationMin: 430,
        terminal: 'Terminal Yerbateros',
        departures: ['06:00', '09:30', '14:45', '22:20'],
        services: ['Inca Suite', 'Premium Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 48
    },
    Jauja: {
        origin: 'Lima',
        durationMin: 395,
        terminal: 'Terminal Yerbateros',
        departures: ['06:20', '10:10', '15:00', '22:40'],
        services: ['Inca Suite', 'Premium Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 44
    },
    Huaraz: {
        origin: 'Lima',
        durationMin: 485,
        terminal: 'Terminal Plaza Norte',
        departures: ['07:00', '11:15', '17:10', '22:50'],
        services: ['Inca Suite', 'Servicio VIP', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 58
    },
    Huacho: {
        origin: 'Lima',
        durationMin: 150,
        terminal: 'Terminal Norte',
        departures: ['05:50', '10:30', '13:20', '18:45'],
        services: ['Servicio Local', 'Premium Inca Suite', 'Servicio Directo', 'Servicio Tarde'],
        baseFare: 24
    },
    Chancay: {
        origin: 'Lima',
        durationMin: 95,
        terminal: 'Terminal Norte',
        departures: ['05:30', '09:10', '12:40', '18:00'],
        services: ['Servicio Local', 'Servicio Local', 'Premium Inca Suite', 'Servicio Tarde'],
        baseFare: 18
    },
    Huaycan: {
        origin: 'Lima',
        durationMin: 70,
        terminal: 'Terminal Este',
        departures: ['05:20', '09:50', '13:10', '19:15'],
        services: ['Servicio Urbano', 'Servicio Express', 'Premium Inca Suite', 'Servicio Tarde'],
        baseFare: 15
    },
    'La Oroya': {
        origin: 'Lima',
        durationMin: 220,
        terminal: 'Terminal Yerbateros',
        departures: ['06:10', '09:45', '14:30', '21:00'],
        services: ['Inca Suite', 'Servicio Directo', 'Premium Inca Suite', 'Servicio Nocturno'],
        baseFare: 31
    },
    Tarma: {
        origin: 'Lima',
        durationMin: 300,
        terminal: 'Terminal Yerbateros',
        departures: ['06:40', '10:20', '15:10', '22:00'],
        services: ['Inca Suite', 'Premium Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 36
    },
    'Cerro de Pasco': {
        origin: 'Lima',
        durationMin: 430,
        terminal: 'Terminal Yerbateros',
        departures: ['06:30', '10:40', '16:10', '22:30'],
        services: ['Inca Suite', 'Premium Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 52
    },
    Huanuco: {
        origin: 'Lima',
        durationMin: 500,
        terminal: 'Terminal Yerbateros',
        departures: ['07:10', '11:40', '17:20', '23:00'],
        services: ['Inca Suite', 'Servicio VIP', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 62
    },
    'La Merced': {
        origin: 'Lima',
        durationMin: 450,
        terminal: 'Terminal Yerbateros',
        departures: ['06:50', '10:50', '16:00', '22:15'],
        services: ['Premium Inca Suite', 'Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 56
    },
    'San Ramon': {
        origin: 'Lima',
        durationMin: 470,
        terminal: 'Terminal Yerbateros',
        departures: ['06:45', '10:30', '15:40', '22:05'],
        services: ['Premium Inca Suite', 'Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 58
    },
    Cajacay: {
        origin: 'Lima',
        durationMin: 400,
        terminal: 'Terminal Plaza Norte',
        departures: ['06:50', '10:20', '15:10', '21:30'],
        services: ['Servicio Directo', 'Inca Suite', 'Premium Inca Suite', 'Servicio Nocturno'],
        baseFare: 45
    },
    Tunan: {
        origin: 'Lima',
        durationMin: 400,
        terminal: 'Terminal Yerbateros',
        departures: ['06:10', '09:40', '14:50', '21:50'],
        services: ['Inca Suite', 'Premium Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 42
    },
    Concepcion: {
        origin: 'Lima',
        durationMin: 410,
        terminal: 'Terminal Yerbateros',
        departures: ['06:05', '09:35', '14:55', '22:15'],
        services: ['Premium Inca Suite', 'Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 45
    },
    Junin: {
        origin: 'Lima',
        durationMin: 350,
        terminal: 'Terminal Yerbateros',
        departures: ['06:30', '10:00', '15:20', '21:40'],
        services: ['Inca Suite', 'Premium Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 38
    },
    Huayre: {
        origin: 'Lima',
        durationMin: 360,
        terminal: 'Terminal Yerbateros',
        departures: ['06:25', '09:50', '15:30', '21:45'],
        services: ['Servicio Directo', 'Inca Suite', 'Premium Inca Suite', 'Servicio Nocturno'],
        baseFare: 39
    },
    Shelby: {
        origin: 'Lima',
        durationMin: 370,
        terminal: 'Terminal Yerbateros',
        departures: ['06:40', '10:10', '15:40', '21:55'],
        services: ['Inca Suite', 'Premium Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 40
    },
    Carhuamayo: {
        origin: 'Lima',
        durationMin: 380,
        terminal: 'Terminal Yerbateros',
        departures: ['06:35', '10:20', '15:50', '22:10'],
        services: ['Premium Inca Suite', 'Inca Suite', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 41
    },
    Ambo: {
        origin: 'Lima',
        durationMin: 470,
        terminal: 'Terminal Yerbateros',
        departures: ['06:50', '11:10', '16:50', '22:40'],
        services: ['Inca Suite', 'Servicio VIP', 'Servicio Directo', 'Servicio Nocturno'],
        baseFare: 55
    },
    Carpapata: {
        origin: 'Lima',
        durationMin: 330,
        terminal: 'Terminal Yerbateros',
        departures: ['06:45', '10:40', '15:20', '21:30'],
        services: ['Servicio Directo', 'Inca Suite', 'Premium Inca Suite', 'Servicio Nocturno'],
        baseFare: 35
    }
};

const DEFAULT_SERVICE_LABELS = [
    'Inca Suite',
    'Premium Inca Suite',
    'Servicio Directo',
    'Servicio Nocturno'
];

const ensureModal = () => {
    let modal = document.getElementById('schedule-modal');
    if (modal) return modal;

    document.body.insertAdjacentHTML('beforeend', `
        <div class="schedule-modal" id="schedule-modal" aria-hidden="true">
            <div class="schedule-modal__backdrop" data-schedule-close></div>
            <div class="schedule-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="schedule-modal-title">
                <button class="schedule-modal__close" type="button" aria-label="Cerrar modal" data-schedule-close>
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="schedule-modal__hero">
                    <span class="schedule-modal__badge">
                        <i class="fa-solid fa-clock"></i>
                        Horarios referenciales
                    </span>
                    <h3 class="schedule-modal__title" id="schedule-modal-title">Horarios disponibles</h3>
                    <p class="schedule-modal__subtitle">
                        Consulta una muestra visual de salidas referenciales para esta ruta.
                    </p>
                </div>
                <div class="schedule-modal__body">
                    <div class="schedule-modal__route"></div>
                    <div class="schedule-modal__list"></div>
                    <div class="schedule-modal__note">
                        <i class="fa-solid fa-circle-info"></i>
                        <span>Horarios referenciales. Consulta disponibilidad actual al momento de reservar.</span>
                    </div>

                </div>
            </div>
        </div>
    `);

    modal = document.getElementById('schedule-modal');
    const closeTargets = modal.querySelectorAll('[data-schedule-close]');

    closeTargets.forEach((element) => {
        element.addEventListener('click', () => closeModal(modal));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('schedule-modal--active')) {
            closeModal(modal);
        }
    });

    return modal;
};

const closeModal = (modal) => {
    modal.classList.remove('schedule-modal--active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('body--modal-open');
};

const openModal = (modal) => {
    modal.classList.add('schedule-modal--active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('body--modal-open');
};

const toMinutes = (timeText) => {
    const [hours, minutes] = timeText.split(':').map(Number);
    return (hours * 60) + minutes;
};

const toTimeString = (totalMinutes) => {
    const normalized = ((totalMinutes % 1440) + 1440) % 1440;
    const hours = Math.floor(normalized / 60).toString().padStart(2, '0');
    const minutes = (normalized % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

const toDurationString = (durationMin) => {
    const hours = Math.floor(durationMin / 60);
    const minutes = durationMin % 60;
    return `${hours}h ${minutes.toString().padStart(2, '0')}min`;
};

const getSeed = (text) => Array.from(text).reduce((acc, char) => acc + char.charCodeAt(0), 0);

const buildFallbackConfig = (destination, origin) => {
    const seed = getSeed(destination);
    const durationOptions = [170, 220, 280, 340, 390, 430, 480];
    const fareOptions = [22, 28, 34, 39, 45, 52, 60];
    const departureSets = [
        ['09:15', '14:20', '21:00'],
        ['10:00', '15:10', '22:00'],
        ['09:40', '16:00', '22:40']
    ];

    return {
        origin,
        durationMin: durationOptions[seed % durationOptions.length],
        terminal: origin === 'Lima' ? 'Terminal Yerbateros' : `Terminal ${origin}`,
        departures: departureSets[seed % departureSets.length],
        services: DEFAULT_SERVICE_LABELS,
        baseFare: fareOptions[seed % fareOptions.length]
    };
};

const getScheduleConfig = (destination, origin) => {
    const override = SCHEDULE_OVERRIDES[destination];
    if (override) {
        return {
            ...override,
            origin: origin || override.origin
        };
    }

    return buildFallbackConfig(destination, origin || 'Lima');
};

const buildScheduleRows = (destination, origin) => {
    const config = getScheduleConfig(destination, origin);
    const durationText = toDurationString(config.durationMin);

    return {
        destination,
        origin: config.origin,
        terminal: config.terminal,
        rows: config.departures
            .filter(dep => {
                const hour = parseInt(dep.split(':')[0], 10);
                return hour >= 5; // Ampliamos el rango para un mejor orden y mas opciones, desde las 5am
            })
            .sort((a, b) => a.localeCompare(b)) // Asegura siempre orden cronológico perfecto
            .slice(0, 4) // Mostramos hasta 4 para llenar bien la cuadricula visual
            .map((departure, index) => {
                const seed = getSeed(`${destination}-${departure}-${index}`);
                const arrival = toTimeString(toMinutes(departure) + config.durationMin);
                const seats = 8 + (seed % 19);
                const platform = (seed % 6) + 1;

                return {
                    departure,
                    arrival,
                    duration: durationText,
                    service: config.services[index] || DEFAULT_SERVICE_LABELS[index] || 'Servicio Programado',
                    seats: `${seats} asientos`,
                    platform: `Puerta ${platform}`
                };
            })
    };
};

const renderModalContent = (modal, destination, origin) => {
    const data = buildScheduleRows(destination, origin);
    const title = modal.querySelector('.schedule-modal__title');
    const route = modal.querySelector('.schedule-modal__route');
    const list = modal.querySelector('.schedule-modal__list');

    title.textContent = `Horarios para ${data.destination}`;
    route.innerHTML = `
        <div class="schedule-route__main">
            <div>
                <span class="schedule-route__label">Ruta principal</span>
                <strong class="schedule-route__value">${data.origin} -> ${data.destination}</strong>
            </div>
            <div>
                <span class="schedule-route__label">Embarque</span>
                <strong class="schedule-route__value">${data.terminal}</strong>
            </div>
        </div>
        <div class="schedule-route__meta">
            <span><i class="fa-solid fa-calendar-day"></i> Salidas diarias referenciales</span>
            <span><i class="fa-solid fa-user-group"></i> Horario sujeto a coordinacion</span>
        </div>
    `;

    let dateLine = modal.dataset.searchDate ? `📅 *Fecha:* ${modal.dataset.searchDate}\n` : '';

    list.innerHTML = data.rows.map((row) => {
        const text = `Hola *Transzela*, deseo reservar este pasaje:\n\n📍 *Ruta:* ${data.origin} -> ${data.destination}\n${dateLine}⏰ *Salida:* ${row.departure}\n🛋️ *Servicio:* ${row.service}`;
        const href = `https://wa.me/51950363088?text=${encodeURIComponent(text)}`;

        return `
        <a href="${href}" target="_blank" class="schedule-card" style="text-decoration: none; color: inherit; display: block; cursor: pointer;">
            <div class="schedule-card__top">
                <span class="schedule-card__service">${row.service}</span>
            </div>
            <div class="schedule-card__times">
                <div>
                    <span class="schedule-card__label">Salida</span>
                    <strong class="schedule-card__time">${row.departure}</strong>
                </div>
                <div class="schedule-card__arrow">
                    <i class="fa-solid fa-arrow-right" style="color: #25D366;"></i>
                </div>
                <div>
                    <span class="schedule-card__label">Llegada</span>
                    <strong class="schedule-card__time">${row.arrival}</strong>
                </div>
            </div>
            <div class="schedule-card__bottom">
                <span><i class="fa-brands fa-whatsapp" style="color: #25D366;"></i> Comprar</span>
                <span><i class="fa-solid fa-door-open"></i> ${row.platform}</span>
                <span><i class="fa-solid fa-chair"></i> ${row.seats}</span>
            </div>
        </a>
        `;
    }).join('');
};

export const showSchedulesModal = (destination, origin, dateMsg = '') => {
    const modal = ensureModal();
    if (dateMsg) {
        modal.dataset.searchDate = dateMsg;
        const title = modal.querySelector('.schedule-modal__title');
        // Will be overwritten by renderModalContent, let's pass dateMsg to renderModalContent or handle it
    } else {
        modal.dataset.searchDate = '';
    }
    renderModalContent(modal, destination, origin);
    openModal(modal);
};

export const initScheduleModal = () => {
    const triggers = document.querySelectorAll('[data-schedule-destination]');
    if (!triggers.length) return;

    const modal = ensureModal();

    triggers.forEach((trigger) => {
        if (trigger.dataset.scheduleBound === 'true') return;

        trigger.dataset.scheduleBound = 'true';
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            const destination = trigger.dataset.scheduleDestination;
            const origin = trigger.dataset.scheduleOrigin || 'Lima';

            renderModalContent(modal, destination, origin);
            openModal(modal);
        });
    });
};
