# 🧮 Calculator App

A clean, interactive calculator built with vanilla HTML, CSS, and JavaScript using DOM manipulation.

## 🔗 Live Demo

> [https://niyasharma25.github.io/Calculator/]

---

## 📁 Project Structure

```
calculator/
├── index.html   # Markup & button layout
├── style.css    # Styles, tokens, responsive layout
├── script.js    # All logic via DOM manipulation
└── README.md    # Documentation
```

---

## ✨ Features

| Feature | Details |
|---|---|
| Basic operations | Add, subtract, multiply, divide |
| Chained calculations | `3 + 5 × 2` evaluated correctly |
| Percentage | `%` key converts to decimal |
| Toggle sign | `+/−` flips positive/negative |
| Divide by zero | Shows `Error` instead of crashing |
| Expression display | Shows full expression above result |
| Active operator highlight | Current operator button glows white |
| Responsive font | Result shrinks for long numbers |
| Keyboard support | Numbers, operators, Enter, Backspace, Escape |
| Mobile-friendly | Works on all screen sizes |

---

## 🕹️ How to Use

**Mouse / Touch:**
- Tap number buttons to build a number
- Tap an operator (`+` `−` `×` `÷`) then another number
- Tap `=` to see the result
- `AC` clears everything
- `%` converts the current number to a percentage
- `+/−` toggles positive/negative

**Keyboard:**
| Key | Action |
|---|---|
| `0–9` | Input digit |
| `.` | Decimal point |
| `+` `-` `*` `/` | Operators |
| `Enter` or `=` | Evaluate |
| `Backspace` | Delete last digit |
| `Escape` | Clear all |

---

## 🛠️ Built With

- HTML5
- CSS3 (custom properties, grid layout)
- Vanilla JavaScript (DOM manipulation, event delegation, keyboard events)

---

## 🧠 How It Works (JS Concepts Used)

- **State object** — holds `current`, `previous`, `operator`, `justEvaled`
- **Event delegation** — single click listener on the grid reads `data-action` and `data-val` attributes
- **DOM manipulation** — `textContent`, `classList.add/remove` update display in real time
- **Keyboard events** — `keydown` listener maps keys to the same action functions
- **Floating-point handling** — `toPrecision(12)` avoids `0.1 + 0.2 = 0.30000000004`

---

## 📬 Contact

- **Email** — [niya93428@gmail.com](mailto:niya93428@gmail.com)
- **GitHub** — [github.com/niyasharma25](https://github.com/niyasharma25)
- **LinkedIn** — [linkedin.com/in/niya-sharma-005398351](https://www.linkedin.com/in/niya-sharma-005398351)
