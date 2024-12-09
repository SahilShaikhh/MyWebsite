document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        console.log('vabhad');
        event.preventDefault();
        alert('Message sent!');
    });
});
