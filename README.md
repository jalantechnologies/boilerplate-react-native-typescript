# React-native-typescript-boilerplate
Typescript support React Native Boilerplate

### Future Plans

- [x] Declarative config: The application should allow the ability to declaratively define application configuration using JSON or YAML for dev, test, staging, production environments.
- [x] Localization Support: It should be easy to localize the application
- [ ] Responsive Grid System
- [x] Base component library with easy to extend
- [x] Forms
- [ ] Crash Monitoring:
- [ ] End to end Test
- [ ] Component and unit testing
- [x] Context hook for Authentication of user
- [x] Adding login logout functionality, it should be easy to remove if not required.

## Dev Setup

### Running Locally

#### Install dependencies:

From the project root, run the following command.

```
npm install 
```

Or if you prefer `yarn`:

```
yarn
```

#### Install cocoapods: 

This installation is for iOS development.

```
cd ios && pod install
```

#### Run android app:
Development stage: 
```
npm run android
```
```
yarn android
```

Staging stage:
```
npm run android:staging
```
```
yarn android:staging
```

Production stage:
```
npm run android:prod
```
```
yarn android:prod
```

#### Run iOS app:
Development stage:
```
npm run ios
```
```
yarn ios
```

Staging stage:
```
npm run ios:staging
```
```
yarn ios:staging
```

Production stage:
```
npm run ios:prod
```
```
yarn ios:prod
```
