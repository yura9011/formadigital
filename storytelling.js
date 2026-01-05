/**
 * StorytellingController
 * Handles scroll-driven storytelling with IntersectionObserver
 */
class StorytellingController {
    constructor(containerSelector) {
        this.hero = document.querySelector(containerSelector);
        this.storyContainer = this.hero.querySelector('.story-container');
        this.steps = this.hero.querySelectorAll('.story-step');
        this.progressDots = document.querySelectorAll('.progress-dot');
        this.progressFill = document.querySelector('.progress-line-fill');
        this.scrollHint = document.querySelector('.scroll-hint');

        this.currentStep = 1;
        this.totalSteps = this.steps.length;

        // Bind methods
        this.handleScroll = this.handleScroll.bind(this);
    }

    init() {
        if (!this.hero || !this.steps.length) {
            console.warn('StorytellingController: Required elements not found');
            return;
        }

        // Set first step as active
        this.steps[0].classList.add('active');

        // Setup scroll listener
        window.addEventListener('scroll', this.handleScroll, { passive: true });

        // Setup dot navigation
        this.setupDotNavigation();

        // Initial state
        this.handleScroll();

        console.log('StorytellingController initialized with', this.totalSteps, 'steps');
    }

    handleScroll() {
        const heroRect = this.hero.getBoundingClientRect();
        const heroHeight = this.hero.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress within the hero section
        // heroRect.top starts at 0 and goes negative as we scroll
        const scrolled = -heroRect.top;
        const scrollableHeight = heroHeight - viewportHeight;
        const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

        // Determine which step we're on (1-indexed)
        const stepProgress = progress * this.totalSteps;
        const newStep = Math.max(1, Math.min(this.totalSteps, Math.ceil(stepProgress) || 1));

        if (newStep !== this.currentStep) {
            this.updateStep(newStep);
        }

        // Update progress indicator
        this.updateProgressIndicator(progress);

        // Hide scroll hint after first step
        if (this.scrollHint) {
            if (progress > 0.05) {
                this.scrollHint.classList.add('hidden');
            } else {
                this.scrollHint.classList.remove('hidden');
            }
        }
    }

    updateStep(newStep) {
        // Remove active from all steps
        this.steps.forEach(step => step.classList.remove('active'));

        // Add active to current step
        const activeStep = this.hero.querySelector(`[data-step="${newStep}"]`);
        if (activeStep) {
            activeStep.classList.add('active');
        }

        // Update dots
        this.progressDots.forEach((dot, index) => {
            const dotStep = index + 1;
            dot.classList.remove('active', 'completed');

            if (dotStep === newStep) {
                dot.classList.add('active');
            } else if (dotStep < newStep) {
                dot.classList.add('completed');
            }
        });

        this.currentStep = newStep;
    }

    updateProgressIndicator(progress) {
        if (this.progressFill) {
            this.progressFill.style.height = `${progress * 100}%`;
        }
    }

    setupDotNavigation() {
        this.progressDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const targetStep = parseInt(dot.dataset.target, 10);
                this.scrollToStep(targetStep);
            });
        });
    }

    scrollToStep(stepNumber) {
        const heroHeight = this.hero.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollableHeight = heroHeight - viewportHeight;

        // Calculate target scroll position
        const stepProgress = (stepNumber - 1) / (this.totalSteps - 1);
        const targetScroll = this.hero.offsetTop + (scrollableHeight * stepProgress);

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    }

    destroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const storytelling = new StorytellingController('.storytelling-hero');
    storytelling.init();
});
