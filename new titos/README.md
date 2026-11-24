# Titos Society

Multi-page website for Titos Society, a friendly car and lifestyle community from Tarlac City.

- Facebook: https://www.facebook.com/profile.php?id=61595237911390
- TikTok: https://www.tiktok.com/@titos.society
- Google Site: https://sites.google.com/view/titosociety/home
- Email: diether515@gmail.com

## Structure

- `home.html`, `about.html`, `values.html`, `merch.html`, `faq.html`, `join.html`: the pages
- `style.css`: all styles
- `main.js` (shared), `quiz.js`, `merch.js`, `faq.js`, `join.js`: one file per feature
- `logo.png`, `banner.jpg`: brand images
- `index.html`: only redirects to `home.html`, because GitHub Pages opens a file with that name at the site root. Delete it if you don’t need it and use `/home.html` as the address.

## Interactive parts

- Values: a five-question road code quiz
- Merch: tap items you want, then send the list to the page on Messenger
- FAQs: live search
- Join: application form that copies your details and opens Messenger at `https://m.me/61595237911390` (nothing is stored on the site)

## Publish with GitHub Pages

Upload everything, then Settings > Pages > Deploy from a branch > `main` / root.

## Important

Keep every file in the same folder as the `.html` pages (no subfolders). If `style.css`, the `.js` files, or the images are missing from the repo, the site shows as plain unstyled text.

## Registration: PDF and email

The Join page builds a PDF application (with the signature) and sends it with the form details to Netlify Forms.

1. Deploy this repo on Netlify. The form `application` is detected on the first deploy.
2. In Netlify, open Forms, then Form notifications, then Add notification > Email notification. Choose the `application` form and enter `diether515@gmail.com`.
3. Every submission, with its PDF attachment, is also stored under Forms > application.

On GitHub Pages or when opened from your computer, there is no form backend, so the PDF only downloads and the page tells the applicant to send it by email or Messenger.

## Background photos

`bg1.jpg` to `bg4.jpg` are blurred, slowly moving background photos. The two tall phone photos were cropped to the rear window so no license plate is in the files.
