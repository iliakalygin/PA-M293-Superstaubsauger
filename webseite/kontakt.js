// Formular-Referenz
const form = document.getElementById('contact-form');

// Formular-Übermittlungs-Event-Listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindern, dass das Formular abgeschickt wird

    // Formulardaten abrufen
    const formData = new FormData(form);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const timestamp = new Date().toLocaleString(); // Aktueller Zeitstempel

    // Validierung
    if (!name || !email || !subject || !message) {
        console.error('Bitte füllen Sie alle Pflichtfelder aus.');
        return;
    }

    // Ausgabe in die Konsole
    console.log(`Name: ${name}`);
    console.log(`Telefon: ${phone || 'Nicht angegeben'}`);
    console.log(`E-Mail: ${email}`);
    console.log(`Thema: ${subject}`);
    console.log(`Nachricht: ${message}`);
    console.log(`Zeitstempel: ${timestamp}`);

});