1. File Length and The "Scroll of Death"
HTML: Never allow index.html to exceed 200 lines. It should strictly act as a skeleton (layout shell) that imports or mounts other sections.
CSS/JS: No stylesheet or script file should exceed 400 lines.
If a file approaches these limits, break it up immediately into partials, modules, or components.
Treat a 1000-line HTML file as a critical failure of architecture.
2. Atomic Design & Component-First Mentality
Atoms, Molecules, Organisms: Treat every visual element as an encapsulated object.
Atom: A button, an input field, an icon.
Molecule: A search bar (input + button).
Organism: A navigation bar (logo + links + search bar).
Do not code a "page"; code a collection of reusable components that assemble to make a page.
If you copy-paste a block of HTML code more than once, it must become a reusable Component or Template.
3. Single Responsibility Principle (SRP) - The "Separation of Vibe"
Structure vs. Style vs. Behavior:
HTML handles Structure only. (No inline styles, no inline JS onclick).
CSS handles Visuals only.
JS handles Interaction only.
A CSS file named navbar.css should not contain styles for the footer.
A Javascript file named animations.js should not handle form validation.
4. Modular Asset Loading
Avoid the "God Style" (style.css) and "God Script" (script.js).
Break assets down by feature or component:
styles/components/buttons.css
styles/layouts/header.css
js/interactions/modal.js
Use modern imports (<link rel="stylesheet"> for distinct CSS files or ES6 modules import for JS) to keep the main entry point clean.
5. Semantic & Descriptive Naming
HTML Tags: Use Semantic HTML. Never use a <div> when a <nav>, <header>, <section>, <article>, or <footer> will do.
Class Names: Avoid generic names like .box, .wrapper-2, or .red-text.
Bad: <div class="top-thing">
Good: <header class="site-header">
Adopt a naming convention (like BEM or similar) to avoid style collisions (e.g., .card__title, .card__button--primary).
6. Design Tokens (Scalability Mindset)
Never hardcode "magic values" (hex codes, pixel sizes) directly into component CSS.
Use CSS Variables (Custom Properties) for all theming:
--color-primary
--spacing-md
--font-size-lg
This allows you to change the entire "vibe" (theme) of the site by modifying one root file, rather than hunting down 50 different hex codes.
7. DOM Hygiene & Function Size
JS Logic: Keep event handler functions under 20 lines.
If a JavaScript function modifies the DOM, calculates data, and fetches an API, split it immediately.
HTML Depth: Avoid "Div Soup." If you are nesting elements more than 4-5 levels deep, refactor the structure.
8. Dynamic Injection over Static Bloat
To keep index.html small, do not write the content of modals, complex footers, or secondary slides directly inside it.
Strategy: Use JavaScript to fetch and inject HTML snippets for secondary content, or use a simple build tool (like Vite, Parcel, or even simple PHP includes) to assemble the page.
Rule: If the user doesn't see it on page load, it shouldn't clog up the initial HTML view source.
9. Mobile-First & Responsive Isolation
Do not write a massive media query block at the bottom of a CSS file.
Co-locate responsive logic with the component.
Strict Rule: If a component breaks on mobile, fix the component's CSS specifically; do not patch it with a global override.
