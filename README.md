
# KrishiJal Shopify Coding Assignment

This package contains:
- `preview/index.html` — standalone browser preview. No Shopify account required.
- `layout/`, `sections/`, `templates/`, `assets/`, `config/` — Shopify Online Store 2.0 theme files.
- Brand logo and product image supplied in the assignment PDF.
- Responsive navigation, hero, benefits, featured product, about, how-it-works, testimonials, FAQ, newsletter and footer.
- Theme Editor settings and section/block schemas.

## 1. Quick preview in your browser

Option A — easiest:
1. Open `preview/index.html` in Chrome.
2. Everything is local except the optional web font fallback; no build step is required.

Option B — VS Code:
1. Open this folder in VS Code.
2. Install the "Live Server" extension.
3. Right-click `preview/index.html`.
4. Select "Open with Live Server".

## 2. Run it as a Shopify theme

You need:
- A Shopify development store.
- Shopify CLI.
- Node.js LTS.

Install Shopify CLI using the official Shopify instructions.

Then open a terminal inside this project folder and run:

```bash
shopify theme dev --store YOUR-STORE.myshopify.com
```

The CLI will provide a local preview URL and let you edit the theme locally.

## 3. Upload to Shopify

From the project root:

```bash
shopify theme push --store YOUR-STORE.myshopify.com
```

Choose the theme when prompted.

For a safer first upload, push as an unpublished theme and test it before publishing.

## 4. Theme Editor

After the theme is uploaded:
1. Shopify Admin → Online Store → Themes.
2. Open the uploaded theme.
3. Click Customize.
4. You can edit section text, images, colors, blocks and content through the Theme Editor.

## Important assignment note

The provided PDF contains brand information, logo/product images, an About Brand description and website references. It does not specify an exact pixel-perfect homepage layout, exact pricing, contact details, or final customer testimonials. Those areas are therefore implemented as editable placeholders rather than invented business facts.

Reference sites listed in the brief:
- https://nutritiouz.com/
- https://arthbyemcure.com/
- https://www.whatsupwellness.in/
- https://manmatters.com/
- 3D reference: https://www.euveka.com/

The design is inspired by common patterns visible in the references (clean D2C navigation, product-led hero, benefit blocks, proof/content sections) without copying their branding or code.
