export const initChatbot = () => {
    // Wait slightly to ensure footer HTML is fully injected
    setTimeout(() => {
        const btn = document.getElementById('chatbot-btn');
        const widget = document.getElementById('chatbot-widget');
        const closeBtn = document.getElementById('chatbot-close');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');

        if (!btn || !widget) return;

        // Open Widget
        btn.addEventListener('click', () => {
            widget.style.display = 'block';
            btn.style.display = 'none'; // Hide the floating button while widget is open
            input.focus();
        });

        // Close Widget
        closeBtn.addEventListener('click', () => {
            widget.style.display = 'none';
            btn.style.display = 'flex'; // Restore flying button
        });

        // Send to WhatsApp
        sendBtn.addEventListener('click', () => {
            const text = input.value.trim();
            if (!text) {
                alert('⚠️ Por favor escribe tu consulta o requerimiento de ayuda antes de enviarlo.');
                input.focus();
                return;
            }

            // Exactly the number requested by the user
            const phone = '51950363088';
            
            // Format nice message for customer service
            const message = encodeURIComponent(`Hola Transzela, soy un cliente desde la web y necesito ayuda con lo siguiente:\n\n"${text}"`);
            
            // Open WA
            const url = `https://wa.me/${phone}?text=${message}`;
            window.open(url, '_blank');
            
            // Optional: close widget and clear text after sending
            widget.style.display = 'none';
            btn.style.display = 'flex';
            input.value = '';
        });
    }, 150);
};
