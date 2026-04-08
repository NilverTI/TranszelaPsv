export const initCorporateForm = () => {
    const form = document.getElementById('corporate-form');
    if (!form) return;

    const serviceDateInput = document.getElementById('corporate-date');
    const submitBtn = form.querySelector('.corporate-form__submit');
    const whatsappNumber = '51950363088';

    if (serviceDateInput) {
        const today = new Date();
        const minDate = new Date(today.getTime() - (today.getTimezoneOffset() * 60000))
            .toISOString()
            .split('T')[0];
        serviceDateInput.min = minDate;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const formData = new FormData(form);
        const selectedExtras = Array.from(
            form.querySelectorAll('input[name="travelExtras"]:checked')
        ).map((input) => input.value);

        const notes = (formData.get('notes') || '').toString().trim();
        const messageLines = [
            '*SOLICITUD DE VIAJE CORPORATIVO - TRANSZELA*',
            '',
            `*Empresa:* ${formData.get('company')}`,
            `*Contacto:* ${formData.get('contactName')}`,
            `*Cargo / Area:* ${formData.get('contactRole') || 'No especificado'}`,
            `*Celular / WhatsApp:* ${formData.get('contactPhone')}`,
            `*Correo:* ${formData.get('contactEmail')}`,
            `*Tipo de servicio:* ${formData.get('serviceType')}`,
            `*Modalidad:* ${formData.get('serviceModality')}`,
            `*Origen:* ${formData.get('origin')}`,
            `*Destino:* ${formData.get('destination')}`,
            `*Fecha:* ${formData.get('serviceDate')}`,
            `*Hora de recojo:* ${formData.get('pickupTime')}`,
            `*Cantidad de pasajeros:* ${formData.get('passengers')}`,
            `*Unidad sugerida:* ${formData.get('suggestedUnit')}`,
            `*Frecuencia:* ${formData.get('serviceFrequency')}`,
            `*Requerimientos adicionales:* ${selectedExtras.length ? selectedExtras.join(', ') : 'Ninguno'}`,
            `*Observaciones:* ${notes || 'Sin observaciones adicionales'}`
        ];

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join('\n'))}`;
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Abriendo WhatsApp...';

        const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener');
        if (!whatsappWindow) {
            window.location.href = whatsappUrl;
        }

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 600);
    });
};
