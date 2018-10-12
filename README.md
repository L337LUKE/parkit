# Technical Test Park-IT

This has been built using the Next.JS framework for React Using Typescript with an Atomic Design approach to structure.

There are three main aspects to the SPA.

## Built with

-   NextJS, SSR for free
-   React ⚛️
-   Typescript 📜
-   Styled Components 💅
-   Flexbox Layout 💪
-   Prettier 👩‍🎤
-   Atomic Design Methodology ⚛️

## Functionality

-   `/`, loads with default search term "cars"
-   `/search`, provides searchbox for users to do their own search
-   `/tag?tag=[term]`, navigable by clicking a tag in a gallery cards info
-   Loads 12 images from the API at all times (some less if image data is missing)
-   Usage of progressive content loaders to give perceived performance benefits to user
-   Users can click image/title to view image
-   Users can click username to go to owners profile

## Improvements / Enhancements

-   Add Node /w Express and expose API to make flickr calls on behalf of us so we don't have to expose API Key client side
    -   There's unfortunately no CORS support with their API so you can't at least whitelist domains to run on
-   Lazy Loading /w Button to load more so we don't load content in automatically as users scroll eating up bandwidth automatically
-   Lazy loading images into the page so at least on mobiles we can get the request for images down to 1/2 on screen at a time.
-   Testing of at least component logic using Jest and testing of frontend components with React Testing Library

## How to use

Install it and run:

```bash
yarn
yarn dev
```
