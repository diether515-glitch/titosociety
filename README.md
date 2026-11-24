# Titos Society

Multi-page website for Titos Society, a friendly car and lifestyle community from Tarlac City.

- Facebook: https://www.facebook.com/profile.php?id=61595237911390
- TikTok: https://www.tiktok.com/@titos.society
- Google Site: https://sites.google.com/view/titosociety/home
- Email: titosociety@gmail.com

## Structure

- `home.html`, `about.html`, `values.html`, `merch.html`, `faq.html`, `join.html`: the pages
- `css/style.css`: all styles
- `js/main.js`: shared (menu, animations, Messenger helper); `quiz.js`, `merch.js`, `faq.js`, `join.js`: one file per interactive feature
- `assets/`: logo and banner
- `index.html`: only redirects to `home.html`, because GitHub Pages opens a file with that name at the site root. Delete it if you don’t need it and use `/home.html` as the address.

## Interactive parts

- Values: a five-question road code quiz
- Merch: tap items you want, then send the list to the page on Messenger
- FAQs: live search
- Join: application form that copies your details and opens Messenger at `https://m.me/61595237911390` (nothing is stored on the site)

## Publish with GitHub Pages

Upload everything, then Settings > Pages > Deploy from a branch > `main` / root.
