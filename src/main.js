// Función para scroll suave a secciones
function smoothScrollTo(target) {
    if (target === '#inicio' || target === '#') {
        // Si el target es #inicio o #, ir al principio de la página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Si es un ID de sección, buscar la sección y scrollear a ella
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const components = [
        'hero', 'que-hacemos',
        'metodologia', 'planes',
        'beneficios', 'visuales', 'contact', 'footer'
    ];

    const fetchComponent = async (componentName, container) => {
        try {
            const response = await fetch(`./src/components/${componentName}.html`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.text();
        } catch (error) {
            console.error(`Error loading ${componentName} component:`, error);
            container.innerHTML = `<p class="text-red-500">Error loading ${componentName}.</p>`;
            return null;
        }
    };

    const loadComponents = async () => {
        // Load header and mobile menu first as they are critical for navigation
        const headerPlaceholder = document.querySelector('header-component');
        if (headerPlaceholder) {
            const headerHTML = await fetchComponent('header', headerPlaceholder);
            if (headerHTML) headerPlaceholder.outerHTML = headerHTML;
        }

        const mobileMenuPlaceholder = document.querySelector('mobile-menu-component');
        if (mobileMenuPlaceholder) {
            // Assuming mobile menu is part of header.html or its own file
            // If it's in its own file, e.g., mobile-menu.html
            // const mobileMenuHTML = await fetchComponent('mobile-menu', mobileMenuPlaceholder);
            // if (mobileMenuHTML) mobileMenuPlaceholder.outerHTML = mobileMenuHTML;
        }

        // Load the rest of the components
        const componentPromises = components.map(name => {
            const placeholder = document.querySelector(`${name}-section`);
            if (placeholder) {
                return fetchComponent(name, placeholder).then(html => {
                    if (html) placeholder.outerHTML = html;
                });
            }
            return Promise.resolve();
        });

        await Promise.all(componentPromises);

        // After all components are loaded, initialize animations and other scripts
        console.log("All components loaded. Initializing scripts...");
        setTimeout(() => {
            initializeScrollAnimations();
            initializeHeaderBehavior();
            initializeMobileMenu();
            initializeServicesSection();
            initializeContactForm();
            initializeEnhancedAnimations();
            
            // Call updateLanguage to translate newly loaded components
            // Ensure currentLang is defined, it's globally managed by translations.js
            const currentLang = localStorage.getItem('preferredLanguage') || 'es';
            if (window.updateLanguage) {
                window.updateLanguage(currentLang);
            }
        }, 100); // A small delay to ensure the DOM is fully painted
    };

    const initializeContactForm = () => {
        const form = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');

        if (!form) {
            console.log('Contact form not found');
            return;
        }

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const submitButton = form.querySelector('button[type="submit"]');

            // Disable button and show loading state
            submitButton.disabled = true;
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = 'Enviando...';

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.innerHTML = '<p class="text-green-500 font-medium">¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>';
                    form.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                formStatus.innerHTML = '<p class="text-red-500 font-medium">Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>';
            } finally {
                // Re-enable button and restore original text
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            }
        });
    };

    const initializeServicesSection = () => {
        const queHacemosSection = document.getElementById('que-hacemos');
        if (!queHacemosSection) {
            return;
        }

        // Only run this script if we are on a large screen
        if (window.innerWidth < 1024) {
            return;
        }

        const serviceItems = queHacemosSection.querySelectorAll('.service-item');
        const serviceVisuals = queHacemosSection.querySelectorAll('.service-visual');

        if (serviceItems.length === 0) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const serviceId = entry.target.dataset.service;

                    // Hide all visuals
                    serviceVisuals.forEach(visual => {
                        visual.classList.remove('active');
                    });

                    // Show the corresponding visual
                    const activeVisual = queHacemosSection.querySelector(`#visual-${serviceId}`);
                    if (activeVisual) {
                        activeVisual.classList.add('active');
                    }
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.6 // Trigger when 60% of the item is visible
        });

        serviceItems.forEach(item => {
            observer.observe(item);
        });

        // Simple CSS injection for the active state, if not already present
        if (!document.getElementById('service-visual-styles')) {
            const style = document.createElement('style');
            style.id = 'service-visual-styles';
            style.innerHTML = `
                .service-visual {
                    position: absolute;
                    opacity: 0;
                    transform: scale(0.9);
                    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
                }
                .service-visual.active {
                    opacity: 1;
                    transform: scale(1);
                }
            `;
            document.head.appendChild(style);
        }
    };

    const initializeScrollAnimations = () => {
        console.log("Initializing scroll animations...");
        const sections = document.querySelectorAll('section');
        console.log(`Found ${sections.length} sections to observe.`);

        if (sections.length === 0) {
            console.error("No sections found to animate. This might be a timing issue.");
            return;
        }

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.target.id, 'is now visible.');
                    entry.target.classList.add('is-visible');
                    // Add additional animation effects
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    };

    const initializeHeaderBehavior = () => {
        const header = document.getElementById('page-header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('bg-warm-card', 'shadow-lg', 'backdrop-blur-sm');
                } else {
                    header.classList.remove('bg-warm-card', 'shadow-lg', 'backdrop-blur-sm');
                }
            });
        }
    };

    const initializeMobileMenu = () => {
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        if (menuToggle && mobileMenu && menuIcon && closeIcon) {
            menuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('translate-x-full');
                menuIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            });

            // Close menu when a link is clicked
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('translate-x-full');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                });
            });
        }
    };

    // Enhanced animations and effects
    const initializeEnhancedAnimations = () => {
        // Add floating animation to hero elements
        const heroElements = document.querySelectorAll('.floating-element');
        heroElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
        });

        // Add enhanced hover effects to cards
        const cards = document.querySelectorAll('.card-hover');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('transform', 'hover:-translate-y-1');
            });

            card.addEventListener('mouseleave', () => {
                card.classList.remove('transform', 'hover:-translate-y-1');
            });
        });

        // Add parallax effect to hero section
        const hero = document.getElementById('inicio');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
                hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
            });
        }

        // Enhanced service item interactions
        const serviceItems = document.querySelectorAll('.service-item-enhanced');
        serviceItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('border-l-4', 'border-gradient-start');
                item.classList.add('transform', 'translate-x-1');
            });

            item.addEventListener('mouseleave', () => {
                item.classList.remove('border-l-4', 'border-gradient-start');
                item.classList.remove('transform', 'translate-x-1');
            });
        });
    };

    loadComponents();
});