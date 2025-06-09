
# 🌈 EXTENSIONXTRA — Accessibility Meets Innovation

> 🧠 **Enhancing Web Accessibility for Everyone**  
> ✨ *Colorblind? Dyslexic? Partially blind? We've got you covered.*

---

## 📌 About the Project

**EXTENSIONXTRA** is a powerful, user-focused browser extension designed to make the internet more inclusive for users with:
- 🎨 **Color blindness**
- 🔠 **Dyslexia**
- 🧠 **Hyperlexia**
- ✍️ **Dysorthographia**
- 🙈 **Partial or temporary visual impairments**
- 🔊 **Reading difficulties or illiteracy**

---

## ❗ Problem Statement

> The internet isn’t equally accessible for all.

- 🔴 People with **color blindness** struggle with red-green shades or visual elements lacking proper contrast.
- 🔤 People with **dyslexia** face difficulties distinguishing fonts and letters on most sites.
- 👀 Individuals with **partial blindness** or **low vision** can't comfortably read online content.

---

## 💡 Our Solution

✨ **EXTENSIONXTRA** bridges this gap with a full suite of accessibility-first features:

### 🔧 Key Features

| 🛠 Feature | 💬 Description |
|-----------|----------------|
| **✔️ Dyslexia-Friendly Fonts** | Improves text readability with clean, distinct typography. |
| **✔️ Distraction Removal** | Removes ads, clutter, and irrelevant images. |
| **✔️ Text-to-Speech + Voice Input** | Reads pages aloud; allows voice commands. |
| **✔️ Word Prediction** | Smart input to support writing and communication. |
| **✔️ Adjustable Color Gradient** | Dynamically adapts web visuals based on user's color perception. |
| **✔️ Customizable Color Filters** | Personalized filters for all types and severities of color blindness. |
| **✔️ Language-aware Color Translation** | Understand color codes even if you're a non-native language speaker. |
| **✔️ Multi-site Compatibility** | Works across all major websites—social, educational, news, and more. |
| **✔️ Easy-to-Use UI** | One-click control panel with zero learning curve. |

---

## 🎯 Target Audience

- Individuals with **color vision deficiency**
- People with **dyslexia**, **hyperlexia**, and **dysorthographia**
- Users with **partial blindness**
- People who **cannot read/write** but can understand audio
- Educators, accessibility researchers, and developers

---

## 🏆 Why EXTENSIONXTRA Stands Out

| 🚀 Feature | 🔥 Value |
|-----------|----------|
| 💸 **Free to Use** | No subscriptions. No hidden charges. |
| 🔄 **Regularly Updated** | New features and bug fixes, always! |
| ⚙️ **Configurable Filters** | Full control over visual adaptation. |
| 🌍 **Language-Aware Color Aid** | Helps users from diverse linguistic backgrounds. |
| 🖥 **Website-Wide Compatibility** | From e-commerce to e-learning — works everywhere. |
| 🧠 **Neurodiversity-First UX** | Built for everyone, not just the average user. |

---


## 🧰 Used Technologies

### 🔷 Frontend (Chrome Extension UI)

| Technology             | Purpose                                   |
|-----------------------|-------------------------------------------|
| **HTML5**             | Structure of the popup UI                  |
| **CSS3**              | Styling the extension popup                |
| **JavaScript (Vanilla JS)** | Event handling, DOM manipulation, integration with Chrome APIs |

### 🟦 Chrome Extension APIs

| API                                     | Usage                                             |
|----------------------------------------|--------------------------------------------------|
| `chrome.runtime.sendMessage` / `onMessage` | Communication between popup and background/content scripts |
| `chrome.tabs.query`                     | Identify the active tab                           |
| `chrome.scripting.executeScript`       | Inject scripts into web pages (content.js)       |
| `chrome.storage` (optional)             | Save user settings (planned, not yet implemented) |

### 🟠 Backend (Text-to-Speech Server)

| Technology          | Purpose                                   |
|---------------------|-------------------------------------------|
| **Python 3**        | Server-side language                       |
| **Flask**           | Python web framework to handle TTS requests |
| **gTTS (Google Text-to-Speech)** | Python library to convert text to `.mp3` audio |
| **Werkzeug**        | Flask’s internal tool to serve files like `output.mp3` |

### 🧪 Development & Debugging

| Tool                 | Purpose                                   |
|----------------------|-------------------------------------------|
| **Chrome Developer Tools** | Debug JS, inspect popup and content script behavior |
| **Postman / Browser Testing** | Test Flask API endpoints locally         |

### 🖼️ Assets

| Asset                | Description                              |
|----------------------|------------------------------------------|
| **.png icons** (16x, 48x, 128x) | Toolbar and extension icons             |

### ✅ Optional / Planned Additions

| Technology           | Use Case                                  |
|---------------------|--------------------------------------------|
| **Web Speech API**   | Browser-native Speech-to-Text functionality |
| **Chrome Storage API** | Save user preferences (font, contrast)    |
| **Deployed Backend** (e.g., Render, Glitch) | Host Flask app publicly (since localhost won’t work in production) |

---

## 🥊 Market Competitors

We respect the great work of:

- 🟥 Colorblindy
- 🔤 Dyslexic Browser
- 🎯 ColorBlindClick
- 🎨 Eye Dropper
- 🧑‍🏫 Helperbird
- 👁️ ChromeVis
- 🗣️ ChromeVox
- 📖 Snap&Read

…but **EXTENSIONXTRA** goes beyond by combining their strengths with *never-seen-before* enhancements.

---

## 👨‍💻 Project Lead

### 🧑‍🚀 [Himadri Das](https://github.com/Himadri8991)  
Tech Enthusiast | Accessibility Advocate | Cloud & AI Developer  
🔗 [LinkedIn](https://www.linkedin.com/in/himadri-das-27487324a) 

---

## 📦 Installation Guide

Get started in just **4 steps**:

1. **Download** or **clone** the repository.
2. Extract the `ExtensionXtra` folder to a location on your device.
3. Open **Chrome** and go to `chrome://extensions/`
4. Enable **Developer Mode** → Click on **Load Unpacked**  
5. Select the `ExtensionXtra` folder

🎉 **Boom!** You're now ready to experience a more accessible web.

---

## 📄 Short Note

🧩 EXTENSIONXTRA isn’t just a tool — it’s a mission to build a **more inclusive internet**.  
Whether you see colors differently, struggle with fonts, or need a helping voice — this extension adapts the web for **you**.

If you believe in accessibility, inclusivity, and the power of innovation —  
⭐ **Star this repo**, share it with others, and let’s build something meaningful together.

---

## 🛣 Roadmap

- [ ] AI-based content-aware filter enhancement  
- [ ] Mobile browser support (Android/iOS)  
- [ ] Community-contributed themes  
- [ ] OCR support for reading images  
- [ ] Export/import settings feature  
- [ ] One-click accessibility scanner

---

## 🤝 Contribution

We welcome:
- Developers 🧑‍💻
- Designers 🎨
- Accessibility Advocates ♿
- Testers 🧪

To contribute:
1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Submit a Pull Request

---

## 📄 License

**MIT License**  
Free for personal and commercial use — just give credit where it’s due 💙

---

> "A truly inclusive web is one where no user is left behind. With EXTENSIONXTRA, we're one step closer to that future."

---


