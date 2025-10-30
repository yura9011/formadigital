document.addEventListener('DOMContentLoaded', () => {

    // --- Sticky Header ---
    const header = document.getElementById('page-header');
    if (header) {
        const headerInitialBg = header.classList.contains('bg-transparent');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('bg-white/80', 'shadow-md', 'backdrop-blur-sm');
                if (headerInitialBg) {
                    header.classList.remove('bg-transparent');
                }
            } else {
                header.classList.remove('bg-white/80', 'shadow-md', 'backdrop-blur-sm');
                if (headerInitialBg) {
                    header.classList.add('bg-transparent');
                }
            }
        });
    }

    // --- Mobile Menu ---
    const menuButton = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    const toggleMenu = () => {
        if (!mobileMenu || !menuIcon || !closeIcon || !header) return;

        const isOpening = mobileMenu.classList.contains('translate-x-full');
        mobileMenu.classList.toggle('translate-x-full');
        mobileMenu.classList.toggle('translate-x-0');
        document.body.style.overflow = isOpening ? 'hidden' : 'auto';
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
        header.classList.toggle('bg-white/80', isOpening);
        header.classList.toggle('shadow-md', isOpening);
        header.classList.toggle('backdrop-blur-sm', isOpening);
    };

    menuButton?.addEventListener('click', toggleMenu);

    mobileMenu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('translate-x-full')) {
                toggleMenu();
            }
        });
    });

    // --- Portfolio Filtering ---
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioItems = document.querySelectorAll<HTMLElement>('.portfolio-item');

    if (filterButtons.length > 0 && portfolioItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = (button as HTMLElement).dataset.filter;
                if (!filter) return;

                // Update button styles
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-brand-primary', 'text-white', 'shadow-md');
                    btn.classList.add('bg-gray-100', 'text-neutral-medium', 'hover:bg-brand-light');
                });
                button.classList.add('bg-brand-primary', 'text-white', 'shadow-md');
                button.classList.remove('bg-gray-100', 'text-neutral-medium', 'hover:bg-brand-light');

                // Filter items - using a small delay for a fade effect
                portfolioItems.forEach(item => {
                    item.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';

                    setTimeout(() => {
                        if (filter === 'Todos' || item.dataset.category === filter) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            item.style.display = 'none';
                        }
                    }, 300);
                });
            });
        });
    }

    // --- Dynamic Year ---
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear().toString();
    }

    // --- Functional Contact Form ---
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const statusDiv = document.getElementById('form-status');
            const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');

            if (!statusDiv || !submitButton) return;

            const data = new FormData(form);
            const originalButtonHTML = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...`;

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                statusDiv.innerHTML = ''; // Clear previous status
                if (response.ok) {
                    statusDiv.innerHTML = `<p class="text-green-700 font-semibold text-lg">¡Gracias! Tu mensaje ha sido enviado.</p>`;
                    form.reset();
                    form.style.display = 'none';
                } else {
                    const responseData = await response.json();
                    // FIX: Replaced Object.hasOwn with Object.prototype.hasOwnProperty.call for better browser compatibility.
                    if (Object.prototype.hasOwnProperty.call(responseData, 'errors')) {
                        statusDiv.innerHTML = `<p class="text-red-600 font-medium">${responseData["errors"].map((error: any) => error["message"]).join(", ")}</p>`;
                    } else {
                        throw new Error('Network response was not ok.');
                    }
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonHTML;
                }
            } catch (error) {
                statusDiv.innerHTML = `<p class="text-red-600 font-medium">Oops! Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>`;
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonHTML;
            }
        });
    }
});
