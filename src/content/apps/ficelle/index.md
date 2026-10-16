---
title: Ficelle
tagline: Local LLM routing with failover
icon: ./icon.png
link: https://ficelle.ai/
developerName: THE BLUE HOUSE
monetization: freemium
isOpenSource: false
isFree: true
isOneTimePurchase: false
isSubscription: true
tags: ["developer tools"]
---

Ficelle gives OpenAI-compatible clients one local API for free LLM tiers. It routes requests to upstream providers, handles failover and cooldowns, and shows routing activity in a browser dashboard. Paid fallback is blocked in code; provider quotas still apply.

On macOS, Ficelle runs as a Python CLI and local service with LaunchAgent support. It requires Python 3.11+ and also supports Linux and Windows. Its dashboard opens in your browser; there is no native Mac app. Inference runs with the upstream providers.

Core is free and source-available under BUSL-1.1. Optional Pro features are available by subscription. BUSL-1.1 is not an OSI-approved open-source licence.

[Installation and documentation](https://ficelle.ai/)
