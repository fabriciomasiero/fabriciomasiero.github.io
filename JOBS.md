# Job Descriptions — Source of Truth

Raw notes and structured content for each role. Used to populate the portfolio's expanded "Show more" sections.

---

## Backtrack — iOS (Yac, Inc.)
**Role:** Lead iOS Engineer + Mobile Team Manager (iOS & Android, 3-person team including me)  
**Reporting:** Directly to CEO and CTO

### Short blurb (always visible)
Built the iOS app from scratch — zero to a live-event B2B product at Disney, HPE, Tiffany&Co, Great Wolf Lodge, Topgolf, and LG. Led mobile engineering (iOS + Android, 3-person team) close to CEO and CTO, translating raw product vision into specs and shipping under real conference pressure.

### Extended details
- **Deep AVAudioEngine work:** Not just a recorder — analyzed raw bytes being written in real time. Handled all AudioSession events: interruptions, route reconfigurations, and every advanced audio context edge case
- **Offline autopilot:** WebSocket-driven meeting sync with graceful degradation — if the socket dropped, the app continued recording and syncing independently with no user intervention
- **Full media pipeline:** audio export, multi-segment merge, image generation, video assembly (audio + thumbnail) — all built from scratch
- **OCR badge scanning:** Custom camera view with Vision framework for real-time badge reading at live events
- **PhoneContext system:** Real-time device orientation/position detection (pocket, facing up, facing down, in hand, on table) to dynamically control camera and recording behavior — original idea and implementation
- **CI/CD + releases:** Owned the full release pipeline, App Store submissions, and daily production monitoring via Sentry and Mixpanel
- **Spec authorship:** Received raw CEO/CTO briefs → translated into full technical specs and led implementation across the team

### Tech stack
Swift, SwiftData, AVAudioEngine, AVFoundation, WebSocket, SwiftUI, Vision OCR, Dynamic Island, Sentry, Mixpanel, CI/CD

---

## Backtrack — macOS (Yac, Inc.)
**Role:** Lead macOS Engineer

### Short blurb (always visible)
Shipped Backtrack to #1 in the Mac App Store across 10 countries, then pivoted that B2C momentum into a full B2B enterprise play — owned hardware, MDM deployment, and on-site event infrastructure.

### Extended details
- **Menubar app:** Built with AppKit + SwiftUI — simultaneously records screen, system audio, and microphone, then merges all streams into a single output
- **Screen + audio capture:** Used ScreenCaptureKit and AVAudioSession for low-latency, background-safe capture
- **Calendar integration:** Meeting detection from Calendar events to auto-trigger recordings at the right moment
- **GraphQL + Apollo:** Backend sync using Apollo Swift for real-time state across devices
- **Swift Concurrency:** Structured concurrency throughout for safe parallel capture, merging, and upload
- **Enterprise pivot:** Engineered Vision OCR badge-scanning pipelines for physical check-ins; managed MDM deployment for large-scale event hardware rollouts

### Tech stack
AppKit, SwiftUI, AVAudioSession, ScreenCaptureKit, Apollo (GraphQL), Swift Concurrency, Vision OCR, MDM

---

## Super Hi-Fi
**Role:** Senior Apple Platforms / SDK Engineer

### Short blurb (always visible)
Built a custom Swift SDK for online and offline radio streaming — shipped into Peloton across all their stores. Rebuilt the Sonos app from scratch (hardware-free, like Spotify) for a partner proof-of-concept tested by David Byrne. Also shipped CarPlay, AirPlay, and enterprise POC SDKs.

### Extended details
- **Peloton SDK:** Built with Swift, Realm, Combine, and Swift Concurrency — full offline radio streaming with track downloads, offline access, and deletion. Now live in all Peloton stores
- **Sonos partnership — full app rebuild:** Sonos was a Super Hi-Fi partner and asked us to prove whether their app could be rebuilt from scratch — pixel-perfect animations included — and work _without_ a Sonos device attached (normally required). Built the entire thing: connected to Sonos private APIs and our own endpoint, with fully working radio and song playback — making Sonos accessible like Spotify. The proof-of-concept was tested by **David Byrne** (Talking Heads). It worked.
- **POC integrations:** Integrated multiple SDKs into proof-of-concept demos for big tech company partners — supported business development and partner acquisition conversations
- **CTO architecture team:** Active contributor to API design decisions and overall project technical direction
- **Design collaboration:** Worked closely with the design team to implement animations and elevate UX quality
- **DJ crossfade SDK (iOS layer):** Built the iOS SDK for a proprietary engine (C++ core by others) that matches BPM, crossfades, and loops tracks for seamless radio-style transitions. Apple Music and Spotify acquired this SDK (details under NDA)

### Tech stack
Swift, AVFoundation, AVPlayer, Combine, Concurrency, MVVM, Realm, UIKit, CarPlay, AirPlay, Xcode Instruments

---

## FloSports
**Role:** Senior Apple Platforms Engineer

### Short blurb (always visible)
Engineered athlete-profile and content experiences with Swift, UIKit, and Combine. Built the experimentation and metrics layer that directly fed product decisions — translating streaming platform data into revenue-focused iteration.

### Extended details
- Improved athlete profile screens: performant UIKit components with Combine-driven data binding
- Bug fixes and stability improvements across the iOS codebase
- Worked within a team environment focused on iterative, data-informed product improvement
- Experimentation and analytics layer feeding conversion funnel data back to product decisions

### Tech stack
Swift, UIKit, Combine, Experimentation, Analytics

---

## Plurall — Somos Educação
**Role:** Staff iOS Engineer

### Short blurb (always visible)
Led iOS engineering for one of Brazil's largest education apps — 1M+ active users. Defined architecture, automated delivery with Fastlane, and mentored engineers toward independent high-quality delivery at scale.

### Extended details
- Defined and enforced architecture patterns adopted across the iOS team
- Implemented Fastlane lanes that reduced release preparation from days to hours
- Built offline-first content delivery for students with limited connectivity
- Mentored engineers toward independent, senior-level delivery
- Owned release workflows, CI/CD setup, and App Store submission processes

### Tech stack
Swift, UIKit, Fastlane, CI/CD, Offline-first architecture, Mentorship

---

## AppFactory (Early career)
**Role:** iOS Engineer

### Notes
- App studio — shipped 25+ iOS apps across industries (healthcare, retail, education, entertainment)
- Foundation behind the "30+ apps shipped" number on the portfolio
- Worked as technical lead collaborating directly with clients throughout full product lifecycle
- Rapid prototyping: 2–3 month delivery cycles per app
- Deep App Store experience: submission, rejection resolution, optimization
