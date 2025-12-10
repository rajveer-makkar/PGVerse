# PGVerse

A simple, student-focused platform to **browse PGs**, view essential details, and contact property owners.  
No dashboards, no payments — just the core experience for students and PG owners.

---

## 🎯 Core Goal

- Make student housing simple, transparent, and hassle-free.
- Allow students to find and contact PGs easily.
- Allow owners to list their PGs with minimal friction.

---

## 🚀 Features

### 🏠 Homepage

- Clean navbar (Home, Browse PGs, Login/Signup)
- Hero section with search bar
  - **Search filters:** Location, Budget, Boys/Girls/Co-ed
- Featured Properties section (3–6 cards)
- Footer with basic links

### 🏘️ Browse PGs Page

- Grid of PG cards showing:
  - Image, Name, Location, Price (per month)
  - Facilities (WiFi, AC, Laundry icons)
  - **View Details** button
- Filters sidebar:
  - Location dropdown
  - Price range slider
  - Amenities checkboxes

### 📄 PG Details Page

- Image carousel
- Address & Google Maps embed (optional)
- Monthly price, Description, Amenities list, House rules
- "Contact Owner" button (opens modal)
  - Modal: Name, Phone, Message, Submit

### 👤 Owner/Admin Panel (Basic)

- Owner login
- Add PG form:
  - PG name, Location, Price, Facilities (checkboxes)
  - Upload images (1–4)
  - Description
- View list of uploaded PGs

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS (Tailwind/Bootstrap), JavaScript (Web Components)
- **Icons:** Font Awesome
- **Deployment:** GitHub Pages

---

## 📦 Getting Started

1. **Clone the repo:**
   ```sh
   git clone https://github.com/your-username/WebDevProject.git
   ```
2. **Open `index.html` in your browser** (or use Live Server in VS Code).

3. **For GitHub Pages deployment:**
   - Ensure all asset and page links use `/WebDevProject/` as the base path.

---

## 📁 Project Structure

```
/assets         # Images, icons, etc.
/src
  /components   # Custom elements (navbar, footer, cards)
  index.html
  browse.html
  owner.html
  details.html
  ...
```

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](../LICENSE)

---

**PGVerse** — Making student housing simple, transparent, and hassle-free.
