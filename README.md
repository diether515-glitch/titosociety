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

The Join page builds a signed PDF application for the applicant to download and sends the application details to Web3Forms, which emails them to the address the access key was created with. The access key is in `join.html` (Web3Forms keys are meant to be public). In the Web3Forms dashboard you can restrict the key to your site's domain.

The PDF itself is not attached to the email. Applicants are offered a Continue to Messenger button so they can send it to the admins.

## Background photos

`bg1.jpg` to `bg4.jpg` are blurred, slowly moving background photos. The two tall phone photos were cropped to the rear window so no license plate is in the files.
