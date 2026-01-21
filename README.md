# Transaction Authority Group (TAG) — Landing Page

A premium, conversion-optimized landing page for Transaction Authority Group.

---

## 🚀 Quick Start

### 1. Configure Your Settings

Open `script.js` and update the `CONFIG` object at the top:

```javascript
const CONFIG = {
  FOOTER_EMAIL: "contact@transactionauthoritygroup.com",
  PRIVACY_URL: "https://yourdomain.com/privacy",
  TERMS_URL: "https://yourdomain.com/terms",
};
```

### 2. Set Your Scheduler Link

Open `index.html` and update the Calendly inline embed URL (search for `calendly-inline-widget`).

### Privacy + Terms

This project includes `privacy.html` and `terms.html`, and the footer links to them by default.
If you already have hosted policies elsewhere, set `PRIVACY_URL` and `TERMS_URL` in `script.js` to override.

### 3. Add Your Logo (Optional)

Your logos are already in place:
- `assets/logo.png` — Shield mark (used in hero)
- `assets/logo_text.png` — Full logo with text (used in footer)

### 4. Deploy to Your Host

**Recommended: Netlify (Free)**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag & drop this entire folder to deploy
3. Connect your custom domain in Site Settings

**Alternative: Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Import this folder as a new project
3. Deploy with one click

**Alternative: Cloudflare Pages**
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Create new project → Upload assets
3. Upload folder contents

---

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:

```css
:root {
  --navy: #0b1f3b;      /* Primary brand color */
  --gold: #C4A35A;      /* Accent color */
  --ink: #0b1220;       /* Text color */
}
```

### Scheduler Embed
- **Calendly**: Update the `data-url` on `.calendly-inline-widget` in `index.html`
- **Other schedulers**: Replace the embed in the Booking section with your provider's snippet

### Statistics (Optional)
To show a stat like "300+ transactions supported":
1. Find the hidden `authority__item--stat` div in `index.html`
2. Remove the `hidden` attribute
3. Update the number

---

## 🌐 Domain Setup

### DNS Configuration
Point your domain to your hosting provider:

| Record Type | Host | Value |
|-------------|------|-------|
| A or ALIAS | @ (root) | Your host's IP/target |
| CNAME | www | Your host's target |

### SSL/HTTPS
All recommended hosts provide free SSL certificates. Enable HTTPS redirect in your host's settings.

---

## 📱 Features Included

- ✅ Mobile-responsive design
- ✅ Scroll animations
- ✅ Gold-accented premium styling
- ✅ Accessible (skip links, ARIA labels)
- ✅ SEO meta tags
- ✅ Open Graph / Twitter Cards
- ✅ Sticky "Book Call" button (desktop)
- ✅ Print-friendly styles

---

## 📁 File Structure

```
tag_codex/
├── index.html          # Main page
├── privacy.html        # Privacy Policy (template)
├── terms.html          # Terms (template)
├── styles.css          # All styles
├── script.js           # Configuration & interactivity
├── assets/
│   ├── logo.png        # Shield mark
│   ├── logo_text.png   # Full logo
│   ├── favicon-32.png  # Browser tab icon
│   ├── apple-touch-icon.png
│   └── og-image.png    # Social sharing image
└── README.md           # This file
```

---

## 💡 Tips

1. **Test your scheduler link** before going live
2. **Preview social shares** at [opengraph.xyz](https://opengraph.xyz)
3. **Check mobile layout** on actual devices
4. **Update OG image URL** to absolute path after deployment (in `index.html`)

---

## 🆘 Support

Built with care by your developer. For questions or updates, reach out!

---

*Last updated: January 2026*
