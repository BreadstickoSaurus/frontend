# Frontend

For development use
```bash
npm run dev
```
or when testing the PWA use
```bash
npm run serve
```

## Caching

Every api call to /api and /uploads (which are the user uploaded images) is cached.

The api cache uses the StaleWhileRevalidate caching strategy. This means the browser will show the results from the cache first (if available) and refresh the cache in the background. This ensures a smooth browsing experience, while also making sure the cache stays as up-to-date as possible.

For the image cache, the CacheFirst caching strategy was used. After an image is uploaded its url will always return that image (since we use hashes as names). This means we can allways use the cache when available and never have to update it.

## Share

The share button uses the [share method](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) which is currently not supported on firefox and Chromium based browsers on Linux. To test this feature use Chrome, Edge or Safari on Windows, IOS, or Android (see [here](https://caniuse.com/mdn-api_navigator_share) for more info).