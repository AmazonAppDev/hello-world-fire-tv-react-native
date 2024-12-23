# 📺 🔥 'Hello World' React Native Fire TV App

Learn how to create a simple Fire TV app using React Native and Expo 📺

## 📋 Prerequisites

To run this project, you will need:

- [Android TV Emulator](https://developer.android.com/studio) with the [command line tools configured](https://developer.android.com/tools/variables) 🛠️
- (Or) [Fire TV](https://developer.amazon.com/apps-and-games/fire-tv) 📺

## ✅ Features

Key features currently include:

- Creating a simple Hello World for Fire TV app using React Native and [Expo](https://docs.expo.dev/guides/building-for-tv/) 👋
- Implementing a navigation menu using [React Native Navigation](https://reactnavigation.org/) 🗺️

Features coming next:

- Showcasing TV Grid using:
  - [react-tv-space-navigation](https://github.com/bamlab/react-tv-space-navigation)
  - [TV Focus Guide View](https://github.com/react-native-tvos/react-native-tvos/tree/tvos-v0.74.0/packages/rn-tester/js/examples/TVFocusGuide)
- React Native Video Player Options
- Methods for handling Focus

## 💻 Running the Hello World App

1. Clone the repository: `git clone https://github.com/AmazonAppDev/hello-world-fire-tv-react-native.git`

2. Run the Android TV emulator: `emulator -avd name-of-your-emulator`.

   If you aren't sure what your emulator is called run: `emulator -list-avds`, the Android TV one will start with the name 'Television'.

   Alternatively, connect your Fire TV device and ensure it is available by running: `adb devices`

3. Install the project dependencies by running: `npm i`

4. Run the project using: `npm run android`

   If you have multiple devices running you can a specify to run on a particular device using: `--deviceId=DEVICE_ID`

## Get support

If you found a bug or want to suggest a new [feature/use case/sample], please [file an issue](../../issues).

If you have questions, comments, or need help with code, we're here to help:

- Join the [Amazon Developer community](https://community.amazondeveloper.com/c/amazon-appstore/17)

- Check out the [amazon-appstore](https://stackoverflow.com/questions/tagged/amazon-appstore) tag on Stack Overflow

Sign up to [stay updated with the developer newsletter](https://m.amazonappservices.com/devto-newsletter-subscribe).

## Authors

- [@anishamalde](https://github.com/anishamalde)

## 📄 License

This project is licensed under the [MIT-0 License](LICENSE).
