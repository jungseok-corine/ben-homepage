# Studio Ben

Building intuitive, privacy-first mobile apps. No trackers, no complexity—just tools that work.

## Quick Start

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jungseok-corine/ben-homepage.git
   cd ben-homepage
   ```

2. **Serve locally with Jekyll:**
   ```bash
   # If you have Jekyll installed:
   bundle exec jekyll serve

   # Or use Python's built-in server:
   python3 -m http.server 8000
   ```

3. **Open in browser:**
   ```
   http://localhost:4000/ben-homepage/  (Jekyll)
   http://localhost:8000/               (Python)
   ```

### Deployment to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Save and wait for deployment (usually 1-2 minutes)

3. **Your site will be live at:**
   ```
   https://jungseok-corine.github.io/ben-homepage/
   ```

## Project Structure

```
ben-homepage/
├── index.html              # Homepage
├── _config.yml             # Jekyll configuration
├── LICENSE                 # MIT License
├── README.md               # This file
├── .gitignore             # Git ignore rules
├── assets/
│   ├── styles.css         # Global styles (dark/light mode)
│   ├── logo.svg           # Studio Ben logo
│   └── lang-toggle.js     # EN/KO language toggle
└── apps/
    ├── _template/         # Template for new apps
    │   ├── index.html
    │   ├── privacy.html
    │   └── faq.html
    └── workout-log/       # WorkOut Log app pages
        ├── index.html     # App marketing page
        ├── privacy.html   # Privacy policy
        └── faq.html       # Frequently asked questions
```

## How to Edit Content

### Update Homepage

Edit `/index.html`:
- Hero section text
- App cards
- Footer information

All text has both EN and KO versions using `data-lang` attributes.

### Add a New App

1. **Copy the template:**
   ```bash
   cp -r apps/_template apps/your-app-name
   ```

2. **Edit app pages:**
   - `apps/your-app-name/index.html` - Marketing page
   - `apps/your-app-name/privacy.html` - Privacy policy
   - `apps/your-app-name/faq.html` - FAQ

3. **Add to homepage:**
   Edit `/index.html` and add a new app card in the `apps-grid` section.

### Customize Styles

Edit `/assets/styles.css`:
- Colors: Modify CSS custom properties in `:root`
- Dark mode: Update `@media (prefers-color-scheme: dark)`
- Spacing: Adjust `--space-*` variables

### Change Brand Colors

In `/assets/styles.css`, update:
```css
:root {
  --color-primary: #2563eb;    /* Trust Blue */
  --color-secondary: #64748b;  /* Slate */
  --color-accent: #06b6d4;     /* Cyan */
}
```

## Language Toggle

The site supports English and Korean:
- Users can toggle with the button in the header
- Language preference is saved in `localStorage`
- All content uses `data-lang="en"` and `data-lang="ko"` attributes

## Custom Domain Setup

1. **Add CNAME file:**
   ```bash
   echo "yourdomain.com" > CNAME
   ```

2. **Update DNS records:**
   - Add A records pointing to GitHub Pages IPs
   - Or add CNAME record pointing to `jungseok-corine.github.io`

3. **Update `_config.yml`:**
   ```yaml
   url: "https://yourdomain.com"
   baseurl: ""
   ```

4. **Update all absolute paths:**
   - Remove `/ben-homepage` prefix from all links
   - Update in `index.html` and app pages

## Git Workflow

### Common Commands

```bash
# Check status
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create a new branch
git checkout -b feature-name

# Switch back to main
git checkout main
```

### Recommended Workflow

1. Make changes locally
2. Test in browser
3. Commit with descriptive message
4. Push to GitHub
5. Wait for GitHub Pages to deploy (1-2 minutes)
6. Verify live site

## Troubleshooting

### Site not updating after push

- Wait 2-3 minutes for GitHub Pages to rebuild
- Check GitHub Actions tab for build status
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+F5)

### Styles not loading

- Verify `baseurl` in `_config.yml` matches your repo name
- Check that asset paths start with `/ben-homepage/`
- Clear browser cache

### Language toggle not working

- Check browser console for JavaScript errors
- Verify `lang-toggle.js` is loading correctly
- Ensure all content has `data-lang` attributes

### Local development issues

- **Jekyll errors:** Make sure Jekyll and bundler are installed
- **Python server:** Paths may differ (omit `/ben-homepage/` prefix)
- **Port conflicts:** Use a different port: `python3 -m http.server 8080`

## App Store Support URLs

When submitting apps to the App Store, use these URLs:

- **Privacy Policy:** `https://jungseok-corine.github.io/ben-homepage/apps/workout-log/privacy.html`
- **Support URL:** `mailto:fiverights99@gmail.com`
- **Marketing URL:** `https://jungseok-corine.github.io/ben-homepage/apps/workout-log/`

Replace `workout-log` with your app's directory name.

## Assets Needed

The following placeholder assets need to be created:

1. **App icons:** Add real app icons to replace emoji placeholders
2. **Screenshots:** Add actual app screenshots to `/apps/*/` directories
3. **OG Image:** Create `/assets/og-image.png` (1200x630px) for social sharing
4. **App-specific OG images:** Add to each app directory

## Contact

For questions or support:
- Email: [fiverights99@gmail.com](mailto:fiverights99@gmail.com)
- GitHub: [jungseok-corine](https://github.com/jungseok-corine)

## License

MIT License - see [LICENSE](LICENSE) file for details.