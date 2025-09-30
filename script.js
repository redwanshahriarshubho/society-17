document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Mark as Read functionality for announcements
    document.querySelectorAll('.read-btn').forEach(button => {
        button.addEventListener('click', () => {
            const status = button.nextElementSibling;
            status.classList.remove('hidden');
            button.textContent = 'Marked';
            button.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
            button.classList.add('bg-gray-400', 'cursor-default');
            button.disabled = true;
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                const formContainer = contactForm.parentElement;
                formContainer.innerHTML = `
                    <div class="text-center py-8">
                        <div class="text-indigo-500 text-5xl mb-4">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-2">Thank You, ${name}!</h3>
                        <p class="text-gray-600">We've received your message and will contact you soon at ${email}.</p>
                    </div>
                `;
            }
        });
    }

    // Add fade-in animation to sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});