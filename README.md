# Slides

This project contains the slides I use for my talks.

## Motivation

Using local presentation slides comes with its pitfalls; transfer & backup presentation files, prone to loss, not fully customizable.

One alternative is proprietary cloud services like Google Slides, but the fact that it's proprietary creates dependency on the platform.

Using code to build slides solves a few problems; no need to transfer or backup presentation files, source control prevents loss, fully customizable via code, no need for proprietary platforms to host slides.

## Pitfalls

1. **Internet connection**

   The main current concern is the need for an Internet connection to view the slides.

   A solution can be to build the project locally on the machine that's going to be used for the presentation:

   ```bash
   npm run build
   npm start
   ```

1. **Customization speed**

   It takes more time to customize slides via code than in a .pptx file.

## Issues

## `deckTheme` is undefined in Dev mode

Sometimes, Spectacle does not get loaded properly on cold start. Modify the URL in your browser's address bar so that it points to the homepage, e.g. localhost:3000, then press `Enter`.
