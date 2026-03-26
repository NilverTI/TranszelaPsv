/**
 * Claims & Complaints module
 */
export const initClaims = () => {
    const form = document.getElementById('claim-form');
    if (!form) return;

    const reasonSelect = document.getElementById('report-reason');
    const dynamicFieldContainer = document.getElementById('dynamic-field-container');
    const dynamicLabel = document.getElementById('dynamic-label');
    const dynamicInput = document.getElementById('dynamic-input');

    const updateDynamicField = (value) => {
        if (!value) {
            dynamicFieldContainer.style.display = 'none';
            dynamicInput.required = false;
            return;
        }

        dynamicFieldContainer.style.display = 'block';
        dynamicInput.required = true;
        
        // Add animation class
        dynamicFieldContainer.style.animation = 'none';
        void dynamicFieldContainer.offsetWidth; // trigger reflow
        dynamicFieldContainer.style.animation = 'fadeInSlideUp 0.4s ease forwards';

        if (value === 'usuario') {
            dynamicLabel.textContent = 'Nick del usuario/personal';
            dynamicInput.placeholder = 'Ingresa el nombre o nick...';
        } else {
            dynamicLabel.textContent = 'Indique la razón específica';
            dynamicInput.placeholder = 'Ej: Retraso de bus, Mal estado de asiento, etc.';
        }
    };

    reasonSelect.addEventListener('change', (e) => {
        updateDynamicField(e.target.value);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const reason = reasonSelect.options[reasonSelect.selectedIndex].text;
        const extraLabel = dynamicLabel.textContent;
        const extraValue = dynamicInput.value || 'N/A';
        const detail = document.getElementById('claim-detail').value.trim();

        if (!reasonSelect.value) {
            alert('Por favor, seleccione una razón para el reporte.');
            return;
        }

        if (detail.length < 10) {
            alert('Por favor, proporcione un detalle más específico (mínimo 10 caracteres).');
            return;
        }

        // Construct professional message
        const messageText = `*LIBRO DE RECLAMACIONES - TRANSZELA*\n` +
                            `---------------------------------------\n` +
                            `*Razón:* ${reason}\n` +
                            `*${extraLabel}:* ${extraValue}\n` +
                            `*Detalle:* ${detail}\n` +
                            `---------------------------------------\n` +
                            `_Favor de adjuntar evidencias (fotos/videos)_`;

        const whatsappNumber = '51933915043';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

        // Feedback to user
        const submitBtn = form.querySelector('.claim-form__submit');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Redirigiendo...';

        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            form.reset();
            updateDynamicField('');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 1000);
    });
};
