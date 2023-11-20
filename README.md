# FullStack-App-Native
A react native application with node-backend / Front-end

# Installation
* 1 - clone repo https://github.com/muhammad-rahman647/fullstack-app-native

# Running Everything
Since this is an NPM monorepo, we omit the `packages/mobile` from the workspace
array to bypass the no-hoist issue. This means that you'll need to run `npm i`
in two places: the root directory and `packages/mobile`.

After that, you'll be able to spin up two consoles and run the following
commands:

```javascript
npm run start in 'the root directory'
npx expo start in 'packages/mobile'
```

# End