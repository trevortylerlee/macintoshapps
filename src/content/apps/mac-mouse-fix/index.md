---
title: Mac Mouse Fix
tagline: Fix the scrolling of your 10$ mouse
icon: ./icon.png
link: https://macmousefix.com/
developerName: Noah Nuebling
monetization: freemium
isOpenSource: true
isFree: true
isOneTimePurchase: true
isSubscription: false
---

> Mac Mouse Fix is an app that makes your mouse better.

I want to turn Mac Mouse Fix into the best mouse driver *of all time*! Some features are still missing at the moment, but I think it already **turns regular mice into the best input devices for Macs** in some ways. At the same level or even better than an Apple Trackpad or a Logitech MX Master mouse.

For more information on how exactly Mac Mouse Fix enhances your mouse, visit the [website](https://noah-nuebling.github.io/mac-mouse-fix-website).

## Features

See the [website](https://noah-nuebling.github.io/mac-mouse-fix-website#trackpad) for an overview of the features of Mac Mouse Fix, including video demos!

For more details, see the [Releases](https://github.com/noah-nuebling/mac-mouse-fix/releases).

## Installation

Download the latest version of Mac Mouse Fix on the [website](http://noah-nuebling.github.io/mac-mouse-fix-website/).

You can also install Mac Mouse Fix through [Homebrew](https://brew.sh/)! Just type the following command into the terminal:

```bash
brew install mac-mouse-fix
```

Or this to install the old **free** version:

```bash
brew install --cask mac-mouse-fix@2
```

You can download older versions of Mac Mouse Fix under [Releases](https://github.com/noah-nuebling/mac-mouse-fix/releases).

## macOS compatibility

The latest version of Mac Mouse Fix is made for **macOS 11 Big Sur** or later.
  
If you're on macOS **10.15 Catalina**, macOS **10.14 Mojave**, or macOS **10.13 High Sierra**, you can use the [latest version of Mac Mouse Fix 2](https://noah-nuebling.github.io/redirection-service?message=&target=mmf2-latest). Mac Mouse Fix 3.0.0 and later might still work on your machine, but they will have visual issues and some features might not work properly.
    
If you're on macOS **10.12 Sierra**, or **10.11 El Capitan**, you can use Mac Mouse Fix [2.2.0](https://github.com/noah-nuebling/mac-mouse-fix/releases/tag/2.2.0) or below.

## Pricing

See the [website](https://noah-nuebling.github.io/mac-mouse-fix-website#price) for an overview of the pricing for Mac Mouse Fix 3.\
Mac Mouse Fix 2 and below will remain free forever.

## Uninstallation

Uninstall Mac Mouse Fix by simply moving it to the bin. 

However, there will be files left on your system. To get rid of these files I recommend the awesome [AppCleaner by FreeMacSoft](https://freemacsoft.net/appcleaner/).

Under macOS, it is not feasible for apps to delete these leftover files by themselves when you delete the app. That's why I highly recommend using an app like AppCleaner.

## What people say

Thanks so much to everyone sharing their excitement about Mac Mouse Fix!\
On the [website](http://noah-nuebling.github.io/mac-mouse-fix-website/) you can find a collection of nice things people have said about the app.

## Tips

- **Manage windows with a simple Click and Drag**

  [Swish](https://highlyopinionated.co/swish/) is my favorite way to manage windows on macOS. With a simple swipe on your trackpad, it lets you position any window so it takes up half, a quarter, or the whole screen.

  Swish is designed for trackpad gestures, but with Mac Mouse Fix you can use it from any third-party mouse! Just go to Mac Mouse Fix and set any buttons "Click and Drag" action to "Scroll & Navigate" and then you can snap windows with a simple Click and Drag.

  Anything you can do with a two-finger swipe on an Apple trackpad works just as well with the "Scroll & Navigate" feature in Mac Mouse Fix.

- **Control Screen Brightness, Audio Volume, or Media Playback right from your mouse**

  Mac Mouse Fix lets you use **any key on your keyboard** directly from your mouse -
  even special keys only found on Apple keyboards that let you control Screen Brightness, Audio Volume, Media Playback, and more.

  If you don't have an Apple keyboard at hand, **hold Option (⌥)** to choose the special Apple keys.

  ![Apple-Keys-Demo](https://github.com/noah-nuebling/mac-mouse-fix/raw/master/Markdown/Media/Apple-Keys-Demo.gif)

## Questions

- **Is Mac Mouse Fix native on Apple Silicon?**

  Yes, Mac Mouse Fix runs 100% native on Apple Silicon.

- **Why is there a delay when I click?**

  When you click, Mac Mouse Fix might wait to see if you're going to double click.\
  To remove the delay for a button, delete any "Double Click" actions for that button.

- **How can I orbit around objects in 3D apps like Blender?**

  In 3D apps like Blender, you normally Click and Drag the Middle Mouse Button to orbit around objects.\
  But if you assign actions to the Middle Mouse Button in Mac Mouse Fix, then this won't work anymore.
  
  To solve this, I know of 2 options:
  1. Assign clicking and dragging one of the buttons of your mouse to the "Scroll & Navigate" feature. This feature simulates swiping with 2 fingers on an Apple Trackpad. This will, among other things, let you orbit in 3D apps! 
  2. *Uncapture* the Middle Mouse Button by deleting all actions assigned to it in Mac Mouse Fix. See [this guide](https://github.com/noah-nuebling/mac-mouse-fix/discussions/112) for more info.

- **Can I open App Exposé through a Click and Drag Gesture?** <!-- Note: We're using App Exposé here and Application Windows in MMF. Not sure that's great. I felt this was clearer though. -->

  Yes! Just choose the 'Spaces & Mission Control' Action and then Click and Drag *down*.

  If this doesn't work, it's likely because the 'App Exposé' trackpad gesture is disabled on your Mac.\
  You can enable the gesture under System Settings or by running the following command in the terminal:

  ```
  defaults write com.apple.Dock showAppExposeGestureEnabled -bool TRUE; killall Dock
  ```

- **Is my mouse supported?**

  Short answer: Probably. If you want to know for sure, it's best to download Mac Mouse Fix and try it out.

  Mac Mouse Fix works very well with most mice. However, on certain mice designed to be used with proprietary driver software like Logitech Options, Mac Mouse Fix can't recognize all the buttons at the moment. 
  
  That's because these mice communicate with your computer using a special, proprietary protocol, instead of the standard USB protocol.
  I would love to add full compatibility for these mice at some point, but it's a ton of work and it won't be coming soon.

- **Is the Magic Mouse supported?**

  I might add features in the future which enhance the Apple Magic Mouse, but currently, Mac Mouse Fix has no effect on it.

- **Are tiltable scroll wheels supported?**

  Some mice let you tilt the scroll wheel left or right to scroll horizontally. Mac Mouse Fix will make this feel more natural and easy to control. However, it's not currently possible to trigger other actions, such as switching between desktops, by tilting the scroll wheel. I'd love to implement this feature at some point, but it's a ton of work and it won't be coming soon.

- **Turning off pointer acceleration**

  Mac Mouse Fix doesn't let you turn off the pointer acceleration, but if you're on **macOS 14 Sonoma** or later, you can turn off the pointer acceleration under `System Settings > Mouse > Advanced... > Pointer acceleration`.

  I plan to add really nice ways to improve pointer acceleration in the future, but I'm not sure when that's coming.

- **Does Mac Mouse Fix collect my data?**

  Mac Mouse Fix does not have ads, and it does not collect any personal information about you.

  However, at the moment that you buy the app, the sales provider Gumroad.com collects some personal info, such as your email address, and this info is visible to me. This is necessary to be able to issue refunds, send a license key to your email, etc. I cannot turn this off. To learn more about the data collected when you buy Mac Mouse Fix, see the [Gumroad Privacy Policy](https://gumroad.com/privacy).

- **Is there a refund policy?**

  There is no official refund policy, but the app is free for 30 days.
  
  If you experience any problems after buying the app, just reach out to me, and I will do my best to help.

- **Will Mac Mouse Fix still be Open Source now that it's monetized?**

  Yes, Mac Mouse Fix will still be open source!

  I encourage anyone to use the source code of Mac Mouse Fix in their own projects, as long as they don't release a simple copy of Mac Mouse Fix.

  Learn about the details in the [MMF License](https://github.com/noah-nuebling/mac-mouse-fix/blob/master/License) which Mac Mouse Fix 3 and later are licensed under.

- **Can I get Mac Mouse Fix for free if I already donated?**

  Yes! See the [Acknowledgements](Acknowledgements.md#-paypal-donations) for more info.

## How you can contribute

There are several ways to help the project.\
Check out the [Acknowledgements](Acknowledgements.md) for more info on who has already contributed!

- **Giving feedback**

  You can help by sharing your **ideas**, **issues** and **feedback** via the [Feedback Assistant](https://noah-nuebling.github.io/mac-mouse-fix-feedback-assistant/?type=bug-report).

- **Contributing money**
  
  I hope to be able to sustain myself financially through Mac Mouse Fix. That way, I can keep improving and working on the app. If you would like to help, you can:
  1. Buy Mac Mouse Fix by clicking the button in the app, or clicking [here](https://noahnuebling.gumroad.com/l/mmfinappusd).
  2. [Tip me](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ARSTVR6KFB524&source=url&lc=en_US) on PayPal. I don't get a lot of money from this, but it's always cute and motivating to get a donation.
  3. [Sponsor me](https://github.com/sponsors/noah-nuebling) on GitHub. A monthly sponsorship is a great way to support the project and help me have a more stable income.

- **Adding translations**
  
  Mac Mouse Fix is available in English, German as well as the languages listed in the [Acknowledgements](Acknowledgements.md).

  If you would like to **help translate the project**, see the [Localization Guide](https://github.com/noah-nuebling/mac-mouse-fix/discussions/731).\
  If you want to **report missing or suboptimal translations**, that's also very helpful. The best way to report problems is by commenting under the [Localization Guide](https://github.com/noah-nuebling/mac-mouse-fix/discussions/731).

- **Contributing code**

  If you would like to contribute code, that's awesome! I'll be happy about any [pull requests](https://github.com/noah-nuebling/mac-mouse-fix/pulls).
  
  However, I might not accept all pull requests. If you want to make sure that your work is not wasted, you can submit an initial pull request that only *describes* the changes you want to make, but contains little or no code. Then I can give you feedback and tell you if I would adopt the changes you want to make in that way.

**Thank you** to everyone who has already contributed and supported me in trying to make the best mouse driver *of all time*! :)🚀
