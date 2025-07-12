document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const loginButton = document.getElementById('logins');
    const modal = document.querySelector('.container_login');
    const closeButton = document.querySelector('.cerrar');
    const body = document.body;

    // Abrir modal
    function openModal() {
        modal.classList.add('visible');
        body.classList.add('modal-open');
    }

    // Cerrar modal
    function closeModal() {
        modal.classList.remove('visible');
        body.classList.remove('modal-open');
    }

    // Event listeners
    loginButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);

    // Cerrar al hacer clic fuera del modal
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Scroll suave para el botón DESCÚBRELO
    document.getElementById('open').addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector('.h2_header2');
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Observer para animaciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar elementos
    const elementsToObserve = document.querySelectorAll('.container_principalmain');
    elementsToObserve.forEach(el => observer.observe(el));
});