# Ruben James Hillier — Portfolio Website

A deliberately simple portfolio/blog site inspired by the layout and restrained typography of the Margaret Howell website.

## Files

- `index.html` — the structure and left-hand navigation.
- `styles.css` — all visual styling.
- `script.js` — all page content, dropdown behaviour and navigation.
- `assets/` — put your photographs here.

There is NO framework, build system or dependency. You can open `index.html` directly in a browser.

## Change the main photo

Put your image inside `assets/`, for example:

    assets/hero.jpg

Then open `script.js` and find:

    src="assets/hero-placeholder.svg"

Change it to:

    src="assets/hero.jpg"

The same approach works for project images.

## Add a project

1. Open `script.js`.
2. Find the `PROJECTS` section.
3. Copy an existing project object.
4. Give it a unique ID, e.g. `"project-chair"`.
5. Add a link to it in the Projects submenu in `index.html`:

    <a href="#project-chair" data-route="project-chair">Chair</a>

## Add a blog post

Do exactly the same thing in the BLOG section of `script.js`.

## Change your text

Most of the visible text is inside `script.js`, so you don't have to hunt through lots of HTML files.

## Publish for free

GitHub Pages is a straightforward free option for this type of static site.

Recommended structure when you upload it:

    ruben-james-hillier/
    ├── index.html
    ├── styles.css
    ├── script.js
    └── assets/
        ├── hero.jpg
        └── project-01.jpg

## Design philosophy

The layout intentionally uses:
- large white space
- small grey typography
- fixed left navigation
- large image-led content
- restrained borders
- minimal animation
- no unnecessary UI

The layout is responsive and becomes a normal stacked mobile layout below 800px.
