# ZYD Signage Website Package

A static, responsive B2B lead-generation website designed for GitHub Pages. No build tools or server are required.

## 1. Required edits before deployment

Open `site-config.js` and replace:

```js
whatsappNumber: "8613800000000",
salesEmail: "sales@example.com"
```

The WhatsApp number must include the country code and digits only, without `+`, spaces or dashes.

Example:

```js
whatsappNumber: "447599932002"
```

Also replace the two `sales@example.com` occurrences in `index.html` with your real email address.

## 2. Preview locally

You can double-click `index.html`, or run a local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## 3. Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this package to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save and wait for GitHub to publish the site.

## 4. Site structure

- `index.html` — complete homepage and SEO content
- `styles.css` — responsive visual design
- `script.js` — mobile navigation, animations and WhatsApp enquiry logic
- `site-config.js` — WhatsApp number and basic company configuration
- `assets/images/` — logo, product, factory and project images

## 5. Notes

- The enquiry form does not store user data. It creates a prefilled WhatsApp message.
- Browsers cannot automatically attach uploaded files to WhatsApp. The selected file name is included in the message, and the buyer is instructed to attach the file manually after WhatsApp opens.
- Product and project images are local, so the site does not depend on external image hosts.
- Google Fonts are loaded from Google. Remove the font links in `index.html` if you need a fully offline package.
- Update the organization URL in the JSON-LD block inside `index.html` after your GitHub Pages URL is known.
