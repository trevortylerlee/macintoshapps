---
title: Pearcleaner
tagline: Correctly uninstall your macOS apps
icon: ./icon.png
link: https://itsalin.com/appInfo/?id=pearcleaner
developerName: Alin Lupascu
monetization: free
isOpenSource: true
isFree: true
isOneTimePurchase: false
isSubscription: false
tags: ["uninstaller"]
---

> A free, source-available and fair-code licensed Mac app cleaner inspired by [Freemacsoft's AppCleaner](https://freemacsoft.net/appcleaner/) and [Sun Knudsen's Privacy Guides](https://github.com/sunknudsen/guides/tree/main/archive/how-to-clean-uninstall-macos-apps-using-appcleaner-open-source-alternative) post on his app-cleaner script.

This project was born out of wanting to learn more on how macOS deals with app installation/uninstallation and getting more Swift experience. If you have suggestions I'm open to hearing them, submit a feature request!

## Features
- Orphaned file search for finding remaining files from previously uninstalled applications
- Development environments file/cache cleaning
- App Lipo to strip unneeded architectures from universal apps. No dependency on the lipo tool so no need to install xcode or command line tools
- Prune unused translation files from app bundles keeping only the preferred language set on macOS
- Sentinel monitor helper that can be enabled to watch Trash folder for deleted apps to cleanup after the fact(Extremely small (210KB) and uses ~2mb of ram to run in the background and file watch)
- Mini mode which can be enabled from Settings
- Menubar icon option
- CLI support
- Drag/drop applications support
- Deep link support for automation, see [wiki guide](https://github.com/alienator88/Pearcleaner/wiki/Deep-Link-Guide) for instructions
- Optional Finder Extension which allows you to uninstall an app directly from Finder by `right click > Pearcleaner Uninstall`
- Theme System available with custom color selector
- Differentiate between regular, Safari web-apps and mobile apps with badges like **web** and **iOS**
- Has clean uninstall menu option for the Pearcleaner app itself if you want to stop using it and get rid of all files and launch items
- Export app bundles for migrating apps and their cache to a new system
- Export app file list search results
- Optional Homebrew cleanup
- Include extra directories to search for apps in
- Exclude files/folders from the orphaned file search
- Custom auto-updater that pulls latest release notes and binaries from GitHub Releases (Pearcleaner should run from `/Applications` folder to avoid permission issues)


## Screenshots

![](https://github.com/user-attachments/assets/e2e16378-dbed-4cd4-a20b-23dd0d806fdf)

![](https://github.com/user-attachments/assets/4221d3ce-6190-45da-9a35-f9554196b2bf)

![](https://github.com/user-attachments/assets/fc2f6d24-d6c9-4aec-91da-3d0adc05df48)

![](https://github.com/user-attachments/assets/d8e43558-071f-4ff8-8557-b0508c063c1c)

---
