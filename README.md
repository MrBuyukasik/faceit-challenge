# FACEIT Challenge app

## Demonstration 

Short video demonstration: https://drive.google.com/file/d/1SDy2Pklom0hJNCtBBISSpQzhEROtyczX/view?usp=sharing


## Available Scripts

In the project directory, you can run:

### `yarn`
install project dependencies, for iOS you also use `cd ios && pod install` for first run

### `yarn start:api`
First use this command to init local API

### `yarn start`
Init React-native metro bundler.

Note: If you are using an Android device, you need to change Endpoint.ts in API_URL: localhost with your local IP which returns ifconfig | grep 192.168.1. command.


## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 13.1](https://developer.apple.com/xcode)
- [Cocoapods 1.10.2](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)


## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [styled-component](https://styled-components.com/) for Styling components.
- [react-native-router-flux](https://www.npmjs.com/package/react-native-router-flux) navigation library.
- [redux](https://redux.js.org/) for state management.
