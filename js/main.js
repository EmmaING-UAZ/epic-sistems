document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('main-header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // Change header background on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('bg-dark-bg', 'shadow-lg');
        } else {
            header.classList.remove('bg-dark-bg', 'shadow-lg');
        }
    });

    // Catalog filter
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (categoryButtons.length > 0 && projectCards.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update button styles
                categoryButtons.forEach(btn => {
                    btn.classList.remove('bg-bright-green', 'text-dark-bg');
                    btn.classList.add('text-white');
                });
                button.classList.add('bg-bright-green', 'text-dark-bg');
                button.classList.remove('text-white');

                const category = button.textContent.toLowerCase().trim();

                projectCards.forEach(card => {
                    const cardCategory = card.dataset.category.toLowerCase().trim();
                    if (category === 'todos' || cardCategory === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                formFeedback.textContent = 'Por favor, completa todos los campos.';
                formFeedback.classList.add('text-red-500');
                return;
            }

            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formFeedback.textContent = 'Por favor, introduce un correo electrónico válido.';
                formFeedback.classList.add('text-red-500');
                return;
            }

            formFeedback.textContent = '¡Mensaje enviado con éxito!';
            formFeedback.classList.remove('text-red-500');
            formFeedback.classList.add('text-green-500');
            contactForm.reset();
        });
    }
});
