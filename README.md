# TypingSpeedMeasurement

# ⌨️ Typing Speed Challenge

A clean, dark-themed typing speed tester built with vanilla HTML, CSS, and JavaScript. Test your WPM, accuracy, and get a final score — no frameworks, no dependencies.

---

## 🚀 Live Demo

> [View on GitHub Pages](https://jonsnow273.github.io/typing-speed-challenge) *(update link after deploying)*

---

## 📸 Preview

| Home Screen | Typing Screen | Results Screen |
|-------------|---------------|----------------|
| Start the challenge | Live WPM, accuracy & timer | Final score & feedback |

---

## ✨ Features

- 🎲 **Random paragraphs** — 5 unique passages loaded from a JSON file
- 🟢🔴 **Live character highlighting** — green for correct, red for incorrect
- ⚡ **Real-time stats** — WPM, accuracy, and timer update as you type
- 🏆 **Score system** — calculated as `WPM × accuracy%` to reward precision
- 💬 **Performance feedback** — personalized message based on your WPM
- 🔁 **Instant restart** — jump straight into a new round

---

## 🗂️ Project Structure

```
typing-speed-challenge/
├── index.html        # App structure and screens
├── style.css         # Dark theme styling and animations
├── script.js         # All game logic
└── statement.json    # Paragraph data
```

---

## 🛠️ How to Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/jonsnow273/typing-speed-challenge.git
   cd typing-speed-challenge
   ```

2. Open with **Live Server** in VS Code
   - Right-click `index.html` → *Open with Live Server*
   - Or use the Live Server button in the VS Code status bar

> ⚠️ Do **not** open `index.html` by double-clicking it. The `fetch()` call for the JSON file requires a local server and won't work over the `file://` protocol.

---

## 🧮 How Scoring Works

| Metric | How it's calculated |
|--------|-------------------|
| **WPM** | `total words typed ÷ minutes elapsed` |
| **Accuracy** | `correct characters ÷ total typed × 100` |
| **Score** | `WPM × (accuracy / 100)` |

Typing fast but sloppy? Your score takes the hit. Precision matters.

---

## 💬 Feedback Tiers

| WPM | Message |
|-----|---------|
| 70+ | 🔥 Blazing fast! You're a typing machine! |
| 50–69 | 💪 Great speed! Keep pushing! |
| 30–49 | 👍 Solid effort! Practice makes perfect. |
| 0–29 | 🐢 Keep practicing! Speed comes with time. |

---

## 🧰 Built With

- HTML5
- CSS3 (animations, custom dark theme)
- Vanilla JavaScript (Fetch API, DOM manipulation, setInterval)

---

## 👤 Author

**Pranit** — [@jonsnow273](https://github.com/jonsnow273)

## Live Demo: https://typing-speed-measurement.vercel.app/
