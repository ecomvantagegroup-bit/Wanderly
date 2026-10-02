# Wanderly

**Wander further. Plan better.**

Wanderly is a travel guide website that brings heritage, culture and city travel guides for several countries into one place. This repository contains the **demo version**: an animated, 3D-enhanced front end where all travel content is loaded from JSON data.

Wanderly is the parent brand. Each country is presented as a subordinate guide, for example **Wanderly India** or **Wanderly Japan**.

---

## Tech Stack

| Purpose | Technology |
|---|---|
| UI framework | [Vue 3](https://vuejs.org/) with JSX |
| Build tool | [Vite](https://vitejs.dev/) with the Vue JSX plugin |
| Animation | [GSAP](https://gsap.com/) (including ScrollTrigger) |
| 3D graphics | [three.js](https://threejs.org/) |
| Content | JSON data files |

---

## Features

- Landing page with a 3D hero scene built with three.js.
- Smooth scroll-based and entrance animations with GSAP.
- Country guides with city pages, top attractions, food, travel tips, FAQs and itineraries.
- Fully data-driven pages: change the JSON and the site updates, with no code changes.
- SEO-ready content fields (page titles, meta descriptions, headings and keywords).
- Responsive layout for mobile, tablet and desktop.

---

## Countries Covered

| Country | Cities and destinations |
|---|---|
| India | Delhi, Agra, Jaipur, Mumbai, Goa |
| United States | New York City, Washington D.C., Los Angeles, San Francisco, Las Vegas |
| Indonesia | Jakarta, Yogyakarta, Bali, Labuan Bajo |
| Japan | Tokyo, Kyoto, Osaka, Hiroshima, Nara |
| Russia | Moscow, Saint Petersburg, Kazan, Sochi, Vladimir and Suzdal |
| China | Beijing, Xi’an, Shanghai, Guilin and Yangshuo, Chengdu |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm, pnpm or yarn

### Installation

```bash
git clone https://github.com/<your-username>/wanderly.git
cd wanderly
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local address shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## How the Data Works

All site content is stored in JSON files and loaded by the app at runtime. The code contains no hard-coded travel text.

- One JSON file describes the site (brand name, tagline, navigation and countries).
- One JSON file per country holds its overview, cities, attractions, food, travel tips, itineraries, FAQs and SEO fields.
- To add or edit content, change the JSON; to add a new country, add a new country JSON file and list it in the site data.

---

## Content Notes

- Opening hours, ticket prices, visa and entry rules, and travel advisories change often. Verify them against official sources before publishing.
- UNESCO World Heritage labels should name the exact property and should not be applied to every nearby attraction.
- Distances and travel times are approximate.

---

## Roadmap

- [ ] Country landing pages with animated city cards
- [ ] City detail pages with attraction galleries
- [ ] Interactive 3D globe for choosing a country
- [ ] Search and filter across cities and attractions
- [ ] Multi-city route and itinerary planner
- [ ] Image and media support

---

## Contributing

This is a demo project. Suggestions and improvements are welcome:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

---

## License

Choose a license for the project (for example MIT) and add a `LICENSE` file to the repository.
