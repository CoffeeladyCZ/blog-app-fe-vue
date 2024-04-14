# Blog app

## Description
This app is basic blog application.

Another function is A/B tests, allowing you to compare different versions of article to determine which one performs better. It provides a user-friendly interface for creating experiments, tracking metrics, and analyzing results.

## Tech Stack
The app is created using the following technologies:

- Front-end: Vue 3, Pinia, Axios, PrimeVue, PrimeFlex
- Back-end: Node.js, Express
- Database: MongoDB (on the MongoDB Atlas cloud)

Ideally Nuxt would be used for SEO reasons, unfortunately Vue is used for time reasons. I would also use the i18n library for localization into multiple languages.

## Description of the solution

The application should contain several parts. A basic blog, a login part and a part for A/B testing. 
The user must first get consent for GDPR and then a unique uuid is set in a cookie in the browser. This uuid will be part of the params in the measurement code, due to the uniqueness of the visit measurement.

### Blog feature
The user can add and edit the article. Currently, it is not possible to add and modify an image, the API is not ready.

### Tracking

The `trackPageview` measurement will be applied to the article detail and the `trackEvent` measurement will be applied to the click read and subscribe button in the article detail. The parameters include:

```js
   url, article_id, version, uniqueId, event

   example params:
   ?url=http%3A%2F%2Flocalhost%3A5173%2Farticle%2F6&article_id=6&version=test_variation&unique_id=111111&event=subscibe-button
```

### A/B test

The section should only be accessible to administrators (this could be solved by adding a login section).
An administrator can create two different versions of an article in the implemented editor. Selecting images and saving articles is not implemented. But it should work so that when the button is pressed, both are sent to BE and the user gets a green notification that the A/B test has been saved.
It would also be a good idea to create a section for editing tests, deleting and filing.
The test selection logic is currently on the frontend, but it would be more sustainable to move it to the backend in the future.

*User*
The user will see only one randomly selected variant in the list of articles, which will be stored in localStorage and, if necessary, refreshed to check if the entry is there.


## Future feature
- Adding a login section. This would be solved by creating a JWT access token and a refresh token. The validity would be verified before sending the request and the user would be relogged in if necessary.
 - Adding localization to multiple languages and options to choose (i18n).
 - Improve the design.
 - Adding feature for change image and add more images.

## Usage

You also need the backend part, which is [here](https://github.com/CoffeeladyCZ/ab-test-blog-be). Follow the instructions in the README there.

Here in the project you need to edit the package.json
```js
   "start:server": "cd ../ab-test-blog-be/api && npm run start" - sets according to the location of your backend repo
```

Starting the project
```js
 npm run start
```

The demo project is deployed on Vercel and corresponds to the current state.
#### [Demo project](https://ab-test-blog-fe.vercel.app/)
