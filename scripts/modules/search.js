import { destinations } from '../data/destinations.js';
import { showSchedulesModal } from './schedules.js';

export const initSearch = () => {
    // Determine context root path (for future use or fetch overrides if needed)
    
    setTimeout(() => {
        // Wait for header to be mounted by renderHeader()
        const originInput = document.getElementById('search-origen');
        const destInput = document.getElementById('search-destino');
        const originDropdown = document.getElementById('dropdown-origen');
        const destDropdown = document.getElementById('dropdown-destino');
        const btnSwap = document.getElementById('btn-swap');
        const dateBtns = document.querySelectorAll('.js-date-btn');
        const dateInput = document.getElementById('search-date');
        const lblElegir = document.getElementById('lbl-elegir');
        const btnBuscar = document.getElementById('btn-buscar');

        if (!originInput || !destInput) return;

        // Extract and sort unique locations (adding Lima explicitly if missing)
        const destNames = destinations.map(d => d.title);
        const allLocations = [...new Set(destNames)].sort();

        const renderDropdown = (input, dropdown) => {
            const val = input.value.toLowerCase().trim();
            const filtered = val === '' 
                ? allLocations 
                : allLocations.filter(loc => loc.toLowerCase().includes(val));
            
            if (filtered.length === 0) {
                dropdown.style.display = 'none';
                return;
            }

            dropdown.innerHTML = filtered.map(loc => `<li class="search-dropdown__item"><i class="fa-solid fa-location-dot" style="margin-right: 8px; color: var(--color-primary, #D7262E);"></i> ${loc}</li>`).join('');
            dropdown.style.display = 'block';
        };

        const setupAutocomplete = (input, dropdown, otherInput) => {
            input.addEventListener('input', () => {
                const val = input.value.toLowerCase().trim();
                const otherVal = otherInput.value.toLowerCase().trim();
                
                const filtered = allLocations.filter(loc => {
                    const locLower = loc.toLowerCase();
                    if (locLower === otherVal) return false;
                    return val === '' || locLower.includes(val);
                });
                
                if (filtered.length === 0) {
                    dropdown.style.display = 'none';
                    return;
                }

                dropdown.innerHTML = filtered.map(loc => `<li class="search-dropdown__item"><i class="fa-solid fa-location-dot" style="margin-right: 8px; color: var(--color-primary, #D7262E);"></i> ${loc}</li>`).join('');
                dropdown.style.display = 'block';
            });
            input.addEventListener('focus', () => {
                const val = input.value.toLowerCase().trim();
                const otherVal = otherInput.value.toLowerCase().trim();
                
                const filtered = allLocations.filter(loc => {
                    const locLower = loc.toLowerCase();
                    if (locLower === otherVal) return false;
                    return val === '' || locLower.includes(val);
                });
                
                if (filtered.length === 0) {
                    dropdown.style.display = 'none';
                    return;
                }

                dropdown.innerHTML = filtered.map(loc => `<li class="search-dropdown__item"><i class="fa-solid fa-location-dot" style="margin-right: 8px; color: var(--color-primary, #D7262E);"></i> ${loc}</li>`).join('');
                dropdown.style.display = 'block';
            });
            
            // Hide when clicking outside
            document.addEventListener('click', (e) => {
                if (e.target !== input && e.target !== dropdown && (!dropdown.contains(e.target))) {
                    dropdown.style.display = 'none';
                }
            });

            // Select item
            dropdown.addEventListener('click', (e) => {
                const item = e.target.closest('.search-dropdown__item');
                if (item) {
                    input.value = item.textContent.trim();
                    dropdown.style.display = 'none';
                }
            });
        };

        setupAutocomplete(originInput, originDropdown, destInput);
        setupAutocomplete(destInput, destDropdown, originInput);

        // Swap logic
        if (btnSwap) {
            btnSwap.addEventListener('click', () => {
                const temp = originInput.value;
                originInput.value = destInput.value;
                destInput.value = temp;
            });
        }

        // Date selection logic
        let selectedDateType = 'elegir'; // hoy, manana, elegir

        const updateDateActive = (activeBtn) => {
            dateBtns.forEach(btn => btn.classList.remove('search-pill__date-btn--active'));
            activeBtn.classList.add('search-pill__date-btn--active');
        };

        dateBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = btn.getAttribute('data-date');
                
                if (type === 'hoy' || type === 'manana') {
                    updateDateActive(btn);
                    selectedDateType = type;
                    lblElegir.textContent = 'Elegir';
                    dateInput.value = ''; // clear native date
                } else if (type === 'elegir') {
                    updateDateActive(btn);
                    selectedDateType = 'elegir';
                    if (dateInput && typeof dateInput.showPicker === 'function') {
                        try { dateInput.showPicker(); } catch(err) {}
                    } else if (dateInput) {
                        dateInput.focus();
                        dateInput.click();
                    }
                }
            });
        });

        if (dateInput) {
            // Configurar fecha mínima al Día de Hoy para bloquear el pasado
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            dateInput.min = `${yyyy}-${mm}-${dd}`;

            dateInput.addEventListener('change', (e) => {
                if (e.target.value) {
                    const btnElegir = document.getElementById('btn-elegir');
                    updateDateActive(btnElegir);
                    selectedDateType = 'elegir';
                    
                    // Format output (MM/DD)
                    const parts = e.target.value.split('-');
                    if(parts.length === 3) {
                        lblElegir.textContent = `${parts[2]}/${parts[1]}`;
                    }
                }
            });
        }

        // Submit Action
        if (btnBuscar) {
            btnBuscar.addEventListener('click', () => {
                if (!originInput.value || !destInput.value) {
                    alert('⚠️ Por favor, ingresa tu lugar de Origen y Destino.');
                    return;
                }
                if (originInput.value.toLowerCase().trim() === destInput.value.toLowerCase().trim()) {
                    alert('⚠️ El lugar de Origen y Destino no pueden ser iguales.');
                    return;
                }
                let dateMsg = selectedDateType;
                let formattedDateMsg = '';
                if (selectedDateType === 'elegir') {
                    dateMsg = dateInput.value ? dateInput.value : '⚠️ Fecha no seleccionada';
                    formattedDateMsg = dateInput.value;
                } else if (selectedDateType === 'hoy') {
                    const d = new Date();
                    formattedDateMsg = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                } else if (selectedDateType === 'manana') {
                    const d = new Date();
                    d.setDate(d.getDate() + 1);
                    formattedDateMsg = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                }
                
                showSchedulesModal(destInput.value, originInput.value, formattedDateMsg);
            });
        }
    }, 100); // 100ms delay ensures header DOM is injected
};
