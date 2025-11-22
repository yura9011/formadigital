# Project Context for FormaDigital

## Project Overview
- **Project Name**: FormaDigital
- **Directory**: D:/tareas/formadigital-main
- **Type**: Static website (HTML/CSS/JS) with build tools
- **Last Updated**: November 22, 2025

## File Structure
```
D:\tareas\formadigital-main\
├───.gitignore
├───.nojekyll
├───CNAME
├───CODING_GUIDELINES.md
├───contacto.html
├───cookies.html
├───favicon.svg
├───index.html
├───nosotros.html
├───package-lock.json
├───package.json
├───privacidad.html
├───servicios.html
├───tailwind.config.js
├───terminos.html
├───WEB_CODE_GUIDELINES.md
├───.git\...
├───dist\...
├───images\
├───node_modules\...
└───...
```

## Technologies Used
- **CSS Framework**: Tailwind CSS v3.4.3 (configured in `tailwind.config.js`)
- **Build Tool**: Node.js with npm (package.json and package-lock.json present)
- **Font Families**: Inter (default), Plus Jakarta Sans (display)
- **Hosting**: GitHub Pages (indicated by .nojekyll and CNAME files)

## Website Pages
- **index.html**: Home page
- **nosotros.html**: About Us page
- **servicios.html**: Services page
- **contacto.html**: Contact page
- **privacidad.html**: Privacy Policy page
- **cookies.html**: Cookie Policy page
- **terminos.html**: Terms and Conditions page

## Configuration Files
- **tailwind.config.js**: Tailwind CSS configuration with custom colors and typography
- **package.json**: Project dependencies and scripts
- **package-lock.json**: Locked dependency versions
- **.gitignore**: Files ignored by Git
- **.nojekyll**: GitHub Pages configuration to disable Jekyll processing
- **CNAME**: Custom domain configuration for GitHub Pages

## Build Process
- **CSS Build Command**: `npm run build-css`
- **Build Script**: `npx tailwindcss build -i ./src/input.css -o ./public/style.css --watch`
- **Source CSS**: `./src/input.css` (input file for Tailwind)
- **Output CSS**: `./public/style.css` (processed CSS file)
- **Watch Mode**: The build command includes `--watch` flag to auto-rebuild on changes

## Brand Colors
The project uses a professional color palette defined in `tailwind.config.js`:

### Primary Colors
- `brand-primary`: #3B82F6 (Blue 500)
- `brand-secondary`: #0EA5E9 (Sky 500)
- `brand-light`: #EFF6FF (Blue 50)
- `brand-pink`: #8B5CF6 (Violet 500) - Accent

### Neutral Colors
- `neutral-dark`: #0F172A (Slate 900)
- `neutral-medium`: #334155 (Slate 700)
- `neutral-light`: #64748B (Slate 500)
- `neutral-bg`: #F8FAFC (Slate 50)

### Functional Colors
- `success`: #10B981 (Emerald 500)
- `warning`: #F59E0B (Amber 500)
- `error`: #EF4444 (Red 500)

### Gradient Colors
- `gradient-start`: #3B82F6
- `gradient-mid`: #0EA5E9
- `gradient-end`: #6366F1 (Indigo 500)

### Text and Background Colors
- `warm-bg`: #F1F5F9 (Slate 100)
- `warm-text`: #1E293B (Slate 800)
- `medium-text`: #475569 (Slate 600)
- `light-text`: #94A3B8 (Slate 400)
- `dark-bg`: #020617 (Slate 950)
- `warm-card`: #FFFFFF

## Typography
- **Default Font Family**: Inter (with fallback to system-ui, sans-serif)
- **Display Font Family**: Plus Jakarta Sans, with Inter as fallback (for headings)

## Tailwind Configuration
- **Content Paths**:
  - "./*.html" (all HTML files in root)
  - "./src/**/*.{html,js}" (all HTML and JS files in src directory)
  - "./src/components/**/*.{html,js}" (all HTML and JS files in src/components directory)
- **Custom Extensions**: Colors, fonts, and box shadows
- **Box Shadow Variants**:
  - `soft`: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)
  - `card`: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)

## Development Workflow
1. **To start CSS build**: Run `npm run build-css` in terminal
2. **CSS files**: Modify `./src/input.css` to add custom styles
3. **HTML files**: All HTML files are processed for Tailwind classes
4. **Watch mode**: The build process watches for changes in CSS/HTML files automatically

## Guidelines
- **CODING_GUIDELINES.md**: General coding guidelines
- **WEB_CODE_GUIDELINES.md**: Web-specific coding guidelines

## Assets
- **favicon.svg**: Website favicon
- **images/**: Directory for image assets
- **dist/**: Output directory for built files
- **node_modules/**: Installed Node.js packages
- **src/**: Source files (including input CSS)

## GitHub Pages Hosting
- .nojekyll file indicates GitHub Pages is being used
- CNAME file suggests a custom domain is configured
- Site is likely built and deployed from the main branch with files in dist/ directory

## Important Notes for Next Agent
1. The project appears to be a static website with multiple pages focused on services
2. Tailwind CSS is used for styling, so be aware of utility-first CSS approach
3. Check package.json for available npm scripts for development/build
4. The site includes all standard legal pages (privacy, cookies, terms)
5. Images should be placed in the images/ directory
6. The site appears to be configured for deployment to GitHub Pages with a custom domain
7. Follow existing coding guidelines when making changes
8. Check dist/ directory for the built version of the website
9. When adding new features, ensure Tailwind classes are included in the content paths of tailwind.config.js
10. New HTML files added to the root will be automatically processed for Tailwind classes
11. Always run the CSS build command after making changes to see them reflected
12. For new components, consider placing them in src/components/ directory if it exists or create it for better organization