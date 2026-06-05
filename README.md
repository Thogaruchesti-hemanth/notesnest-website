# 🪶 NotesNest Website
 
<div align="center">

<img src="https://github.com/user-attachments/assets/c7c5a72b-6a97-4e57-9970-bde9f61d174a" width="100%" alt="NotesNest Banner" />

**Official Website & Documentation Hub for NotesNest — The Ultimate Android Productivity Platform**

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fnotesnest-app.web.app)](https://notesnest-app.web.app)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Play Store](https://img.shields.io/badge/Google_Play-414141?style=flat&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=com.hemanth.NotesNest)

[Explore Portal](https://notesnest-app.web.app) · [Report an Issue](https://github.com/Thogaruchesti-hemanth/notesnest-website/issues) · [Suggest a Feature](https://github.com/Thogaruchesti-hemanth/notesnest-website/issues)

</div>

---

## 📖 About The Project

This repository hosts the official static website and legal documentation platform for **NotesNest**, a comprehensive productivity application for Android devices. NotesNest is designed to help users capture thoughts, track daily checklists, structure future targets, and manage reminders with ease. 

This portal serves as the primary landing presence for NotesNest, offering deep product documentation, support pipelines, and high-fidelity regulatory policy pages (Privacy, Terms, Deletion) required by the Google Play Console for privacy disclosures.

### 🎯 Key Objectives
* **Aesthetic Presentation**: Introduce the Android app's clean features to visitors using premium, modern UI cards and layouts.
* **Documentation Hub**: Offer a fully interactive, mobile-optimized User Guide for app operations.
* **Compliance Assurance**: Display GDPR/CCPA-compliant privacy statements and terms with a highly readable visual hierarchy.
* **Interactive Pipelines**: Empower users to file structured bug reports, suggest feature additions, or initiate secure account deletion.

---

## ✨ Features & Architecture

The portal has been developed using vanilla HTML5, CSS3, and modern Javascript, implementing professional-grade UI components:

### 📄 Core Pages Included
* **Home (`index.html`)** — Premium landing viewport with side-by-side CTA controls, LCP-optimized hero image loading (`fetchpriority="high"`), responsive cards grids, and interactive FAQ accordions.
* **User Guide (`user-guide.html`)** — Fully indexed product user guide. Features sticky horizontal navigation pills on tablets, and a sliding drawer menu triggered via a floating action button on mobile screens.
* **Privacy Policy (`privacy.html`)** — Premium legal breakdown containing a frosted glassmorphism Ads Policy card (`backdrop-filter: blur(4px)`) and a pure HTML/CSS live status dashboard simulating third-party integration points.
* **Terms of Service (`terms.html`)** — Edge-to-edge dark hero banner with golden accents, layered badge seals (gold check on black certificate), notice blockquotes, and highly structured, custom grid summaries for Sections 2 through 9.
* **Account Deletion (`delete.html`)** — A clean multi-step decommissioning funnel with warning headers, white card pre-deletion checklists, detailed data deletion matrices, and a gold-bordered Primary Action Card.
* **Bug Report (`bug-report.html`)** — A fully structured form for reporting app defects, featuring a center-aligned workflow grid on desktop.
* **Feedback & Contact (`feedback.html`, `contact.html`)** — Interactive input controls and clean grid resources.

### 🎨 Visual & Performance Engineering
* **Premium Theme**: Tailored using a curated, custom color system (vibrant gold `#ffd000`, dark-brown accents `#856d1a`, charcoal backgrounds, and light warm gray cards `#f6f5f3`).
* **Micro-Animations**: Features smooth transition triggers on hover states, accordion toggles, and drawer sliders.
* **UX Safety**: Secure outbound links (`target="_blank" rel="noopener"`) configured project-wide to mitigate reverse tabnabbing and secure session navigation.
* **Responsiveness**: Re-engineered page grids, navigation, and tables to guarantee 100% fluid layouts from small viewport mobile screens up to wide desktop monitors.

---

## 🛠️ Built With

* **HTML5** — Semantic content structure and metadata definitions
* **CSS3** — Custom layout grid systems, flexboxes, and animations
* **JavaScript** — Interactive menus, accordion drawers, and scroll observers
* **Font Awesome v6.6.0** — High-fidelity vector iconography
* **Google Fonts** — Inter, Outfit, and Roboto typography integrations

---

## 📂 Project Structure

```
notesnest-website/
├── index.html              # Homepage
├── user-guide.html         # Documentation Portal
├── contact.html            # Help & Contact details
├── feedback.html           # Feedback submission form
├── bug-report.html         # Bug reporting system
├── privacy.html            # Privacy Policy (GDPR/CCPA compliant)
├── terms.html              # Terms of Service (Section Cards Redesign)
├── delete.html             # Account deletion process
├── css/
│   └── style.css           # Core styling stylesheet
├── js/
│   └── script.js           # Main JavaScript functionality
├── images/
│   ├── logo.jpeg           # Brand identity logo
│   ├── favicon.svg         # SVG vector favicon
│   ├── favicon-96x96.png   # PNG icon asset
│   └── google-play-badge.png
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
To review or run the website locally, all you need is a modern web browser. 

### Local Run & Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Thogaruchesti-hemanth/notesnest-website.git
   ```

2. **Enter directory**
   ```bash
   cd notesnest-website
   ```

3. **Launch Dev Server**
   Choose one of the following commands based on your local environment:
   * **Python 3**:
     ```bash
     python -m http.server 8000
     ```
   * **NodeJS (Local Dev)**:
     ```bash
     npx http-server
     ```
   * **PHP Server**:
     ```bash
     php -S localhost:8000
     ```

4. **Open Portal**
   Navigate to `http://localhost:8000` (or the port specified by your tool) in your web browser.

---

## 🌐 Deployment & Hosting

### Firebase Hosting (Current Production)
The live production website is hosted using Google Firebase. To deploy new updates:
1. Initialize Firebase in the repository:
   ```bash
   firebase init hosting
   ```
2. Deploy the static assets:
   ```bash
   firebase deploy --only hosting
   ```

### GitHub Pages Alternative
1. Navigate to **Settings** > **Pages** inside your fork.
2. Select the source branch (e.g. `main` or a feature branch) and folder `/ (root)`.
3. Save and wait for deployment to complete at `https://Thogaruchesti-hemanth.github.io/notesnest-website/`.

---

## 📱 About NotesNest Android App

NotesNest is a fully optimized, private productivity platform offering a distraction-free space to capture and review data:
* 📝 **Robust Notes**: Easily compose and format note blocks.
* ⏰ **Reminders**: Schedule local alarms with custom recurrence.
* ✅ **Tasks**: Integrate checklist items and strike off targets.
* 🔒 **Local Security**: Encrypted database files (SQLite/Room) and local parameter locks (EncryptedSharedPreferences).
* 💾 **Secure Backups**: Back up encrypted files locally or export backups to a personal Google Drive account.
* 🌙 **Theming**: Integrated system matching for light and dark environments.

**Developer:** Thogaruchesti Hemanth  
**Download Platform:** [Google Play Store](https://play.google.com/store/apps/details?id=com.hemanth.NotesNest)

---

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **highly valued**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request on the main repository.

---

## 📝 License

Distributed under the MIT License. See the `LICENSE` file for more details.

---

## 📞 Support & Developer Info

* **Developer Portfolio**: [Thogaruchesti Hemanth](https://thogaruchesti-hemanth.web.app/)
* **GitHub Profile**: [@Thogaruchesti-hemanth](https://github.com/Thogaruchesti-hemanth)
* **Email Contact**: [saihemanth225@gmail.com](mailto:saihemanth225@gmail.com)
* **App Play Store Link**: [Get NotesNest on Google Play](https://play.google.com/store/apps/details?id=com.hemanth.NotesNest)

---

<div align="center">

**⭐ Star this repository if you find the designs or app helpful!**

Made with ❤️ by [Thogaruchesti Hemanth](https://github.com/Thogaruchesti-hemanth)

</div>
