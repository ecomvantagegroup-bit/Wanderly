# City page prompts: 29 cities, 377 images

Each section below is one ready-to-paste prompt in the same format as your Las Vegas reference: generate every image first, then organize them into a two-layer collection (city collection with `hero`, one sub-collection per place with `primary` and `hover`). Place images are 3:4 at 1200 × 1600 and heroes are 16:9 at 2400 × 1350.

| Country | City | Places | Images | File |
|---|---|---|---|---|
| India | Delhi | 8 | 17 | `india-delhi.md` |
| India | Agra | 6 | 13 | `india-agra.md` |
| India | Jaipur | 8 | 17 | `india-jaipur.md` |
| India | Mumbai | 8 | 17 | `india-mumbai.md` |
| India | Goa | 9 | 19 | `india-goa.md` |
| China | Beijing | 6 | 13 | `china-beijing.md` |
| China | Xi’an | 5 | 11 | `china-xian.md` |
| China | Shanghai | 6 | 13 | `china-shanghai.md` |
| China | Guilin and Yangshuo | 5 | 11 | `china-guilin-yangshuo.md` |
| China | Chengdu | 5 | 11 | `china-chengdu.md` |
| Indonesia | Jakarta | 6 | 13 | `indonesia-jakarta.md` |
| Indonesia | Yogyakarta | 6 | 13 | `indonesia-yogyakarta.md` |
| Indonesia | Bali | 7 | 15 | `indonesia-bali.md` |
| Indonesia | Labuan Bajo and Komodo | 5 | 11 | `indonesia-labuan-bajo-komodo.md` |
| Japan | Tokyo | 6 | 13 | `japan-tokyo.md` |
| Japan | Kyoto | 7 | 15 | `japan-kyoto.md` |
| Japan | Osaka | 6 | 13 | `japan-osaka.md` |
| Japan | Hiroshima | 5 | 11 | `japan-hiroshima.md` |
| Japan | Nara | 5 | 11 | `japan-nara.md` |
| Russia | Moscow | 6 | 13 | `russia-moscow.md` |
| Russia | Saint Petersburg | 6 | 13 | `russia-saint-petersburg.md` |
| Russia | Kazan | 5 | 11 | `russia-kazan.md` |
| Russia | Sochi | 5 | 11 | `russia-sochi.md` |
| Russia | Vladimir and Suzdal | 5 | 11 | `russia-vladimir-suzdal.md` |
| United States | New York City | 6 | 13 | `usa-new-york-city.md` |
| United States | Washington, D.C. | 6 | 13 | `usa-washington-dc.md` |
| United States | Los Angeles | 6 | 13 | `usa-los-angeles.md` |
| United States | San Francisco | 6 | 13 | `usa-san-francisco.md` |
| United States | Las Vegas | 4 | 9 | `usa-las-vegas.md` |
| **Total** | | | **377** | |

## India: Delhi (17 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **17 images for the Delhi (India) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 17 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 17 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 17 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 17 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`delhi`

Then create these sub-collections inside `delhi`:

1. `red-fort-lal-qila`
2. `qutb-minar-and-monuments`
3. `humayun-s-tomb`
4. `india-gate-and-kartavya-path`
5. `lotus-temple`
6. `jama-masjid`
7. `chandni-chowk`
8. `akshardham-temple`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`delhi`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 16 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`delhi`

- `hero`
- `red-fort-lal-qila`
  - `primary`
  - `hover`
- `qutb-minar-and-monuments`
  - `primary`
  - `hover`
- `humayun-s-tomb`
  - `primary`
  - `hover`
- `india-gate-and-kartavya-path`
  - `primary`
  - `hover`
- `lotus-temple`
  - `primary`
  - `hover`
- `jama-masjid`
  - `primary`
  - `hover`
- `chandni-chowk`
  - `primary`
  - `hover`
- `akshardham-temple`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 17 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 17 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 16 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Delhi — City Hero

**Final collection:** `delhi`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide golden-hour panorama of Delhi's government buildings on Raisina Hill at the end of a broad empty avenue, soft haze and long shadows.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Red Fort (Lal Qila) — Main View

**Final collection:** `delhi > red-fort-lal-qila`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Red Fort's Lahori Gate and massive red sandstone ramparts in warm morning light, deep blue sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Red Fort (Lal Qila) — Second View

**Final collection:** `delhi > red-fort-lal-qila`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Diwan-i-Khas marble pavilion with carved arches and inlay inside the Red Fort, soft shade, no people.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Qutb Minar and Monuments — Main View

**Final collection:** `delhi > qutb-minar-and-monuments`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Qutb Minar's tall red sandstone tower seen from below against a blue sky, carved balconies and inscription bands.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Qutb Minar and Monuments — Second View

**Final collection:** `delhi > qutb-minar-and-monuments`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Iron Pillar and the ruined arches of the Quwwat-ul-Islam Mosque in the Qutb complex, golden light.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Humayun's Tomb — Main View

**Final collection:** `delhi > humayun-s-tomb`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Humayun's Tomb with its double dome in red sandstone and white marble at golden hour, charbagh lawns in front.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Humayun's Tomb — Second View

**Final collection:** `delhi > humayun-s-tomb`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A long symmetrical view down a water channel of the charbagh garden at Humayun's Tomb.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. India Gate and Kartavya Path — Main View

**Final collection:** `delhi > india-gate-and-kartavya-path`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

India Gate arch lit at dusk with a glowing sky and fountains in front.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. India Gate and Kartavya Path — Second View

**Final collection:** `delhi > india-gate-and-kartavya-path`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The wide Kartavya Path with lawns and trees leading toward India Gate in dawn mist.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Lotus Temple — Main View

**Final collection:** `delhi > lotus-temple`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The white marble Lotus Temple's petal shapes reflected in its pools at sunset.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Lotus Temple — Second View

**Final collection:** `delhi > lotus-temple`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Close-up of the Lotus Temple's marble petals and gardens in soft light, architectural abstract.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Jama Masjid — Main View

**Final collection:** `delhi > jama-masjid`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Jama Masjid's three white marble domes and two minarets seen from the gate steps in golden light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Jama Masjid — Second View

**Final collection:** `delhi > jama-masjid`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The vast courtyard of Jama Masjid with the central pool and arched cloisters, no crowds.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 14. Chandni Chowk — Main View

**Final collection:** `delhi > chandni-chowk`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A busy Chandni Chowk lane with tangled wires and old shopfronts in hazy morning light, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 15. Chandni Chowk — Second View

**Final collection:** `delhi > chandni-chowk`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Heaped baskets of colourful spices and sweets at an Old Delhi bazaar stall, close-up.

This must be clearly different from Image 14 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 16. Akshardham Temple — Main View

**Final collection:** `delhi > akshardham-temple`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Akshardham Temple's carved pink sandstone facade and domes in warm evening light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 17. Akshardham Temple — Second View

**Final collection:** `delhi > akshardham-temple`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Akshardham temple courtyard illuminated at night with glowing reflections.

This must be clearly different from Image 16 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–17: **3:4 — 1200 × 1600**
- **Never generate Images 2–17 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 17 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `delhi`
  - `hero` — ✓ / FAILED
  - `red-fort-lal-qila`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `qutb-minar-and-monuments`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `humayun-s-tomb`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `india-gate-and-kartavya-path`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `lotus-temple`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `jama-masjid`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `chandni-chowk`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `akshardham-temple`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Red Fort (Lal Qila) primary
3. Generate Red Fort (Lal Qila) hover
4. Generate Qutb Minar and Monuments primary
5. Generate Qutb Minar and Monuments hover
6. Generate Humayun's Tomb primary
7. Generate Humayun's Tomb hover
8. Generate India Gate and Kartavya Path primary
9. Generate India Gate and Kartavya Path hover
10. Generate Lotus Temple primary
11. Generate Lotus Temple hover
12. Generate Jama Masjid primary
13. Generate Jama Masjid hover
14. Generate Chandni Chowk primary
15. Generate Chandni Chowk hover
16. Generate Akshardham Temple primary
17. Generate Akshardham Temple hover

**Do not organize any image during this phase.**

## Organization order

After all 17 generation attempts are complete:

1. Create `delhi`
2. Put `hero` into `delhi`
3. Create `red-fort-lal-qila` and put `primary` + `hover` inside
4. Create `qutb-minar-and-monuments` and put `primary` + `hover` inside
5. Create `humayun-s-tomb` and put `primary` + `hover` inside
6. Create `india-gate-and-kartavya-path` and put `primary` + `hover` inside
7. Create `lotus-temple` and put `primary` + `hover` inside
8. Create `jama-masjid` and put `primary` + `hover` inside
9. Create `chandni-chowk` and put `primary` + `hover` inside
10. Create `akshardham-temple` and put `primary` + `hover` inside
11. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 17 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–17 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## India: Agra (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the Agra (India) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`agra`

Then create these sub-collections inside `agra`:

1. `taj-mahal`
2. `agra-fort`
3. `fatehpur-sikri`
4. `itmad-ud-daulah-s-tomb`
5. `mehtab-bagh`
6. `akbar-s-tomb-sikandra`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`agra`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`agra`

- `hero`
- `taj-mahal`
  - `primary`
  - `hover`
- `agra-fort`
  - `primary`
  - `hover`
- `fatehpur-sikri`
  - `primary`
  - `hover`
- `itmad-ud-daulah-s-tomb`
  - `primary`
  - `hover`
- `mehtab-bagh`
  - `primary`
  - `hover`
- `akbar-s-tomb-sikandra`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Agra — City Hero

**Final collection:** `agra`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide sunrise view over the Yamuna River at Agra with mist, boats and the silhouettes of Mughal monuments on the far bank.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Taj Mahal — Main View

**Final collection:** `agra > taj-mahal`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Taj Mahal's white marble facade and four minarets with the long reflecting pool at sunrise.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Taj Mahal — Second View

**Final collection:** `agra > taj-mahal`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Taj Mahal's pietra dura floral inlay and carved marble detail up close, soft light.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Agra Fort — Main View

**Final collection:** `agra > agra-fort`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Agra Fort's red sandstone Amar Singh Gate and ramparts at golden hour.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Agra Fort — Second View

**Final collection:** `agra > agra-fort`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A marble courtyard of Agra Fort's Khas Mahal with the Taj Mahal faint in the haze.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Fatehpur Sikri — Main View

**Final collection:** `agra > fatehpur-sikri`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The towering red sandstone Buland Darwaza gateway seen from below.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Fatehpur Sikri — Second View

**Final collection:** `agra > fatehpur-sikri`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The five-tier Panch Mahal pavilion and empty courtyards at Fatehpur Sikri in warm light.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Itmad-ud-Daulah's Tomb — Main View

**Final collection:** `agra > itmad-ud-daulah-s-tomb`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Itmad-ud-Daulah's white marble tomb with inlay and corner minarets in its garden, soft light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Itmad-ud-Daulah's Tomb — Second View

**Final collection:** `agra > itmad-ud-daulah-s-tomb`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Close-up of carved marble lattice screens and inlay at Itmad-ud-Daulah's Tomb.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Mehtab Bagh — Main View

**Final collection:** `agra > mehtab-bagh`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Taj Mahal seen across the river from Mehtab Bagh at sunset with golden reflections.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Mehtab Bagh — Second View

**Final collection:** `agra > mehtab-bagh`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Quiet garden pathways at Mehtab Bagh with trees and the Taj faint in evening haze.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Akbar's Tomb, Sikandra — Main View

**Final collection:** `agra > akbar-s-tomb-sikandra`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The red sandstone and marble gateway of Akbar's Tomb with its four white minarets.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Akbar's Tomb, Sikandra — Second View

**Final collection:** `agra > akbar-s-tomb-sikandra`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The long garden causeway leading to Akbar's Tomb with symmetrical trees in soft evening light.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `agra`
  - `hero` — ✓ / FAILED
  - `taj-mahal`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `agra-fort`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `fatehpur-sikri`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `itmad-ud-daulah-s-tomb`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `mehtab-bagh`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `akbar-s-tomb-sikandra`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Taj Mahal primary
3. Generate Taj Mahal hover
4. Generate Agra Fort primary
5. Generate Agra Fort hover
6. Generate Fatehpur Sikri primary
7. Generate Fatehpur Sikri hover
8. Generate Itmad-ud-Daulah's Tomb primary
9. Generate Itmad-ud-Daulah's Tomb hover
10. Generate Mehtab Bagh primary
11. Generate Mehtab Bagh hover
12. Generate Akbar's Tomb, Sikandra primary
13. Generate Akbar's Tomb, Sikandra hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `agra`
2. Put `hero` into `agra`
3. Create `taj-mahal` and put `primary` + `hover` inside
4. Create `agra-fort` and put `primary` + `hover` inside
5. Create `fatehpur-sikri` and put `primary` + `hover` inside
6. Create `itmad-ud-daulah-s-tomb` and put `primary` + `hover` inside
7. Create `mehtab-bagh` and put `primary` + `hover` inside
8. Create `akbar-s-tomb-sikandra` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## India: Jaipur (17 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **17 images for the Jaipur (India) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 17 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 17 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 17 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 17 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`jaipur`

Then create these sub-collections inside `jaipur`:

1. `amber-fort`
2. `hawa-mahal`
3. `city-palace`
4. `jantar-mantar`
5. `jal-mahal`
6. `nahargarh-fort`
7. `albert-hall-museum`
8. `johari-bazaar-and-bapu-bazaar`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`jaipur`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 16 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`jaipur`

- `hero`
- `amber-fort`
  - `primary`
  - `hover`
- `hawa-mahal`
  - `primary`
  - `hover`
- `city-palace`
  - `primary`
  - `hover`
- `jantar-mantar`
  - `primary`
  - `hover`
- `jal-mahal`
  - `primary`
  - `hover`
- `nahargarh-fort`
  - `primary`
  - `hover`
- `albert-hall-museum`
  - `primary`
  - `hover`
- `johari-bazaar-and-bapu-bazaar`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 17 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 17 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 16 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Jaipur — City Hero

**Final collection:** `jaipur`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide panorama of Jaipur's Pink City rooftops with the Nahargarh ridge behind at sunrise in rosy light.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Amber Fort — Main View

**Final collection:** `jaipur > amber-fort`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Amber Fort on its hillside above Maota Lake at sunrise with long fortified walls.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Amber Fort — Second View

**Final collection:** `jaipur > amber-fort`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Sheesh Mahal's mirror-work walls and ceiling with soft glittering reflections, no people.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Hawa Mahal — Main View

**Final collection:** `jaipur > hawa-mahal`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Hawa Mahal's pink honeycomb facade shot from below against a blue sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Hawa Mahal — Second View

**Final collection:** `jaipur > hawa-mahal`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Hawa Mahal's lattice windows in close-up with warm morning light and shadow patterns.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. City Palace — Main View

**Final collection:** `jaipur > city-palace`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Peacock Gate at Pritam Niwas Chowk in Jaipur's City Palace with its blue and green peacock details.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. City Palace — Second View

**Final collection:** `jaipur > city-palace`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A City Palace courtyard with an arched pavilion in soft light, no people.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Jantar Mantar — Main View

**Final collection:** `jaipur > jantar-mantar`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The giant Samrat Yantra sundial at Jantar Mantar under a blue sky with strong shadows.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Jantar Mantar — Second View

**Final collection:** `jaipur > jantar-mantar`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The curved stone instruments of Jantar Mantar forming geometric patterns of light and shadow.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Jal Mahal — Main View

**Final collection:** `jaipur > jal-mahal`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Jal Mahal floating in Man Sagar Lake at sunset with the Aravalli hills behind.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Jal Mahal — Second View

**Final collection:** `jaipur > jal-mahal`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Jal Mahal in soft pre-dawn mist with calm reflections.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Nahargarh Fort — Main View

**Final collection:** `jaipur > nahargarh-fort`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Nahargarh Fort's ramparts above Jaipur with the city glowing below at dusk.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Nahargarh Fort — Second View

**Final collection:** `jaipur > nahargarh-fort`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A pillared Nahargarh Fort courtyard with warm stone and a pale sky.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 14. Albert Hall Museum — Main View

**Final collection:** `jaipur > albert-hall-museum`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Albert Hall Museum's Indo-Saracenic facade lit at night against a deep blue sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 15. Albert Hall Museum — Second View

**Final collection:** `jaipur > albert-hall-museum`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The museum's arched cloisters and ornate courtyard in daylight, no people.

This must be clearly different from Image 14 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 16. Johari Bazaar and Bapu Bazaar — Main View

**Final collection:** `jaipur > johari-bazaar-and-bapu-bazaar`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A Jaipur bazaar street with pink arched shopfronts and colourful hanging textiles, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 17. Johari Bazaar and Bapu Bazaar — Second View

**Final collection:** `jaipur > johari-bazaar-and-bapu-bazaar`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Close-up of Rajasthani jewellery and block-printed fabrics on a market stall.

This must be clearly different from Image 16 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–17: **3:4 — 1200 × 1600**
- **Never generate Images 2–17 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 17 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `jaipur`
  - `hero` — ✓ / FAILED
  - `amber-fort`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `hawa-mahal`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `city-palace`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `jantar-mantar`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `jal-mahal`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `nahargarh-fort`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `albert-hall-museum`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `johari-bazaar-and-bapu-bazaar`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Amber Fort primary
3. Generate Amber Fort hover
4. Generate Hawa Mahal primary
5. Generate Hawa Mahal hover
6. Generate City Palace primary
7. Generate City Palace hover
8. Generate Jantar Mantar primary
9. Generate Jantar Mantar hover
10. Generate Jal Mahal primary
11. Generate Jal Mahal hover
12. Generate Nahargarh Fort primary
13. Generate Nahargarh Fort hover
14. Generate Albert Hall Museum primary
15. Generate Albert Hall Museum hover
16. Generate Johari Bazaar and Bapu Bazaar primary
17. Generate Johari Bazaar and Bapu Bazaar hover

**Do not organize any image during this phase.**

## Organization order

After all 17 generation attempts are complete:

1. Create `jaipur`
2. Put `hero` into `jaipur`
3. Create `amber-fort` and put `primary` + `hover` inside
4. Create `hawa-mahal` and put `primary` + `hover` inside
5. Create `city-palace` and put `primary` + `hover` inside
6. Create `jantar-mantar` and put `primary` + `hover` inside
7. Create `jal-mahal` and put `primary` + `hover` inside
8. Create `nahargarh-fort` and put `primary` + `hover` inside
9. Create `albert-hall-museum` and put `primary` + `hover` inside
10. Create `johari-bazaar-and-bapu-bazaar` and put `primary` + `hover` inside
11. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 17 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–17 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## India: Mumbai (17 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **17 images for the Mumbai (India) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 17 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 17 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 17 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 17 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`mumbai`

Then create these sub-collections inside `mumbai`:

1. `gateway-of-india`
2. `chhatrapati-shivaji-maharaj-terminus-csmt`
3. `elephanta-caves`
4. `victorian-gothic-and-art-deco-ensembles`
5. `marine-drive`
6. `colaba-causeway`
7. `chhatrapati-shivaji-maharaj-vastu-sangrahalaya`
8. `haji-ali-dargah`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`mumbai`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 16 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`mumbai`

- `hero`
- `gateway-of-india`
  - `primary`
  - `hover`
- `chhatrapati-shivaji-maharaj-terminus-csmt`
  - `primary`
  - `hover`
- `elephanta-caves`
  - `primary`
  - `hover`
- `victorian-gothic-and-art-deco-ensembles`
  - `primary`
  - `hover`
- `marine-drive`
  - `primary`
  - `hover`
- `colaba-causeway`
  - `primary`
  - `hover`
- `chhatrapati-shivaji-maharaj-vastu-sangrahalaya`
  - `primary`
  - `hover`
- `haji-ali-dargah`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 17 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 17 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 16 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Mumbai — City Hero

**Final collection:** `mumbai`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

The Bandra-Worli Sea Link at blue hour with soft sea haze and a glowing city skyline behind, wide cinematic view.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Gateway of India — Main View

**Final collection:** `mumbai > gateway-of-india`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Gateway of India arch at golden hour with the Taj Mahal Palace hotel behind and the sea in front.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Gateway of India — Second View

**Final collection:** `mumbai > gateway-of-india`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Gateway of India and ferries at dawn in soft mist over calm water.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Chhatrapati Shivaji Maharaj Terminus (CSMT) — Main View

**Final collection:** `mumbai > chhatrapati-shivaji-maharaj-terminus-csmt`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Gothic facade of Chhatrapati Shivaji Maharaj Terminus with domes and turrets at dusk, warm lights.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Chhatrapati Shivaji Maharaj Terminus (CSMT) — Second View

**Final collection:** `mumbai > chhatrapati-shivaji-maharaj-terminus-csmt`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The ornate interior hall of CSMT with carved stone arches and soft light, empty.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Elephanta Caves — Main View

**Final collection:** `mumbai > elephanta-caves`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The rock-cut pillars at the entrance of the Elephanta Caves with dappled light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Elephanta Caves — Second View

**Final collection:** `mumbai > elephanta-caves`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The three-faced Sadashiva Shiva sculpture carved in basalt inside Elephanta Cave, dramatic side light.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Victorian Gothic and Art Deco Ensembles — Main View

**Final collection:** `mumbai > victorian-gothic-and-art-deco-ensembles`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Rajabai Clock Tower and Victorian Gothic University building beside Oval Maidan in golden light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Victorian Gothic and Art Deco Ensembles — Second View

**Final collection:** `mumbai > victorian-gothic-and-art-deco-ensembles`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Pastel Art Deco apartment blocks along Oval Maidan with curved balconies under a clear sky.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Marine Drive — Main View

**Final collection:** `mumbai > marine-drive`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Marine Drive's curve of streetlights at night, the Queen's Necklace, over a calm bay.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Marine Drive — Second View

**Final collection:** `mumbai > marine-drive`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Marine Drive promenade at sunset with waves on the tetrapods and Art Deco buildings behind.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Colaba Causeway — Main View

**Final collection:** `mumbai > colaba-causeway`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A lively Colaba Causeway street with stalls and colonial buildings in golden morning light, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Colaba Causeway — Second View

**Final collection:** `mumbai > colaba-causeway`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Colourful bangles and handicrafts on a Colaba street stall, close-up.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 14. Chhatrapati Shivaji Maharaj Vastu Sangrahalaya — Main View

**Final collection:** `mumbai > chhatrapati-shivaji-maharaj-vastu-sangrahalaya`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The domed Indo-Saracenic museum building with its gardens at golden hour.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 15. Chhatrapati Shivaji Maharaj Vastu Sangrahalaya — Second View

**Final collection:** `mumbai > chhatrapati-shivaji-maharaj-vastu-sangrahalaya`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The museum's central hall with carved columns and sculptures in soft light, empty.

This must be clearly different from Image 14 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 16. Haji Ali Dargah — Main View

**Final collection:** `mumbai > haji-ali-dargah`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Haji Ali Dargah's white domes and minarets on its islet joined by a causeway at sunset.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 17. Haji Ali Dargah — Second View

**Final collection:** `mumbai > haji-ali-dargah`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Haji Ali Dargah in soft mist over the Arabian Sea at low tide with the causeway empty.

This must be clearly different from Image 16 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–17: **3:4 — 1200 × 1600**
- **Never generate Images 2–17 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 17 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `mumbai`
  - `hero` — ✓ / FAILED
  - `gateway-of-india`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `chhatrapati-shivaji-maharaj-terminus-csmt`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `elephanta-caves`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `victorian-gothic-and-art-deco-ensembles`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `marine-drive`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `colaba-causeway`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `chhatrapati-shivaji-maharaj-vastu-sangrahalaya`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `haji-ali-dargah`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Gateway of India primary
3. Generate Gateway of India hover
4. Generate Chhatrapati Shivaji Maharaj Terminus (CSMT) primary
5. Generate Chhatrapati Shivaji Maharaj Terminus (CSMT) hover
6. Generate Elephanta Caves primary
7. Generate Elephanta Caves hover
8. Generate Victorian Gothic and Art Deco Ensembles primary
9. Generate Victorian Gothic and Art Deco Ensembles hover
10. Generate Marine Drive primary
11. Generate Marine Drive hover
12. Generate Colaba Causeway primary
13. Generate Colaba Causeway hover
14. Generate Chhatrapati Shivaji Maharaj Vastu Sangrahalaya primary
15. Generate Chhatrapati Shivaji Maharaj Vastu Sangrahalaya hover
16. Generate Haji Ali Dargah primary
17. Generate Haji Ali Dargah hover

**Do not organize any image during this phase.**

## Organization order

After all 17 generation attempts are complete:

1. Create `mumbai`
2. Put `hero` into `mumbai`
3. Create `gateway-of-india` and put `primary` + `hover` inside
4. Create `chhatrapati-shivaji-maharaj-terminus-csmt` and put `primary` + `hover` inside
5. Create `elephanta-caves` and put `primary` + `hover` inside
6. Create `victorian-gothic-and-art-deco-ensembles` and put `primary` + `hover` inside
7. Create `marine-drive` and put `primary` + `hover` inside
8. Create `colaba-causeway` and put `primary` + `hover` inside
9. Create `chhatrapati-shivaji-maharaj-vastu-sangrahalaya` and put `primary` + `hover` inside
10. Create `haji-ali-dargah` and put `primary` + `hover` inside
11. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 17 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–17 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## India: Goa (19 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **19 images for the Goa (India) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 19 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 19 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 19 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 19 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`goa`

Then create these sub-collections inside `goa`:

1. `basilica-of-bom-jesus`
2. `se-cathedral`
3. `churches-and-convents-of-old-goa`
4. `fort-aguada`
5. `panaji-latin-quarter-fontainhas`
6. `baga-and-calangute-beaches`
7. `anjuna-and-vagator`
8. `palolem-beach`
9. `dudhsagar-waterfalls`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`goa`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 18 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`goa`

- `hero`
- `basilica-of-bom-jesus`
  - `primary`
  - `hover`
- `se-cathedral`
  - `primary`
  - `hover`
- `churches-and-convents-of-old-goa`
  - `primary`
  - `hover`
- `fort-aguada`
  - `primary`
  - `hover`
- `panaji-latin-quarter-fontainhas`
  - `primary`
  - `hover`
- `baga-and-calangute-beaches`
  - `primary`
  - `hover`
- `anjuna-and-vagator`
  - `primary`
  - `hover`
- `palolem-beach`
  - `primary`
  - `hover`
- `dudhsagar-waterfalls`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 19 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 19 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 18 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Goa — City Hero

**Final collection:** `goa`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

The Mandovi River in Goa at golden hour with traditional boats, palms and a warm hazy sky, wide cinematic view.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Basilica of Bom Jesus — Main View

**Final collection:** `goa > basilica-of-bom-jesus`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The laterite facade of the Basilica of Bom Jesus against a blue sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Basilica of Bom Jesus — Second View

**Final collection:** `goa > basilica-of-bom-jesus`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The gilded Baroque altar inside the Basilica of Bom Jesus in soft light, no people.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Se Cathedral — Main View

**Final collection:** `goa > se-cathedral`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Se Cathedral's whitewashed facade and tall bell tower in Old Goa under a bright sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Se Cathedral — Second View

**Final collection:** `goa > se-cathedral`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The cathedral courtyard arches in warm light with the bell tower above.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Churches and Convents of Old Goa — Main View

**Final collection:** `goa > churches-and-convents-of-old-goa`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

St Francis of Assisi Church in Old Goa with its Manueline doorway and green lawns.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Churches and Convents of Old Goa — Second View

**Final collection:** `goa > churches-and-convents-of-old-goa`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Church of St Cajetan's white dome with tropical trees at golden hour.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Fort Aguada — Main View

**Final collection:** `goa > fort-aguada`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Fort Aguada's lighthouse and laterite ramparts above the sea at sunset.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Fort Aguada — Second View

**Final collection:** `goa > fort-aguada`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Fort Aguada's walls and a path along the Arabian Sea in soft light.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Panaji Latin Quarter (Fontainhas) — Main View

**Final collection:** `goa > panaji-latin-quarter-fontainhas`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Fontainhas' colourful Portuguese-style houses on a narrow lane in soft morning light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Panaji Latin Quarter (Fontainhas) — Second View

**Final collection:** `goa > panaji-latin-quarter-fontainhas`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The white Chapel of St Sebastian with tiled roofs in Fontainhas.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Baga and Calangute Beaches — Main View

**Final collection:** `goa > baga-and-calangute-beaches`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Baga Beach at golden hour with beach shacks, loungers and a gentle surf.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Baga and Calangute Beaches — Second View

**Final collection:** `goa > baga-and-calangute-beaches`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Calangute Beach with colourful boats and water sports gear at sunrise, empty sand.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 14. Anjuna and Vagator — Main View

**Final collection:** `goa > anjuna-and-vagator`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Vagator's red laterite cliffs above a blue sea at sunset.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 15. Anjuna and Vagator — Second View

**Final collection:** `goa > anjuna-and-vagator`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Chapora Fort on its hill above Vagator Beach in warm light.

This must be clearly different from Image 14 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 16. Palolem Beach — Main View

**Final collection:** `goa > palolem-beach`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Palolem Beach's curved bay lined with palms at sunrise over calm water.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 17. Palolem Beach — Second View

**Final collection:** `goa > palolem-beach`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Colourful kayaks and wooden boats along the Palolem shoreline in soft light.

This must be clearly different from Image 16 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 18. Dudhsagar Waterfalls — Main View

**Final collection:** `goa > dudhsagar-waterfalls`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Dudhsagar Falls cascading in tiers down a forested cliff with mist and a railway viaduct.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 19. Dudhsagar Waterfalls — Second View

**Final collection:** `goa > dudhsagar-waterfalls`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The pool below Dudhsagar Falls with lush green forest and flowing water.

This must be clearly different from Image 18 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–19: **3:4 — 1200 × 1600**
- **Never generate Images 2–19 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 19 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `goa`
  - `hero` — ✓ / FAILED
  - `basilica-of-bom-jesus`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `se-cathedral`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `churches-and-convents-of-old-goa`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `fort-aguada`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `panaji-latin-quarter-fontainhas`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `baga-and-calangute-beaches`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `anjuna-and-vagator`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `palolem-beach`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `dudhsagar-waterfalls`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Basilica of Bom Jesus primary
3. Generate Basilica of Bom Jesus hover
4. Generate Se Cathedral primary
5. Generate Se Cathedral hover
6. Generate Churches and Convents of Old Goa primary
7. Generate Churches and Convents of Old Goa hover
8. Generate Fort Aguada primary
9. Generate Fort Aguada hover
10. Generate Panaji Latin Quarter (Fontainhas) primary
11. Generate Panaji Latin Quarter (Fontainhas) hover
12. Generate Baga and Calangute Beaches primary
13. Generate Baga and Calangute Beaches hover
14. Generate Anjuna and Vagator primary
15. Generate Anjuna and Vagator hover
16. Generate Palolem Beach primary
17. Generate Palolem Beach hover
18. Generate Dudhsagar Waterfalls primary
19. Generate Dudhsagar Waterfalls hover

**Do not organize any image during this phase.**

## Organization order

After all 19 generation attempts are complete:

1. Create `goa`
2. Put `hero` into `goa`
3. Create `basilica-of-bom-jesus` and put `primary` + `hover` inside
4. Create `se-cathedral` and put `primary` + `hover` inside
5. Create `churches-and-convents-of-old-goa` and put `primary` + `hover` inside
6. Create `fort-aguada` and put `primary` + `hover` inside
7. Create `panaji-latin-quarter-fontainhas` and put `primary` + `hover` inside
8. Create `baga-and-calangute-beaches` and put `primary` + `hover` inside
9. Create `anjuna-and-vagator` and put `primary` + `hover` inside
10. Create `palolem-beach` and put `primary` + `hover` inside
11. Create `dudhsagar-waterfalls` and put `primary` + `hover` inside
12. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 19 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–19 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## China: Beijing (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the Beijing (China) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`beijing`

Then create these sub-collections inside `beijing`:

1. `forbidden-city`
2. `great-wall-of-china`
3. `temple-of-heaven`
4. `summer-palace`
5. `tiananmen-square`
6. `ming-tombs`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`beijing`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`beijing`

- `hero`
- `forbidden-city`
  - `primary`
  - `hover`
- `great-wall-of-china`
  - `primary`
  - `hover`
- `temple-of-heaven`
  - `primary`
  - `hover`
- `summer-palace`
  - `primary`
  - `hover`
- `tiananmen-square`
  - `primary`
  - `hover`
- `ming-tombs`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Beijing — City Hero

**Final collection:** `beijing`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide view of the Forbidden City's golden roofs from Jingshan Park at sunrise with the skyline fading into mist.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Forbidden City — Main View

**Final collection:** `beijing > forbidden-city`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Hall of Supreme Harmony with its marble terraces and golden roof in warm light over an empty courtyard.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Forbidden City — Second View

**Final collection:** `beijing > forbidden-city`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Close-up of Forbidden City red walls, golden roof tiles and ridge-beast decorations.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Great Wall of China — Main View

**Final collection:** `beijing > great-wall-of-china`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Great Wall winding along ridge towers at Mutianyu in morning mist.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Great Wall of China — Second View

**Final collection:** `beijing > great-wall-of-china`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A watchtower on the Great Wall in autumn colours with the long wall behind.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Temple of Heaven — Main View

**Final collection:** `beijing > temple-of-heaven`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Hall of Prayer for Good Harvests with its triple blue roofs and marble base in soft morning light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Temple of Heaven — Second View

**Final collection:** `beijing > temple-of-heaven`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The long walkway and old cypress trees at the Temple of Heaven, quiet and empty.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Summer Palace — Main View

**Final collection:** `beijing > summer-palace`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Kunming Lake with the Seventeen-Arch Bridge and the Tower of Buddhist Incense on Longevity Hill at golden hour.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Summer Palace — Second View

**Final collection:** `beijing > summer-palace`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Summer Palace's painted Long Corridor stretching into the distance, empty.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Tiananmen Square — Main View

**Final collection:** `beijing > tiananmen-square`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Gate of Heavenly Peace with red walls and flags at dawn over a wide plaza, a few tiny distant figures.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Tiananmen Square — Second View

**Final collection:** `beijing > tiananmen-square`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Monument to the People's Heroes on the wide open square at blue hour, calm.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Ming Tombs — Main View

**Final collection:** `beijing > ming-tombs`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Sacred Way's stone animal and official statues lined by trees in autumn light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Ming Tombs — Second View

**Final collection:** `beijing > ming-tombs`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Changling Tomb's Hall of Eminent Favour with large wooden columns and red walls.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `beijing`
  - `hero` — ✓ / FAILED
  - `forbidden-city`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `great-wall-of-china`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `temple-of-heaven`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `summer-palace`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `tiananmen-square`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `ming-tombs`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Forbidden City primary
3. Generate Forbidden City hover
4. Generate Great Wall of China primary
5. Generate Great Wall of China hover
6. Generate Temple of Heaven primary
7. Generate Temple of Heaven hover
8. Generate Summer Palace primary
9. Generate Summer Palace hover
10. Generate Tiananmen Square primary
11. Generate Tiananmen Square hover
12. Generate Ming Tombs primary
13. Generate Ming Tombs hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `beijing`
2. Put `hero` into `beijing`
3. Create `forbidden-city` and put `primary` + `hover` inside
4. Create `great-wall-of-china` and put `primary` + `hover` inside
5. Create `temple-of-heaven` and put `primary` + `hover` inside
6. Create `summer-palace` and put `primary` + `hover` inside
7. Create `tiananmen-square` and put `primary` + `hover` inside
8. Create `ming-tombs` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## China: Xi’an (11 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **11 images for the Xi’an (China) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 11 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 11 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 11 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 11 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`xian`

Then create these sub-collections inside `xian`:

1. `terracotta-army`
2. `xi-an-city-wall`
3. `giant-wild-goose-pagoda`
4. `muslim-quarter`
5. `shaanxi-history-museum`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`xian`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 10 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`xian`

- `hero`
- `terracotta-army`
  - `primary`
  - `hover`
- `xi-an-city-wall`
  - `primary`
  - `hover`
- `giant-wild-goose-pagoda`
  - `primary`
  - `hover`
- `muslim-quarter`
  - `primary`
  - `hover`
- `shaanxi-history-museum`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 11 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 11 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 10 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Xi’an — City Hero

**Final collection:** `xian`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide view of Xi'an's Ming city wall and South Gate at blue hour with glowing lights.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Terracotta Army — Main View

**Final collection:** `xian > terracotta-army`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Rows of Terracotta Army warriors in the excavation pit under dramatic overhead light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Terracotta Army — Second View

**Final collection:** `xian > terracotta-army`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Close-up of terracotta warrior faces with fine detail and earthy tones.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Xi’an City Wall — Main View

**Final collection:** `xian > xi-an-city-wall`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Xi'an's city wall and a gate tower at sunset with red lanterns.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Xi’an City Wall — Second View

**Final collection:** `xian > xi-an-city-wall`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The wide stone top of the city wall with a bicycle path and watchtowers.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Giant Wild Goose Pagoda — Main View

**Final collection:** `xian > giant-wild-goose-pagoda`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Giant Wild Goose Pagoda's seven-storey brick tower in warm evening light with gardens.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Giant Wild Goose Pagoda — Second View

**Final collection:** `xian > giant-wild-goose-pagoda`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The pagoda's plaza at night with the lit tower reflecting in water.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Muslim Quarter — Main View

**Final collection:** `xian > muslim-quarter`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A lively Muslim Quarter street with hanging lanterns and steaming food stalls at dusk, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Muslim Quarter — Second View

**Final collection:** `xian > muslim-quarter`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Close-up of skewers and flatbread sandwiches grilling at a food stall with steam and smoke.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Shaanxi History Museum — Main View

**Final collection:** `xian > shaanxi-history-museum`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Shaanxi History Museum's Tang-style palace building with grey tiled roofs.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Shaanxi History Museum — Second View

**Final collection:** `xian > shaanxi-history-museum`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A Tang dynasty painted ceramic horse figure displayed in soft museum lighting.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–11: **3:4 — 1200 × 1600**
- **Never generate Images 2–11 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 11 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `xian`
  - `hero` — ✓ / FAILED
  - `terracotta-army`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `xi-an-city-wall`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `giant-wild-goose-pagoda`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `muslim-quarter`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `shaanxi-history-museum`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Terracotta Army primary
3. Generate Terracotta Army hover
4. Generate Xi’an City Wall primary
5. Generate Xi’an City Wall hover
6. Generate Giant Wild Goose Pagoda primary
7. Generate Giant Wild Goose Pagoda hover
8. Generate Muslim Quarter primary
9. Generate Muslim Quarter hover
10. Generate Shaanxi History Museum primary
11. Generate Shaanxi History Museum hover

**Do not organize any image during this phase.**

## Organization order

After all 11 generation attempts are complete:

1. Create `xian`
2. Put `hero` into `xian`
3. Create `terracotta-army` and put `primary` + `hover` inside
4. Create `xi-an-city-wall` and put `primary` + `hover` inside
5. Create `giant-wild-goose-pagoda` and put `primary` + `hover` inside
6. Create `muslim-quarter` and put `primary` + `hover` inside
7. Create `shaanxi-history-museum` and put `primary` + `hover` inside
8. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 11 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–11 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## China: Shanghai (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the Shanghai (China) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`shanghai`

Then create these sub-collections inside `shanghai`:

1. `the-bund`
2. `shanghai-tower`
3. `yu-garden`
4. `nanjing-road`
5. `former-french-concession`
6. `shanghai-museum`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`shanghai`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`shanghai`

- `hero`
- `the-bund`
  - `primary`
  - `hover`
- `shanghai-tower`
  - `primary`
  - `hover`
- `yu-garden`
  - `primary`
  - `hover`
- `nanjing-road`
  - `primary`
  - `hover`
- `former-french-concession`
  - `primary`
  - `hover`
- `shanghai-museum`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Shanghai — City Hero

**Final collection:** `shanghai`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide view of the Bund waterfront at blue hour with the glowing Pudong skyline across the river.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. The Bund — Main View

**Final collection:** `shanghai > the-bund`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The colonial-era buildings of the Bund glowing at dusk with the river in front.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. The Bund — Second View

**Final collection:** `shanghai > the-bund`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Bund promenade at dawn with soft mist and an empty embankment.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Shanghai Tower — Main View

**Final collection:** `shanghai > shanghai-tower`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Shanghai Tower's twisting glass form rising above Pudong at sunset.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Shanghai Tower — Second View

**Final collection:** `shanghai > shanghai-tower`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Looking up the spiralling glass facade of Shanghai Tower against a deep blue sky.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Yu Garden — Main View

**Final collection:** `shanghai > yu-garden`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Yu Garden's zigzag bridge and curved-roof pavilions beside a koi pond.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Yu Garden — Second View

**Final collection:** `shanghai > yu-garden`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A Yu Garden rockery with a winding path and lattice windows in soft light.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Nanjing Road — Main View

**Final collection:** `shanghai > nanjing-road`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Nanjing Road pedestrian street glittering with neon at night with wet pavement reflections, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Nanjing Road — Second View

**Final collection:** `shanghai > nanjing-road`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The old shopfront facades of Nanjing Road in golden morning light.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Former French Concession — Main View

**Final collection:** `shanghai > former-french-concession`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Tree-lined Wukang Road with plane trees and European-style villas in soft light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Former French Concession — Second View

**Final collection:** `shanghai > former-french-concession`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

An old stone-gate shikumen lane house doorway in the Former French Concession.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Shanghai Museum — Main View

**Final collection:** `shanghai > shanghai-museum`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Shanghai Museum's round-topped square building at dusk.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Shanghai Museum — Second View

**Final collection:** `shanghai > shanghai-museum`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Ancient Chinese bronze vessels displayed in dramatic museum lighting.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `shanghai`
  - `hero` — ✓ / FAILED
  - `the-bund`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `shanghai-tower`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `yu-garden`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `nanjing-road`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `former-french-concession`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `shanghai-museum`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate The Bund primary
3. Generate The Bund hover
4. Generate Shanghai Tower primary
5. Generate Shanghai Tower hover
6. Generate Yu Garden primary
7. Generate Yu Garden hover
8. Generate Nanjing Road primary
9. Generate Nanjing Road hover
10. Generate Former French Concession primary
11. Generate Former French Concession hover
12. Generate Shanghai Museum primary
13. Generate Shanghai Museum hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `shanghai`
2. Put `hero` into `shanghai`
3. Create `the-bund` and put `primary` + `hover` inside
4. Create `shanghai-tower` and put `primary` + `hover` inside
5. Create `yu-garden` and put `primary` + `hover` inside
6. Create `nanjing-road` and put `primary` + `hover` inside
7. Create `former-french-concession` and put `primary` + `hover` inside
8. Create `shanghai-museum` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## China: Guilin and Yangshuo (11 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **11 images for the Guilin and Yangshuo (China) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 11 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 11 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 11 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 11 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`guilin-yangshuo`

Then create these sub-collections inside `guilin-yangshuo`:

1. `li-river-cruise`
2. `yangshuo-countryside`
3. `reed-flute-cave`
4. `elephant-trunk-hill`
5. `longji-rice-terraces`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`guilin-yangshuo`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 10 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`guilin-yangshuo`

- `hero`
- `li-river-cruise`
  - `primary`
  - `hover`
- `yangshuo-countryside`
  - `primary`
  - `hover`
- `reed-flute-cave`
  - `primary`
  - `hover`
- `elephant-trunk-hill`
  - `primary`
  - `hover`
- `longji-rice-terraces`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 11 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 11 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 10 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Guilin and Yangshuo — City Hero

**Final collection:** `guilin-yangshuo`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide sunrise over Guilin's karst peaks and a misty river under a soft pink sky.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Li River cruise — Main View

**Final collection:** `guilin-yangshuo > li-river-cruise`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Li River at dawn with misty karst peaks and a bamboo raft in the distance.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Li River cruise — Second View

**Final collection:** `guilin-yangshuo > li-river-cruise`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Li River bend near Xingping with bamboo rafts and layered green peaks.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Yangshuo countryside — Main View

**Final collection:** `guilin-yangshuo > yangshuo-countryside`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A country lane through rice paddies beside the Yulong River with karst hills behind.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Yangshuo countryside — Second View

**Final collection:** `guilin-yangshuo > yangshuo-countryside`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

An old stone arch bridge over the Yulong River with bamboo and mountains.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Reed Flute Cave — Main View

**Final collection:** `guilin-yangshuo > reed-flute-cave`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Colourfully lit stalactites and stalagmites inside Reed Flute Cave reflected in still water.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Reed Flute Cave — Second View

**Final collection:** `guilin-yangshuo > reed-flute-cave`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A large cavern chamber in Reed Flute Cave with soft blue and pink lighting.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Elephant Trunk Hill — Main View

**Final collection:** `guilin-yangshuo > elephant-trunk-hill`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Elephant Trunk Hill's natural arch over the Li River at sunset with golden reflections.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Elephant Trunk Hill — Second View

**Final collection:** `guilin-yangshuo > elephant-trunk-hill`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Elephant Trunk Hill in misty blue-hour light from the riverside park.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Longji Rice Terraces — Main View

**Final collection:** `guilin-yangshuo > longji-rice-terraces`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Green water-filled Longji rice terraces curving down a mountain at sunrise.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Longji Rice Terraces — Second View

**Final collection:** `guilin-yangshuo > longji-rice-terraces`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Golden harvest-season Longji terraces with a wooden village on the hillside.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–11: **3:4 — 1200 × 1600**
- **Never generate Images 2–11 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 11 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `guilin-yangshuo`
  - `hero` — ✓ / FAILED
  - `li-river-cruise`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `yangshuo-countryside`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `reed-flute-cave`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `elephant-trunk-hill`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `longji-rice-terraces`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Li River cruise primary
3. Generate Li River cruise hover
4. Generate Yangshuo countryside primary
5. Generate Yangshuo countryside hover
6. Generate Reed Flute Cave primary
7. Generate Reed Flute Cave hover
8. Generate Elephant Trunk Hill primary
9. Generate Elephant Trunk Hill hover
10. Generate Longji Rice Terraces primary
11. Generate Longji Rice Terraces hover

**Do not organize any image during this phase.**

## Organization order

After all 11 generation attempts are complete:

1. Create `guilin-yangshuo`
2. Put `hero` into `guilin-yangshuo`
3. Create `li-river-cruise` and put `primary` + `hover` inside
4. Create `yangshuo-countryside` and put `primary` + `hover` inside
5. Create `reed-flute-cave` and put `primary` + `hover` inside
6. Create `elephant-trunk-hill` and put `primary` + `hover` inside
7. Create `longji-rice-terraces` and put `primary` + `hover` inside
8. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 11 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–11 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## China: Chengdu (11 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **11 images for the Chengdu (China) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 11 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 11 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 11 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 11 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`chengdu`

Then create these sub-collections inside `chengdu`:

1. `chengdu-research-base-of-giant-panda-breeding`
2. `jinli-ancient-street`
3. `wuhou-shrine`
4. `kuanzhai-alley`
5. `sichuan-cuisine-districts`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`chengdu`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 10 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`chengdu`

- `hero`
- `chengdu-research-base-of-giant-panda-breeding`
  - `primary`
  - `hover`
- `jinli-ancient-street`
  - `primary`
  - `hover`
- `wuhou-shrine`
  - `primary`
  - `hover`
- `kuanzhai-alley`
  - `primary`
  - `hover`
- `sichuan-cuisine-districts`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 11 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 11 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 10 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Chengdu — City Hero

**Final collection:** `chengdu`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide panorama of Chengdu's skyline at dusk with a river and warm city lights.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Chengdu Research Base of Giant Panda Breeding — Main View

**Final collection:** `chengdu > chengdu-research-base-of-giant-panda-breeding`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A giant panda eating bamboo among green foliage at the research base.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Chengdu Research Base of Giant Panda Breeding — Second View

**Final collection:** `chengdu > chengdu-research-base-of-giant-panda-breeding`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Two young giant pandas playing on a wooden platform in soft light.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Jinli Ancient Street — Main View

**Final collection:** `chengdu > jinli-ancient-street`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Jinli Ancient Street's red lanterns and Qing-style wooden shopfronts at night, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Jinli Ancient Street — Second View

**Final collection:** `chengdu > jinli-ancient-street`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Close-up of paper lanterns and carved wooden eaves on Jinli street at dusk.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Wuhou Shrine — Main View

**Final collection:** `chengdu > wuhou-shrine`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Wuhou Shrine's red-walled bamboo pathway in soft morning light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Wuhou Shrine — Second View

**Final collection:** `chengdu > wuhou-shrine`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The shrine's hall courtyard with ancient cypress trees and tiled roofs.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Kuanzhai Alley — Main View

**Final collection:** `chengdu > kuanzhai-alley`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Kuanzhai Alley's grey brick courtyard houses and tiled roofs at dusk with lanterns.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Kuanzhai Alley — Second View

**Final collection:** `chengdu > kuanzhai-alley`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A quiet Kuanzhai teahouse corner with bamboo chairs and green plants, no people.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Sichuan cuisine districts — Main View

**Final collection:** `chengdu > sichuan-cuisine-districts`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A steaming Sichuan hotpot with red chillies and Sichuan peppercorns, overhead shot.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Sichuan cuisine districts — Second View

**Final collection:** `chengdu > sichuan-cuisine-districts`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A table of Sichuan dishes: mapo tofu, dan dan noodles and dumplings in chilli oil, warm light.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–11: **3:4 — 1200 × 1600**
- **Never generate Images 2–11 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 11 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `chengdu`
  - `hero` — ✓ / FAILED
  - `chengdu-research-base-of-giant-panda-breeding`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `jinli-ancient-street`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `wuhou-shrine`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `kuanzhai-alley`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `sichuan-cuisine-districts`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Chengdu Research Base of Giant Panda Breeding primary
3. Generate Chengdu Research Base of Giant Panda Breeding hover
4. Generate Jinli Ancient Street primary
5. Generate Jinli Ancient Street hover
6. Generate Wuhou Shrine primary
7. Generate Wuhou Shrine hover
8. Generate Kuanzhai Alley primary
9. Generate Kuanzhai Alley hover
10. Generate Sichuan cuisine districts primary
11. Generate Sichuan cuisine districts hover

**Do not organize any image during this phase.**

## Organization order

After all 11 generation attempts are complete:

1. Create `chengdu`
2. Put `hero` into `chengdu`
3. Create `chengdu-research-base-of-giant-panda-breeding` and put `primary` + `hover` inside
4. Create `jinli-ancient-street` and put `primary` + `hover` inside
5. Create `wuhou-shrine` and put `primary` + `hover` inside
6. Create `kuanzhai-alley` and put `primary` + `hover` inside
7. Create `sichuan-cuisine-districts` and put `primary` + `hover` inside
8. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 11 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–11 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Indonesia: Jakarta (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the Jakarta (Indonesia) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`jakarta`

Then create these sub-collections inside `jakarta`:

1. `national-monument-monas`
2. `kota-tua-old-town`
3. `istiqlal-mosque`
4. `jakarta-cathedral`
5. `national-museum-of-indonesia`
6. `thousand-islands-kepulauan-seribu`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`jakarta`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`jakarta`

- `hero`
- `national-monument-monas`
  - `primary`
  - `hover`
- `kota-tua-old-town`
  - `primary`
  - `hover`
- `istiqlal-mosque`
  - `primary`
  - `hover`
- `jakarta-cathedral`
  - `primary`
  - `hover`
- `national-museum-of-indonesia`
  - `primary`
  - `hover`
- `thousand-islands-kepulauan-seribu`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Jakarta — City Hero

**Final collection:** `jakarta`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide Jakarta skyline at golden hour with towers rising through soft haze.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. National Monument (Monas) — Main View

**Final collection:** `jakarta > national-monument-monas`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Monas obelisk with its golden flame against a sunset sky with trees in the foreground.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. National Monument (Monas) — Second View

**Final collection:** `jakarta > national-monument-monas`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Monas park plaza at dawn with a fountain and wide empty paths.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Kota Tua (Old Town) — Main View

**Final collection:** `jakarta > kota-tua-old-town`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Fatahillah Square's Dutch colonial buildings in warm light over cobblestones.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Kota Tua (Old Town) — Second View

**Final collection:** `jakarta > kota-tua-old-town`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Colourful vintage bicycles lined up in Kota Tua square, close-up, no riders.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Istiqlal Mosque — Main View

**Final collection:** `jakarta > istiqlal-mosque`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Istiqlal Mosque's white dome and minaret against a blue sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Istiqlal Mosque — Second View

**Final collection:** `jakarta > istiqlal-mosque`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The mosque's vast interior prayer hall with tall columns and geometric light, empty.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Jakarta Cathedral — Main View

**Final collection:** `jakarta > jakarta-cathedral`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Jakarta Cathedral's neo-Gothic spires in warm light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Jakarta Cathedral — Second View

**Final collection:** `jakarta > jakarta-cathedral`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The cathedral's interior nave with pointed arches and soft stained-glass colours, empty.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. National Museum of Indonesia — Main View

**Final collection:** `jakarta > national-museum-of-indonesia`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The National Museum's neoclassical facade with the bronze elephant statue in front.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. National Museum of Indonesia — Second View

**Final collection:** `jakarta > national-museum-of-indonesia`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

An ancient Hindu-Buddhist stone sculpture in a museum gallery with soft lighting.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Thousand Islands (Kepulauan Seribu) — Main View

**Final collection:** `jakarta > thousand-islands-kepulauan-seribu`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A tiny tropical island with white sand and turquoise water seen from a boat.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Thousand Islands (Kepulauan Seribu) — Second View

**Final collection:** `jakarta > thousand-islands-kepulauan-seribu`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A wooden jetty over clear shallow reef water at sunrise.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `jakarta`
  - `hero` — ✓ / FAILED
  - `national-monument-monas`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `kota-tua-old-town`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `istiqlal-mosque`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `jakarta-cathedral`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `national-museum-of-indonesia`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `thousand-islands-kepulauan-seribu`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate National Monument (Monas) primary
3. Generate National Monument (Monas) hover
4. Generate Kota Tua (Old Town) primary
5. Generate Kota Tua (Old Town) hover
6. Generate Istiqlal Mosque primary
7. Generate Istiqlal Mosque hover
8. Generate Jakarta Cathedral primary
9. Generate Jakarta Cathedral hover
10. Generate National Museum of Indonesia primary
11. Generate National Museum of Indonesia hover
12. Generate Thousand Islands (Kepulauan Seribu) primary
13. Generate Thousand Islands (Kepulauan Seribu) hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `jakarta`
2. Put `hero` into `jakarta`
3. Create `national-monument-monas` and put `primary` + `hover` inside
4. Create `kota-tua-old-town` and put `primary` + `hover` inside
5. Create `istiqlal-mosque` and put `primary` + `hover` inside
6. Create `jakarta-cathedral` and put `primary` + `hover` inside
7. Create `national-museum-of-indonesia` and put `primary` + `hover` inside
8. Create `thousand-islands-kepulauan-seribu` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Indonesia: Yogyakarta (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the Yogyakarta (Indonesia) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`yogyakarta`

Then create these sub-collections inside `yogyakarta`:

1. `borobudur-temple-compounds`
2. `prambanan-temple-compounds`
3. `kraton-yogyakarta`
4. `taman-sari`
5. `malioboro-street`
6. `mount-merapi`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`yogyakarta`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`yogyakarta`

- `hero`
- `borobudur-temple-compounds`
  - `primary`
  - `hover`
- `prambanan-temple-compounds`
  - `primary`
  - `hover`
- `kraton-yogyakarta`
  - `primary`
  - `hover`
- `taman-sari`
  - `primary`
  - `hover`
- `malioboro-street`
  - `primary`
  - `hover`
- `mount-merapi`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Yogyakarta — City Hero

**Final collection:** `yogyakarta`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide sunrise view of Mount Merapi rising behind misty rice fields and palms.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Borobudur Temple Compounds — Main View

**Final collection:** `yogyakarta > borobudur-temple-compounds`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Borobudur's stepped terraces and bell-shaped stupas in sunrise mist.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Borobudur Temple Compounds — Second View

**Final collection:** `yogyakarta > borobudur-temple-compounds`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Seated Buddha statues inside perforated stupas at Borobudur, close-up with carved reliefs.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Prambanan Temple Compounds — Main View

**Final collection:** `yogyakarta > prambanan-temple-compounds`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Prambanan's tall carved temple spires at golden hour.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Prambanan Temple Compounds — Second View

**Final collection:** `yogyakarta > prambanan-temple-compounds`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Ramayana relief carvings along Prambanan's temple walls in side light.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Kraton Yogyakarta — Main View

**Final collection:** `yogyakarta > kraton-yogyakarta`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Kraton's open pavilion with carved wooden pillars and a red-gold roof.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Kraton Yogyakarta — Second View

**Final collection:** `yogyakarta > kraton-yogyakarta`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Traditional Javanese gamelan instruments in a Kraton pavilion, soft light, no people.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Taman Sari — Main View

**Final collection:** `yogyakarta > taman-sari`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Taman Sari's bathing pools and stone stairways with symmetrical arches.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Taman Sari — Second View

**Final collection:** `yogyakarta > taman-sari`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Taman Sari's underground passage with arches and warm light.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Malioboro Street — Main View

**Final collection:** `yogyakarta > malioboro-street`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Malioboro Street in the evening with glowing lights and traditional becak, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Malioboro Street — Second View

**Final collection:** `yogyakarta > malioboro-street`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Colourful batik fabrics hanging at a Malioboro stall, close-up.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Mount Merapi — Main View

**Final collection:** `yogyakarta > mount-merapi`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Mount Merapi's cone with a thin plume of steam above green hills at dawn.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Mount Merapi — Second View

**Final collection:** `yogyakarta > mount-merapi`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

An old lava-flow valley with a rocky riverbed and the volcano above, dramatic light.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `yogyakarta`
  - `hero` — ✓ / FAILED
  - `borobudur-temple-compounds`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `prambanan-temple-compounds`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `kraton-yogyakarta`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `taman-sari`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `malioboro-street`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `mount-merapi`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Borobudur Temple Compounds primary
3. Generate Borobudur Temple Compounds hover
4. Generate Prambanan Temple Compounds primary
5. Generate Prambanan Temple Compounds hover
6. Generate Kraton Yogyakarta primary
7. Generate Kraton Yogyakarta hover
8. Generate Taman Sari primary
9. Generate Taman Sari hover
10. Generate Malioboro Street primary
11. Generate Malioboro Street hover
12. Generate Mount Merapi primary
13. Generate Mount Merapi hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `yogyakarta`
2. Put `hero` into `yogyakarta`
3. Create `borobudur-temple-compounds` and put `primary` + `hover` inside
4. Create `prambanan-temple-compounds` and put `primary` + `hover` inside
5. Create `kraton-yogyakarta` and put `primary` + `hover` inside
6. Create `taman-sari` and put `primary` + `hover` inside
7. Create `malioboro-street` and put `primary` + `hover` inside
8. Create `mount-merapi` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Indonesia: Bali (15 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **15 images for the Bali (Indonesia) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 15 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 15 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 15 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 15 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`bali`

Then create these sub-collections inside `bali`:

1. `uluwatu-temple`
2. `tanah-lot`
3. `ubud`
4. `tegallalang-rice-terraces`
5. `besakih-temple`
6. `subak-cultural-landscape`
7. `kuta-seminyak-and-nusa-dua`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`bali`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 14 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`bali`

- `hero`
- `uluwatu-temple`
  - `primary`
  - `hover`
- `tanah-lot`
  - `primary`
  - `hover`
- `ubud`
  - `primary`
  - `hover`
- `tegallalang-rice-terraces`
  - `primary`
  - `hover`
- `besakih-temple`
  - `primary`
  - `hover`
- `subak-cultural-landscape`
  - `primary`
  - `hover`
- `kuta-seminyak-and-nusa-dua`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 15 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 15 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 14 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Bali — City Hero

**Final collection:** `bali`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide sunrise over Mount Batur and its misty caldera lake with soft layered clouds.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Uluwatu Temple — Main View

**Final collection:** `bali > uluwatu-temple`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Uluwatu Temple perched on a sea cliff at sunset with waves below.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Uluwatu Temple — Second View

**Final collection:** `bali > uluwatu-temple`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The temple's carved stone gate and coastal path in warm light.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Tanah Lot — Main View

**Final collection:** `bali > tanah-lot`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Tanah Lot temple on its rock with waves at golden hour.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Tanah Lot — Second View

**Final collection:** `bali > tanah-lot`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Tanah Lot at blue hour with long-exposure surf and a glowing sky.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Ubud — Main View

**Final collection:** `bali > ubud`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A stone-carved Balinese temple gate in Ubud framed by tropical greenery.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Ubud — Second View

**Final collection:** `bali > ubud`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A lush Ubud rice field with a narrow path and coconut palms in soft light.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Tegallalang Rice Terraces — Main View

**Final collection:** `bali > tegallalang-rice-terraces`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Tegallalang's sweeping emerald terraces at sunrise with palms.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Tegallalang Rice Terraces — Second View

**Final collection:** `bali > tegallalang-rice-terraces`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Curved rice terraces with irrigation channels in soft mist, close view.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Besakih Temple — Main View

**Final collection:** `bali > besakih-temple`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Besakih Temple's tiered split gate with Mount Agung faint behind.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Besakih Temple — Second View

**Final collection:** `bali > besakih-temple`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Black-roofed meru shrines terraced up the slope at Besakih in soft light.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Subak Cultural Landscape — Main View

**Final collection:** `bali > subak-cultural-landscape`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Jatiluwih's vast rice terraces under clouds with a distant mountain.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Subak Cultural Landscape — Second View

**Final collection:** `bali > subak-cultural-landscape`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Pura Ulun Danu Bratan's shrines on Lake Bratan with misty mountains.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 14. Kuta, Seminyak and Nusa Dua — Main View

**Final collection:** `bali > kuta-seminyak-and-nusa-dua`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Seminyak beach at sunset with soft waves and a warm sky over empty sand.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 15. Kuta, Seminyak and Nusa Dua — Second View

**Final collection:** `bali > kuta-seminyak-and-nusa-dua`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A Nusa Dua beach with a clear lagoon, white sand and a palm-lined pathway.

This must be clearly different from Image 14 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–15: **3:4 — 1200 × 1600**
- **Never generate Images 2–15 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 15 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `bali`
  - `hero` — ✓ / FAILED
  - `uluwatu-temple`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `tanah-lot`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `ubud`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `tegallalang-rice-terraces`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `besakih-temple`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `subak-cultural-landscape`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `kuta-seminyak-and-nusa-dua`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Uluwatu Temple primary
3. Generate Uluwatu Temple hover
4. Generate Tanah Lot primary
5. Generate Tanah Lot hover
6. Generate Ubud primary
7. Generate Ubud hover
8. Generate Tegallalang Rice Terraces primary
9. Generate Tegallalang Rice Terraces hover
10. Generate Besakih Temple primary
11. Generate Besakih Temple hover
12. Generate Subak Cultural Landscape primary
13. Generate Subak Cultural Landscape hover
14. Generate Kuta, Seminyak and Nusa Dua primary
15. Generate Kuta, Seminyak and Nusa Dua hover

**Do not organize any image during this phase.**

## Organization order

After all 15 generation attempts are complete:

1. Create `bali`
2. Put `hero` into `bali`
3. Create `uluwatu-temple` and put `primary` + `hover` inside
4. Create `tanah-lot` and put `primary` + `hover` inside
5. Create `ubud` and put `primary` + `hover` inside
6. Create `tegallalang-rice-terraces` and put `primary` + `hover` inside
7. Create `besakih-temple` and put `primary` + `hover` inside
8. Create `subak-cultural-landscape` and put `primary` + `hover` inside
9. Create `kuta-seminyak-and-nusa-dua` and put `primary` + `hover` inside
10. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 15 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–15 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Indonesia: Labuan Bajo and Komodo (11 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **11 images for the Labuan Bajo and Komodo (Indonesia) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 11 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 11 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 11 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 11 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`labuan-bajo-komodo`

Then create these sub-collections inside `labuan-bajo-komodo`:

1. `komodo-national-park`
2. `padar-island`
3. `pink-beach`
4. `manta-point`
5. `rangko-cave`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`labuan-bajo-komodo`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 10 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`labuan-bajo-komodo`

- `hero`
- `komodo-national-park`
  - `primary`
  - `hover`
- `padar-island`
  - `primary`
  - `hover`
- `pink-beach`
  - `primary`
  - `hover`
- `manta-point`
  - `primary`
  - `hover`
- `rangko-cave`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 11 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 11 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 10 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Labuan Bajo and Komodo — City Hero

**Final collection:** `labuan-bajo-komodo`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

Labuan Bajo harbour at sunrise with traditional wooden phinisi boats and islands behind.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Komodo National Park — Main View

**Final collection:** `labuan-bajo-komodo > komodo-national-park`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Komodo National Park's dry golden hills meeting a turquoise bay seen from above.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Komodo National Park — Second View

**Final collection:** `labuan-bajo-komodo > komodo-national-park`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A Komodo dragon resting in shade on dry ground in side profile, sharp detail.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Padar Island — Main View

**Final collection:** `labuan-bajo-komodo > padar-island`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Padar Island trail and viewpoint over three bays at sunrise.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Padar Island — Second View

**Final collection:** `labuan-bajo-komodo > padar-island`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The three-coloured bays of Padar seen from the summit in golden light with a boat below.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Pink Beach — Main View

**Final collection:** `labuan-bajo-komodo > pink-beach`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Pink Beach's soft pink sand and clear turquoise water in morning light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Pink Beach — Second View

**Final collection:** `labuan-bajo-komodo > pink-beach`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Pink coral sand at the water's edge with gentle waves, close-up.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Manta Point — Main View

**Final collection:** `labuan-bajo-komodo > manta-point`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A manta ray gliding through clear blue water seen from just above the surface.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Manta Point — Second View

**Final collection:** `labuan-bajo-komodo > manta-point`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A vibrant coral reef with tropical fish near Manta Point, underwater.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Rangko Cave — Main View

**Final collection:** `labuan-bajo-komodo > rangko-cave`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The narrow opening of Rangko Cave with sunlight beams shining onto blue water.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Rangko Cave — Second View

**Final collection:** `labuan-bajo-komodo > rangko-cave`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A turquoise cave pool with rocky walls lit by a beam of light, no swimmers.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–11: **3:4 — 1200 × 1600**
- **Never generate Images 2–11 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 11 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `labuan-bajo-komodo`
  - `hero` — ✓ / FAILED
  - `komodo-national-park`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `padar-island`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `pink-beach`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `manta-point`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `rangko-cave`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Komodo National Park primary
3. Generate Komodo National Park hover
4. Generate Padar Island primary
5. Generate Padar Island hover
6. Generate Pink Beach primary
7. Generate Pink Beach hover
8. Generate Manta Point primary
9. Generate Manta Point hover
10. Generate Rangko Cave primary
11. Generate Rangko Cave hover

**Do not organize any image during this phase.**

## Organization order

After all 11 generation attempts are complete:

1. Create `labuan-bajo-komodo`
2. Put `hero` into `labuan-bajo-komodo`
3. Create `komodo-national-park` and put `primary` + `hover` inside
4. Create `padar-island` and put `primary` + `hover` inside
5. Create `pink-beach` and put `primary` + `hover` inside
6. Create `manta-point` and put `primary` + `hover` inside
7. Create `rangko-cave` and put `primary` + `hover` inside
8. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 11 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–11 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Japan: Tokyo (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the Tokyo (Japan) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`tokyo`

Then create these sub-collections inside `tokyo`:

1. `senso-ji-temple`
2. `meiji-jingu`
3. `tokyo-skytree`
4. `shibuya-crossing`
5. `tokyo-national-museum`
6. `imperial-palace`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`tokyo`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`tokyo`

- `hero`
- `senso-ji-temple`
  - `primary`
  - `hover`
- `meiji-jingu`
  - `primary`
  - `hover`
- `tokyo-skytree`
  - `primary`
  - `hover`
- `shibuya-crossing`
  - `primary`
  - `hover`
- `tokyo-national-museum`
  - `primary`
  - `hover`
- `imperial-palace`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Tokyo — City Hero

**Final collection:** `tokyo`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide Tokyo skyline at dusk with Mount Fuji faint on the horizon and glowing towers.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Senso-ji Temple — Main View

**Final collection:** `tokyo > senso-ji-temple`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Senso-ji's main hall and five-storey pagoda in warm light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Senso-ji Temple — Second View

**Final collection:** `tokyo > senso-ji-temple`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The lantern-lined Nakamise shopping street at dawn, empty.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Meiji Jingu — Main View

**Final collection:** `tokyo > meiji-jingu`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The giant torii gate at Meiji Jingu's forest entrance over a gravel path.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Meiji Jingu — Second View

**Final collection:** `tokyo > meiji-jingu`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Stacked sake barrels at Meiji Jingu in soft forest light.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Tokyo Skytree — Main View

**Final collection:** `tokyo > tokyo-skytree`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Tokyo Skytree towering above the Sumida River at sunset with reflections.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Tokyo Skytree — Second View

**Final collection:** `tokyo > tokyo-skytree`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Looking up at the Skytree's lattice structure against a blue evening sky.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Shibuya Crossing — Main View

**Final collection:** `tokyo > shibuya-crossing`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Shibuya Crossing seen from above at dusk with light trails, signage unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Shibuya Crossing — Second View

**Final collection:** `tokyo > shibuya-crossing`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Shibuya's glowing neon streets blurred in the rain, all signage unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Tokyo National Museum — Main View

**Final collection:** `tokyo > tokyo-national-museum`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Tokyo National Museum's Honkan building with its grand tiled roof and pond.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Tokyo National Museum — Second View

**Final collection:** `tokyo > tokyo-national-museum`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A samurai armour set displayed in soft museum lighting.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Imperial Palace — Main View

**Final collection:** `tokyo > imperial-palace`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Nijubashi stone bridge and moat at the Imperial Palace with pine trees.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Imperial Palace — Second View

**Final collection:** `tokyo > imperial-palace`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The East Gardens' stone walls and guard house in autumn light.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `tokyo`
  - `hero` — ✓ / FAILED
  - `senso-ji-temple`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `meiji-jingu`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `tokyo-skytree`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `shibuya-crossing`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `tokyo-national-museum`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `imperial-palace`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Senso-ji Temple primary
3. Generate Senso-ji Temple hover
4. Generate Meiji Jingu primary
5. Generate Meiji Jingu hover
6. Generate Tokyo Skytree primary
7. Generate Tokyo Skytree hover
8. Generate Shibuya Crossing primary
9. Generate Shibuya Crossing hover
10. Generate Tokyo National Museum primary
11. Generate Tokyo National Museum hover
12. Generate Imperial Palace primary
13. Generate Imperial Palace hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `tokyo`
2. Put `hero` into `tokyo`
3. Create `senso-ji-temple` and put `primary` + `hover` inside
4. Create `meiji-jingu` and put `primary` + `hover` inside
5. Create `tokyo-skytree` and put `primary` + `hover` inside
6. Create `shibuya-crossing` and put `primary` + `hover` inside
7. Create `tokyo-national-museum` and put `primary` + `hover` inside
8. Create `imperial-palace` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Japan: Kyoto (15 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **15 images for the Kyoto (Japan) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 15 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 15 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 15 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 15 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`kyoto`

Then create these sub-collections inside `kyoto`:

1. `kinkaku-ji`
2. `kiyomizu-dera`
3. `fushimi-inari-taisha`
4. `arashiyama-bamboo-grove`
5. `gion`
6. `nijo-castle`
7. `historic-monuments-of-ancient-kyoto`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`kyoto`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 14 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`kyoto`

- `hero`
- `kinkaku-ji`
  - `primary`
  - `hover`
- `kiyomizu-dera`
  - `primary`
  - `hover`
- `fushimi-inari-taisha`
  - `primary`
  - `hover`
- `arashiyama-bamboo-grove`
  - `primary`
  - `hover`
- `gion`
  - `primary`
  - `hover`
- `nijo-castle`
  - `primary`
  - `hover`
- `historic-monuments-of-ancient-kyoto`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 15 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 15 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 14 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Kyoto — City Hero

**Final collection:** `kyoto`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

Kyoto's Higashiyama hillside with the Yasaka Pagoda and tiled rooftops at golden hour.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Kinkaku-ji — Main View

**Final collection:** `kyoto > kinkaku-ji`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Kinkaku-ji's golden pavilion reflected in its pond in autumn light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Kinkaku-ji — Second View

**Final collection:** `kyoto > kinkaku-ji`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The golden pavilion's rooftop phoenix and gold-leaf detail with maple leaves.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Kiyomizu-dera — Main View

**Final collection:** `kyoto > kiyomizu-dera`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Kiyomizu-dera's wooden stage and main hall among autumn maples.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Kiyomizu-dera — Second View

**Final collection:** `kyoto > kiyomizu-dera`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Kiyomizu-dera's three-storey pagoda with cherry blossoms at dusk.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Fushimi Inari Taisha — Main View

**Final collection:** `kyoto > fushimi-inari-taisha`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The endless vermilion torii gates of Fushimi Inari along a forest path.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Fushimi Inari Taisha — Second View

**Final collection:** `kyoto > fushimi-inari-taisha`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A pair of stone fox statues at a Fushimi Inari shrine beside red torii.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Arashiyama Bamboo Grove — Main View

**Final collection:** `kyoto > arashiyama-bamboo-grove`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The tall bamboo grove path in Arashiyama in soft green light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Arashiyama Bamboo Grove — Second View

**Final collection:** `kyoto > arashiyama-bamboo-grove`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Togetsukyo Bridge over the Katsura River with misty hills.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Gion — Main View

**Final collection:** `kyoto > gion`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Gion's Hanamikoji street with wooden machiya and glowing lanterns at dusk, no people.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Gion — Second View

**Final collection:** `kyoto > gion`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Shirakawa canal lined with willows and teahouses in Gion at night.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Nijo Castle — Main View

**Final collection:** `kyoto > nijo-castle`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Nijo Castle's ornate Karamon gate with gold and carvings.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Nijo Castle — Second View

**Final collection:** `kyoto > nijo-castle`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Ninomaru Palace's painted sliding doors and wooden corridor, empty.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 14. Historic Monuments of Ancient Kyoto — Main View

**Final collection:** `kyoto > historic-monuments-of-ancient-kyoto`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Ginkaku-ji's silver pavilion and raked sand garden in morning light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 15. Historic Monuments of Ancient Kyoto — Second View

**Final collection:** `kyoto > historic-monuments-of-ancient-kyoto`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Ryoan-ji's zen rock garden with raked gravel, quiet.

This must be clearly different from Image 14 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–15: **3:4 — 1200 × 1600**
- **Never generate Images 2–15 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 15 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `kyoto`
  - `hero` — ✓ / FAILED
  - `kinkaku-ji`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `kiyomizu-dera`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `fushimi-inari-taisha`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `arashiyama-bamboo-grove`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `gion`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `nijo-castle`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `historic-monuments-of-ancient-kyoto`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Kinkaku-ji primary
3. Generate Kinkaku-ji hover
4. Generate Kiyomizu-dera primary
5. Generate Kiyomizu-dera hover
6. Generate Fushimi Inari Taisha primary
7. Generate Fushimi Inari Taisha hover
8. Generate Arashiyama Bamboo Grove primary
9. Generate Arashiyama Bamboo Grove hover
10. Generate Gion primary
11. Generate Gion hover
12. Generate Nijo Castle primary
13. Generate Nijo Castle hover
14. Generate Historic Monuments of Ancient Kyoto primary
15. Generate Historic Monuments of Ancient Kyoto hover

**Do not organize any image during this phase.**

## Organization order

After all 15 generation attempts are complete:

1. Create `kyoto`
2. Put `hero` into `kyoto`
3. Create `kinkaku-ji` and put `primary` + `hover` inside
4. Create `kiyomizu-dera` and put `primary` + `hover` inside
5. Create `fushimi-inari-taisha` and put `primary` + `hover` inside
6. Create `arashiyama-bamboo-grove` and put `primary` + `hover` inside
7. Create `gion` and put `primary` + `hover` inside
8. Create `nijo-castle` and put `primary` + `hover` inside
9. Create `historic-monuments-of-ancient-kyoto` and put `primary` + `hover` inside
10. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 15 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–15 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Japan: Osaka (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the Osaka (Japan) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`osaka`

Then create these sub-collections inside `osaka`:

1. `osaka-castle`
2. `dotonbori`
3. `kuromon-market`
4. `shitennoji-temple`
5. `umeda-sky-building`
6. `universal-studios-japan`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`osaka`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`osaka`

- `hero`
- `osaka-castle`
  - `primary`
  - `hover`
- `dotonbori`
  - `primary`
  - `hover`
- `kuromon-market`
  - `primary`
  - `hover`
- `shitennoji-temple`
  - `primary`
  - `hover`
- `umeda-sky-building`
  - `primary`
  - `hover`
- `universal-studios-japan`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Osaka — City Hero

**Final collection:** `osaka`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide Osaka skyline at dusk with the castle keep lit among skyscrapers.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Osaka Castle — Main View

**Final collection:** `osaka > osaka-castle`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Osaka Castle's main tower with its moat and stone walls in autumn light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Osaka Castle — Second View

**Final collection:** `osaka > osaka-castle`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The castle's huge granite walls and stone bridge at dawn mist.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Dotonbori — Main View

**Final collection:** `osaka > dotonbori`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Dotonbori's glowing canal-side neon at night with reflections, lettering unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Dotonbori — Second View

**Final collection:** `osaka > dotonbori`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Takoyaki cooking on a hot griddle with steam, close-up.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Kuromon Market — Main View

**Final collection:** `osaka > kuromon-market`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Kuromon Market's covered street with fresh seafood and snacks, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Kuromon Market — Second View

**Final collection:** `osaka > kuromon-market`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Glistening fresh seafood and sushi on display ice, close-up.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Shitennoji Temple — Main View

**Final collection:** `osaka > shitennoji-temple`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Shitennoji's five-storey pagoda and central gate in soft light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Shitennoji Temple — Second View

**Final collection:** `osaka > shitennoji-temple`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The temple's stone torii and lotus pond.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Umeda Sky Building — Main View

**Final collection:** `osaka > umeda-sky-building`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Umeda Sky Building's twin towers joined by a floating observatory at dusk.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Umeda Sky Building — Second View

**Final collection:** `osaka > umeda-sky-building`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The circular observatory's glowing ring seen from below against a blue sky.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Universal Studios Japan — Main View

**Final collection:** `osaka > universal-studios-japan`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A theme park's grand entrance plaza with palm trees and a festive evening glow, no characters or logos.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Universal Studios Japan — Second View

**Final collection:** `osaka > universal-studios-japan`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Roller coaster tracks and colourful rides at sunset, generic, no branding or characters.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `osaka`
  - `hero` — ✓ / FAILED
  - `osaka-castle`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `dotonbori`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `kuromon-market`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `shitennoji-temple`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `umeda-sky-building`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `universal-studios-japan`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Osaka Castle primary
3. Generate Osaka Castle hover
4. Generate Dotonbori primary
5. Generate Dotonbori hover
6. Generate Kuromon Market primary
7. Generate Kuromon Market hover
8. Generate Shitennoji Temple primary
9. Generate Shitennoji Temple hover
10. Generate Umeda Sky Building primary
11. Generate Umeda Sky Building hover
12. Generate Universal Studios Japan primary
13. Generate Universal Studios Japan hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `osaka`
2. Put `hero` into `osaka`
3. Create `osaka-castle` and put `primary` + `hover` inside
4. Create `dotonbori` and put `primary` + `hover` inside
5. Create `kuromon-market` and put `primary` + `hover` inside
6. Create `shitennoji-temple` and put `primary` + `hover` inside
7. Create `umeda-sky-building` and put `primary` + `hover` inside
8. Create `universal-studios-japan` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Japan: Hiroshima (11 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **11 images for the Hiroshima (Japan) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 11 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 11 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 11 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 11 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`hiroshima`

Then create these sub-collections inside `hiroshima`:

1. `hiroshima-peace-memorial-park`
2. `atomic-bomb-dome`
3. `hiroshima-peace-memorial-museum`
4. `itsukushima-shrine`
5. `miyajima-island`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`hiroshima`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 10 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`hiroshima`

- `hero`
- `hiroshima-peace-memorial-park`
  - `primary`
  - `hover`
- `atomic-bomb-dome`
  - `primary`
  - `hover`
- `hiroshima-peace-memorial-museum`
  - `primary`
  - `hover`
- `itsukushima-shrine`
  - `primary`
  - `hover`
- `miyajima-island`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 11 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 11 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 10 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Hiroshima — City Hero

**Final collection:** `hiroshima`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide view over Hiroshima's river delta and Seto Inland Sea islands at sunset.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Hiroshima Peace Memorial Park — Main View

**Final collection:** `hiroshima > hiroshima-peace-memorial-park`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Cenotaph arch framing the eternal flame and the dome beyond in soft light, respectful mood.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Hiroshima Peace Memorial Park — Second View

**Final collection:** `hiroshima > hiroshima-peace-memorial-park`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Colourful paper cranes hung near the Children's Peace Monument, close-up, respectful.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Atomic Bomb Dome — Main View

**Final collection:** `hiroshima > atomic-bomb-dome`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Atomic Bomb Dome beside the river at dusk, quiet and respectful.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Atomic Bomb Dome — Second View

**Final collection:** `hiroshima > atomic-bomb-dome`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Dome's ruined steel frame against a clear blue sky.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Hiroshima Peace Memorial Museum — Main View

**Final collection:** `hiroshima > hiroshima-peace-memorial-museum`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Peace Memorial Museum's raised concrete building and reflecting pond in morning light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Hiroshima Peace Memorial Museum — Second View

**Final collection:** `hiroshima > hiroshima-peace-memorial-museum`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The museum's quiet memorial plaza with trees in soft light, no people.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Itsukushima Shrine — Main View

**Final collection:** `hiroshima > itsukushima-shrine`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Itsukushima Shrine's pavilions on stilts at high tide at golden hour.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Itsukushima Shrine — Second View

**Final collection:** `hiroshima > itsukushima-shrine`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The vermilion corridor of the shrine with lanterns at dusk.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Miyajima Island — Main View

**Final collection:** `hiroshima > miyajima-island`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Miyajima five-storey pagoda and Senjokaku hall among maples.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Miyajima Island — Second View

**Final collection:** `hiroshima > miyajima-island`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Wild deer on the Miyajima shoreline with the torii in the distance.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–11: **3:4 — 1200 × 1600**
- **Never generate Images 2–11 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 11 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `hiroshima`
  - `hero` — ✓ / FAILED
  - `hiroshima-peace-memorial-park`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `atomic-bomb-dome`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `hiroshima-peace-memorial-museum`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `itsukushima-shrine`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `miyajima-island`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Hiroshima Peace Memorial Park primary
3. Generate Hiroshima Peace Memorial Park hover
4. Generate Atomic Bomb Dome primary
5. Generate Atomic Bomb Dome hover
6. Generate Hiroshima Peace Memorial Museum primary
7. Generate Hiroshima Peace Memorial Museum hover
8. Generate Itsukushima Shrine primary
9. Generate Itsukushima Shrine hover
10. Generate Miyajima Island primary
11. Generate Miyajima Island hover

**Do not organize any image during this phase.**

## Organization order

After all 11 generation attempts are complete:

1. Create `hiroshima`
2. Put `hero` into `hiroshima`
3. Create `hiroshima-peace-memorial-park` and put `primary` + `hover` inside
4. Create `atomic-bomb-dome` and put `primary` + `hover` inside
5. Create `hiroshima-peace-memorial-museum` and put `primary` + `hover` inside
6. Create `itsukushima-shrine` and put `primary` + `hover` inside
7. Create `miyajima-island` and put `primary` + `hover` inside
8. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 11 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–11 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Japan: Nara (11 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **11 images for the Nara (Japan) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 11 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 11 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 11 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 11 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`nara`

Then create these sub-collections inside `nara`:

1. `todai-ji-temple`
2. `nara-park`
3. `kasuga-taisha`
4. `naramachi`
5. `historic-monuments-of-ancient-nara`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`nara`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 10 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`nara`

- `hero`
- `todai-ji-temple`
  - `primary`
  - `hover`
- `nara-park`
  - `primary`
  - `hover`
- `kasuga-taisha`
  - `primary`
  - `hover`
- `naramachi`
  - `primary`
  - `hover`
- `historic-monuments-of-ancient-nara`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 11 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 11 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 10 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Nara — City Hero

**Final collection:** `nara`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

Nara Park in morning mist with autumn maples and a path leading toward a pagoda.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Todai-ji Temple — Main View

**Final collection:** `nara > todai-ji-temple`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Nandaimon gate of Todai-ji with guardian statues under a blue sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Todai-ji Temple — Second View

**Final collection:** `nara > todai-ji-temple`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The bronze Vairocana Buddha seated inside the Great Buddha Hall in dramatic soft light.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Nara Park — Main View

**Final collection:** `nara > nara-park`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Deer grazing on a sunlit Nara Park lawn among trees.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Nara Park — Second View

**Final collection:** `nara > nara-park`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A deer beside a stone lantern on an autumn Nara Park path.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Kasuga Taisha — Main View

**Final collection:** `nara > kasuga-taisha`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The stone-lantern-lined path to Kasuga Taisha in forest light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Kasuga Taisha — Second View

**Final collection:** `nara > kasuga-taisha`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Kasuga Taisha's vermilion shrine corridor with hanging bronze lanterns.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Naramachi — Main View

**Final collection:** `nara > naramachi`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A Naramachi lane of wooden merchant houses with lattice fronts in warm light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Naramachi — Second View

**Final collection:** `nara > naramachi`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Hanging cloth noren curtains and wooden lattice on a Naramachi shopfront, close-up.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Historic Monuments of Ancient Nara — Main View

**Final collection:** `nara > historic-monuments-of-ancient-nara`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Kofuku-ji's five-storey pagoda reflected in Sarusawa Pond at dusk.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Historic Monuments of Ancient Nara — Second View

**Final collection:** `nara > historic-monuments-of-ancient-nara`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The reconstructed Suzaku Gate at Heijo Palace with wide grounds in soft light.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–11: **3:4 — 1200 × 1600**
- **Never generate Images 2–11 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 11 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `nara`
  - `hero` — ✓ / FAILED
  - `todai-ji-temple`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `nara-park`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `kasuga-taisha`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `naramachi`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `historic-monuments-of-ancient-nara`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Todai-ji Temple primary
3. Generate Todai-ji Temple hover
4. Generate Nara Park primary
5. Generate Nara Park hover
6. Generate Kasuga Taisha primary
7. Generate Kasuga Taisha hover
8. Generate Naramachi primary
9. Generate Naramachi hover
10. Generate Historic Monuments of Ancient Nara primary
11. Generate Historic Monuments of Ancient Nara hover

**Do not organize any image during this phase.**

## Organization order

After all 11 generation attempts are complete:

1. Create `nara`
2. Put `hero` into `nara`
3. Create `todai-ji-temple` and put `primary` + `hover` inside
4. Create `nara-park` and put `primary` + `hover` inside
5. Create `kasuga-taisha` and put `primary` + `hover` inside
6. Create `naramachi` and put `primary` + `hover` inside
7. Create `historic-monuments-of-ancient-nara` and put `primary` + `hover` inside
8. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 11 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–11 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Russia: Moscow (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the Moscow (Russia) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`moscow`

Then create these sub-collections inside `moscow`:

1. `red-square`
2. `moscow-kremlin`
3. `st-basil-s-cathedral`
4. `tretyakov-gallery`
5. `bolshoi-theatre`
6. `gorky-park-and-zaryadye-park`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`moscow`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`moscow`

- `hero`
- `red-square`
  - `primary`
  - `hover`
- `moscow-kremlin`
  - `primary`
  - `hover`
- `st-basil-s-cathedral`
  - `primary`
  - `hover`
- `tretyakov-gallery`
  - `primary`
  - `hover`
- `bolshoi-theatre`
  - `primary`
  - `hover`
- `gorky-park-and-zaryadye-park`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Moscow — City Hero

**Final collection:** `moscow`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

Moscow's skyline from Sparrow Hills at sunset with Stalinist towers and the Moskva River.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Red Square — Main View

**Final collection:** `moscow > red-square`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Red Square with the Kremlin wall and Spasskaya Tower under a glowing dusk sky, a few tiny distant figures.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Red Square — Second View

**Final collection:** `moscow > red-square`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

GUM department store's ornate facade lit at blue hour on Red Square.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Moscow Kremlin — Main View

**Final collection:** `moscow > moscow-kremlin`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The golden domes of the Kremlin's Cathedral Square in warm light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Moscow Kremlin — Second View

**Final collection:** `moscow > moscow-kremlin`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Tsar Bell and Tsar Cannon on the Kremlin grounds under a blue sky.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. St Basil's Cathedral — Main View

**Final collection:** `moscow > st-basil-s-cathedral`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

St Basil's coloured domes close-up against a blue sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. St Basil's Cathedral — Second View

**Final collection:** `moscow > st-basil-s-cathedral`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The cathedral's striped domes in snow in soft winter light.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Tretyakov Gallery — Main View

**Final collection:** `moscow > tretyakov-gallery`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Tretyakov Gallery's fairy-tale facade in soft light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Tretyakov Gallery — Second View

**Final collection:** `moscow > tretyakov-gallery`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A classic Russian landscape painting hanging on a museum wall in warm lighting.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Bolshoi Theatre — Main View

**Final collection:** `moscow > bolshoi-theatre`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Bolshoi Theatre's columned facade and quadriga sculpture glowing at dusk.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Bolshoi Theatre — Second View

**Final collection:** `moscow > bolshoi-theatre`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The theatre's red and gold auditorium with tiered boxes, empty.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Gorky Park and Zaryadye Park — Main View

**Final collection:** `moscow > gorky-park-and-zaryadye-park`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Zaryadye Park's floating bridge over the Moskva River with the Kremlin behind.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Gorky Park and Zaryadye Park — Second View

**Final collection:** `moscow > gorky-park-and-zaryadye-park`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Gorky Park's riverside promenade with greenery in soft evening light.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `moscow`
  - `hero` — ✓ / FAILED
  - `red-square`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `moscow-kremlin`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `st-basil-s-cathedral`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `tretyakov-gallery`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `bolshoi-theatre`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `gorky-park-and-zaryadye-park`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Red Square primary
3. Generate Red Square hover
4. Generate Moscow Kremlin primary
5. Generate Moscow Kremlin hover
6. Generate St Basil's Cathedral primary
7. Generate St Basil's Cathedral hover
8. Generate Tretyakov Gallery primary
9. Generate Tretyakov Gallery hover
10. Generate Bolshoi Theatre primary
11. Generate Bolshoi Theatre hover
12. Generate Gorky Park and Zaryadye Park primary
13. Generate Gorky Park and Zaryadye Park hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `moscow`
2. Put `hero` into `moscow`
3. Create `red-square` and put `primary` + `hover` inside
4. Create `moscow-kremlin` and put `primary` + `hover` inside
5. Create `st-basil-s-cathedral` and put `primary` + `hover` inside
6. Create `tretyakov-gallery` and put `primary` + `hover` inside
7. Create `bolshoi-theatre` and put `primary` + `hover` inside
8. Create `gorky-park-and-zaryadye-park` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Russia: Saint Petersburg (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the Saint Petersburg (Russia) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`saint-petersburg`

Then create these sub-collections inside `saint-petersburg`:

1. `hermitage-museum-and-winter-palace`
2. `peterhof-palace`
3. `church-of-the-savior-on-spilled-blood`
4. `st-isaac-s-cathedral`
5. `nevsky-prospekt`
6. `historic-centre-of-saint-petersburg`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`saint-petersburg`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`saint-petersburg`

- `hero`
- `hermitage-museum-and-winter-palace`
  - `primary`
  - `hover`
- `peterhof-palace`
  - `primary`
  - `hover`
- `church-of-the-savior-on-spilled-blood`
  - `primary`
  - `hover`
- `st-isaac-s-cathedral`
  - `primary`
  - `hover`
- `nevsky-prospekt`
  - `primary`
  - `hover`
- `historic-centre-of-saint-petersburg`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Saint Petersburg — City Hero

**Final collection:** `saint-petersburg`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide view of the Neva River with the Peter and Paul Fortress spire and the Winter Palace at sunrise.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Hermitage Museum and Winter Palace — Main View

**Final collection:** `saint-petersburg > hermitage-museum-and-winter-palace`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Winter Palace's green and white Baroque facade on Palace Square in warm light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Hermitage Museum and Winter Palace — Second View

**Final collection:** `saint-petersburg > hermitage-museum-and-winter-palace`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Hermitage's gilded Jordan Staircase, empty.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Peterhof Palace — Main View

**Final collection:** `saint-petersburg > peterhof-palace`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Peterhof's Grand Cascade with golden statues and fountains.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Peterhof Palace — Second View

**Final collection:** `saint-petersburg > peterhof-palace`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The palace's terraced gardens and fountain canal toward the Gulf of Finland.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Church of the Savior on Spilled Blood — Main View

**Final collection:** `saint-petersburg > church-of-the-savior-on-spilled-blood`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The church's colourful domes in golden light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Church of the Savior on Spilled Blood — Second View

**Final collection:** `saint-petersburg > church-of-the-savior-on-spilled-blood`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Close-up of the church's mosaic panels and ornate facade.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. St Isaac's Cathedral — Main View

**Final collection:** `saint-petersburg > st-isaac-s-cathedral`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

St Isaac's huge golden dome and columns under a blue sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. St Isaac's Cathedral — Second View

**Final collection:** `saint-petersburg > st-isaac-s-cathedral`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The view from the cathedral's colonnade over St Petersburg's rooftops.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Nevsky Prospekt — Main View

**Final collection:** `saint-petersburg > nevsky-prospekt`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Nevsky Prospekt at dusk with historic buildings and glowing street lamps, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Nevsky Prospekt — Second View

**Final collection:** `saint-petersburg > nevsky-prospekt`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Anichkov Bridge's horse sculptures over the Fontanka canal in soft light.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Historic Centre of Saint Petersburg — Main View

**Final collection:** `saint-petersburg > historic-centre-of-saint-petersburg`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Admiralty's golden spire at the end of a tree-lined avenue in morning mist.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Historic Centre of Saint Petersburg — Second View

**Final collection:** `saint-petersburg > historic-centre-of-saint-petersburg`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A canal-side view of pastel buildings and bridges in blue-hour light.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `saint-petersburg`
  - `hero` — ✓ / FAILED
  - `hermitage-museum-and-winter-palace`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `peterhof-palace`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `church-of-the-savior-on-spilled-blood`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `st-isaac-s-cathedral`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `nevsky-prospekt`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `historic-centre-of-saint-petersburg`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Hermitage Museum and Winter Palace primary
3. Generate Hermitage Museum and Winter Palace hover
4. Generate Peterhof Palace primary
5. Generate Peterhof Palace hover
6. Generate Church of the Savior on Spilled Blood primary
7. Generate Church of the Savior on Spilled Blood hover
8. Generate St Isaac's Cathedral primary
9. Generate St Isaac's Cathedral hover
10. Generate Nevsky Prospekt primary
11. Generate Nevsky Prospekt hover
12. Generate Historic Centre of Saint Petersburg primary
13. Generate Historic Centre of Saint Petersburg hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `saint-petersburg`
2. Put `hero` into `saint-petersburg`
3. Create `hermitage-museum-and-winter-palace` and put `primary` + `hover` inside
4. Create `peterhof-palace` and put `primary` + `hover` inside
5. Create `church-of-the-savior-on-spilled-blood` and put `primary` + `hover` inside
6. Create `st-isaac-s-cathedral` and put `primary` + `hover` inside
7. Create `nevsky-prospekt` and put `primary` + `hover` inside
8. Create `historic-centre-of-saint-petersburg` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Russia: Kazan (11 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **11 images for the Kazan (Russia) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 11 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 11 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 11 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 11 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`kazan`

Then create these sub-collections inside `kazan`:

1. `kazan-kremlin`
2. `qol-sharif-mosque`
3. `bauman-street`
4. `temple-of-all-religions`
5. `old-tatar-quarter`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`kazan`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 10 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`kazan`

- `hero`
- `kazan-kremlin`
  - `primary`
  - `hover`
- `qol-sharif-mosque`
  - `primary`
  - `hover`
- `bauman-street`
  - `primary`
  - `hover`
- `temple-of-all-religions`
  - `primary`
  - `hover`
- `old-tatar-quarter`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 11 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 11 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 10 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Kazan — City Hero

**Final collection:** `kazan`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide view of the Kazan Kremlin and the Volga River at sunrise.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Kazan Kremlin — Main View

**Final collection:** `kazan > kazan-kremlin`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The white Kremlin walls and the Syuyumbike Tower in golden light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Kazan Kremlin — Second View

**Final collection:** `kazan > kazan-kremlin`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Annunciation Cathedral's green domes inside the Kremlin.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Qol Sharif Mosque — Main View

**Final collection:** `kazan > qol-sharif-mosque`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Qol Sharif Mosque's blue-topped minarets at dusk reflecting in water.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Qol Sharif Mosque — Second View

**Final collection:** `kazan > qol-sharif-mosque`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The mosque's interior dome with intricate blue and gold patterns, empty.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Bauman Street — Main View

**Final collection:** `kazan > bauman-street`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Bauman Street's pedestrian street with lamp posts and colourful buildings in evening light, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Bauman Street — Second View

**Final collection:** `kazan > bauman-street`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A charming café-lined pedestrian lane in Kazan in soft evening light.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Temple of All Religions — Main View

**Final collection:** `kazan > temple-of-all-religions`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Temple of All Religions' colourful domes and towers in daylight.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Temple of All Religions — Second View

**Final collection:** `kazan > temple-of-all-religions`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Close-up of the ornate patterned domes and spires of the complex.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Old Tatar Quarter — Main View

**Final collection:** `kazan > old-tatar-quarter`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Traditional wooden Tatar houses with carved window frames in warm light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Old Tatar Quarter — Second View

**Final collection:** `kazan > old-tatar-quarter`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The white Marjani Mosque with its green roof in the Old Tatar Quarter.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–11: **3:4 — 1200 × 1600**
- **Never generate Images 2–11 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 11 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `kazan`
  - `hero` — ✓ / FAILED
  - `kazan-kremlin`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `qol-sharif-mosque`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `bauman-street`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `temple-of-all-religions`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `old-tatar-quarter`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Kazan Kremlin primary
3. Generate Kazan Kremlin hover
4. Generate Qol Sharif Mosque primary
5. Generate Qol Sharif Mosque hover
6. Generate Bauman Street primary
7. Generate Bauman Street hover
8. Generate Temple of All Religions primary
9. Generate Temple of All Religions hover
10. Generate Old Tatar Quarter primary
11. Generate Old Tatar Quarter hover

**Do not organize any image during this phase.**

## Organization order

After all 11 generation attempts are complete:

1. Create `kazan`
2. Put `hero` into `kazan`
3. Create `kazan-kremlin` and put `primary` + `hover` inside
4. Create `qol-sharif-mosque` and put `primary` + `hover` inside
5. Create `bauman-street` and put `primary` + `hover` inside
6. Create `temple-of-all-religions` and put `primary` + `hover` inside
7. Create `old-tatar-quarter` and put `primary` + `hover` inside
8. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 11 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–11 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Russia: Sochi (11 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **11 images for the Sochi (Russia) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 11 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 11 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 11 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 11 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`sochi`

Then create these sub-collections inside `sochi`:

1. `rosa-khutor`
2. `sochi-arboretum`
3. `sochi-olympic-park`
4. `black-sea-promenade`
5. `agur-waterfalls-and-trails`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`sochi`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 10 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`sochi`

- `hero`
- `rosa-khutor`
  - `primary`
  - `hover`
- `sochi-arboretum`
  - `primary`
  - `hover`
- `sochi-olympic-park`
  - `primary`
  - `hover`
- `black-sea-promenade`
  - `primary`
  - `hover`
- `agur-waterfalls-and-trails`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 11 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 11 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 10 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Sochi — City Hero

**Final collection:** `sochi`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide view of the Caucasus mountains rising behind the Black Sea coast at sunrise.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Rosa Khutor — Main View

**Final collection:** `sochi > rosa-khutor`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Rosa Khutor's snowy mountain slopes with a cable car under a clear sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Rosa Khutor — Second View

**Final collection:** `sochi > rosa-khutor`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Green summer meadows and wildflowers with Caucasus peaks above.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Sochi Arboretum — Main View

**Final collection:** `sochi > sochi-arboretum`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Sochi Arboretum's subtropical garden paths with palms and flowers.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Sochi Arboretum — Second View

**Final collection:** `sochi > sochi-arboretum`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A sunlit garden pavilion surrounded by tropical plants and flowers.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Sochi Olympic Park — Main View

**Final collection:** `sochi > sochi-olympic-park`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Fisht Stadium glowing at dusk with a fountain in front.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Sochi Olympic Park — Second View

**Final collection:** `sochi > sochi-olympic-park`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Olympic Park's fountain with coloured lights at night.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Black Sea promenade — Main View

**Final collection:** `sochi > black-sea-promenade`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A palm-lined Sochi seafront promenade by the Black Sea at sunset.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Black Sea promenade — Second View

**Final collection:** `sochi > black-sea-promenade`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A pebble beach and calm turquoise water with distant mountains in morning light.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Agur Waterfalls and trails — Main View

**Final collection:** `sochi > agur-waterfalls-and-trails`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Agur waterfalls pouring down mossy rocks in a forest gorge.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Agur Waterfalls and trails — Second View

**Final collection:** `sochi > agur-waterfalls-and-trails`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A wooden forest trail through lush Caucasus woodland with dappled light.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–11: **3:4 — 1200 × 1600**
- **Never generate Images 2–11 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 11 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `sochi`
  - `hero` — ✓ / FAILED
  - `rosa-khutor`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `sochi-arboretum`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `sochi-olympic-park`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `black-sea-promenade`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `agur-waterfalls-and-trails`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Rosa Khutor primary
3. Generate Rosa Khutor hover
4. Generate Sochi Arboretum primary
5. Generate Sochi Arboretum hover
6. Generate Sochi Olympic Park primary
7. Generate Sochi Olympic Park hover
8. Generate Black Sea promenade primary
9. Generate Black Sea promenade hover
10. Generate Agur Waterfalls and trails primary
11. Generate Agur Waterfalls and trails hover

**Do not organize any image during this phase.**

## Organization order

After all 11 generation attempts are complete:

1. Create `sochi`
2. Put `hero` into `sochi`
3. Create `rosa-khutor` and put `primary` + `hover` inside
4. Create `sochi-arboretum` and put `primary` + `hover` inside
5. Create `sochi-olympic-park` and put `primary` + `hover` inside
6. Create `black-sea-promenade` and put `primary` + `hover` inside
7. Create `agur-waterfalls-and-trails` and put `primary` + `hover` inside
8. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 11 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–11 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## Russia: Vladimir and Suzdal (11 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **11 images for the Vladimir and Suzdal (Russia) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 11 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 11 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 11 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 11 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`vladimir-suzdal`

Then create these sub-collections inside `vladimir-suzdal`:

1. `golden-gate-of-vladimir`
2. `assumption-cathedral-vladimir`
3. `suzdal-kremlin`
4. `museum-of-wooden-architecture`
5. `white-monuments-of-vladimir-and-suzdal`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`vladimir-suzdal`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 10 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`vladimir-suzdal`

- `hero`
- `golden-gate-of-vladimir`
  - `primary`
  - `hover`
- `assumption-cathedral-vladimir`
  - `primary`
  - `hover`
- `suzdal-kremlin`
  - `primary`
  - `hover`
- `museum-of-wooden-architecture`
  - `primary`
  - `hover`
- `white-monuments-of-vladimir-and-suzdal`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 11 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 11 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 10 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Vladimir and Suzdal — City Hero

**Final collection:** `vladimir-suzdal`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide view of Suzdal's domes and countryside across a misty field at sunrise.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Golden Gate of Vladimir — Main View

**Final collection:** `vladimir-suzdal > golden-gate-of-vladimir`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Vladimir's white-stone Golden Gate arch with its golden dome in warm light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Golden Gate of Vladimir — Second View

**Final collection:** `vladimir-suzdal > golden-gate-of-vladimir`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The gate's ancient stone wall and green grass in soft light.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Assumption Cathedral, Vladimir — Main View

**Final collection:** `vladimir-suzdal > assumption-cathedral-vladimir`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Assumption Cathedral's white stone walls and golden domes seen across the town.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Assumption Cathedral, Vladimir — Second View

**Final collection:** `vladimir-suzdal > assumption-cathedral-vladimir`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The cathedral's interior frescoes and iconostasis in dim golden light.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Suzdal Kremlin — Main View

**Final collection:** `vladimir-suzdal > suzdal-kremlin`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Nativity Cathedral's blue star-spangled domes in the Suzdal Kremlin.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Suzdal Kremlin — Second View

**Final collection:** `vladimir-suzdal > suzdal-kremlin`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Kremlin's earthen ramparts and a wooden bell tower in soft light.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Museum of Wooden Architecture — Main View

**Final collection:** `vladimir-suzdal > museum-of-wooden-architecture`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A wooden windmill and log church in an open-air museum field at golden hour.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Museum of Wooden Architecture — Second View

**Final collection:** `vladimir-suzdal > museum-of-wooden-architecture`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Carved wooden window frames on a traditional log house, close-up.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. White Monuments of Vladimir and Suzdal — Main View

**Final collection:** `vladimir-suzdal > white-monuments-of-vladimir-and-suzdal`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Church of the Intercession on the Nerl rising from a green meadow with reflections at sunrise.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. White Monuments of Vladimir and Suzdal — Second View

**Final collection:** `vladimir-suzdal > white-monuments-of-vladimir-and-suzdal`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

White-stone carved reliefs on the Cathedral of St Demetrius in Vladimir.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–11: **3:4 — 1200 × 1600**
- **Never generate Images 2–11 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 11 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `vladimir-suzdal`
  - `hero` — ✓ / FAILED
  - `golden-gate-of-vladimir`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `assumption-cathedral-vladimir`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `suzdal-kremlin`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `museum-of-wooden-architecture`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `white-monuments-of-vladimir-and-suzdal`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Golden Gate of Vladimir primary
3. Generate Golden Gate of Vladimir hover
4. Generate Assumption Cathedral, Vladimir primary
5. Generate Assumption Cathedral, Vladimir hover
6. Generate Suzdal Kremlin primary
7. Generate Suzdal Kremlin hover
8. Generate Museum of Wooden Architecture primary
9. Generate Museum of Wooden Architecture hover
10. Generate White Monuments of Vladimir and Suzdal primary
11. Generate White Monuments of Vladimir and Suzdal hover

**Do not organize any image during this phase.**

## Organization order

After all 11 generation attempts are complete:

1. Create `vladimir-suzdal`
2. Put `hero` into `vladimir-suzdal`
3. Create `golden-gate-of-vladimir` and put `primary` + `hover` inside
4. Create `assumption-cathedral-vladimir` and put `primary` + `hover` inside
5. Create `suzdal-kremlin` and put `primary` + `hover` inside
6. Create `museum-of-wooden-architecture` and put `primary` + `hover` inside
7. Create `white-monuments-of-vladimir-and-suzdal` and put `primary` + `hover` inside
8. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 11 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–11 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## United States: New York City (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the New York City (United States) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`new-york-city`

Then create these sub-collections inside `new-york-city`:

1. `statue-of-liberty`
2. `times-square`
3. `central-park`
4. `empire-state-building`
5. `metropolitan-museum-of-art`
6. `brooklyn-bridge`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`new-york-city`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`new-york-city`

- `hero`
- `statue-of-liberty`
  - `primary`
  - `hover`
- `times-square`
  - `primary`
  - `hover`
- `central-park`
  - `primary`
  - `hover`
- `empire-state-building`
  - `primary`
  - `hover`
- `metropolitan-museum-of-art`
  - `primary`
  - `hover`
- `brooklyn-bridge`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. New York City — City Hero

**Final collection:** `new-york-city`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

The Midtown Manhattan skyline from the Hudson River at blue hour with the Empire State Building lit.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Statue of Liberty — Main View

**Final collection:** `new-york-city > statue-of-liberty`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Statue of Liberty at sunrise from the water in soft golden light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Statue of Liberty — Second View

**Final collection:** `new-york-city > statue-of-liberty`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The statue's torch and crown against a clear blue sky from below.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Times Square — Main View

**Final collection:** `new-york-city > times-square`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Times Square at night with glowing billboards and rain-slick streets, all text blurred and unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Times Square — Second View

**Final collection:** `new-york-city > times-square`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A Broadway theatre marquee glowing in the evening, letters blurred and unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Central Park — Main View

**Final collection:** `new-york-city > central-park`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Bethesda Terrace and Fountain with autumn trees in soft light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Central Park — Second View

**Final collection:** `new-york-city > central-park`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A stone bridge over the Central Park lake in fall colours.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Empire State Building — Main View

**Final collection:** `new-york-city > empire-state-building`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Empire State Building lit up at dusk against a deep blue sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Empire State Building — Second View

**Final collection:** `new-york-city > empire-state-building`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The building's Art Deco spire and glowing details from street level.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Metropolitan Museum of Art — Main View

**Final collection:** `new-york-city > metropolitan-museum-of-art`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Metropolitan Museum's grand Fifth Avenue facade and steps in golden light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Metropolitan Museum of Art — Second View

**Final collection:** `new-york-city > metropolitan-museum-of-art`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The museum's Great Hall with arches and a stone floor, empty.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Brooklyn Bridge — Main View

**Final collection:** `new-york-city > brooklyn-bridge`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Brooklyn Bridge's granite towers and cables at sunrise under a golden sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Brooklyn Bridge — Second View

**Final collection:** `new-york-city > brooklyn-bridge`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The bridge's wooden walkway leading toward Manhattan in misty morning light, empty.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `new-york-city`
  - `hero` — ✓ / FAILED
  - `statue-of-liberty`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `times-square`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `central-park`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `empire-state-building`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `metropolitan-museum-of-art`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `brooklyn-bridge`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Statue of Liberty primary
3. Generate Statue of Liberty hover
4. Generate Times Square primary
5. Generate Times Square hover
6. Generate Central Park primary
7. Generate Central Park hover
8. Generate Empire State Building primary
9. Generate Empire State Building hover
10. Generate Metropolitan Museum of Art primary
11. Generate Metropolitan Museum of Art hover
12. Generate Brooklyn Bridge primary
13. Generate Brooklyn Bridge hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `new-york-city`
2. Put `hero` into `new-york-city`
3. Create `statue-of-liberty` and put `primary` + `hover` inside
4. Create `times-square` and put `primary` + `hover` inside
5. Create `central-park` and put `primary` + `hover` inside
6. Create `empire-state-building` and put `primary` + `hover` inside
7. Create `metropolitan-museum-of-art` and put `primary` + `hover` inside
8. Create `brooklyn-bridge` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## United States: Washington, D.C. (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the Washington, D.C. (United States) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`washington-dc`

Then create these sub-collections inside `washington-dc`:

1. `national-mall`
2. `u-s-capitol`
3. `white-house`
4. `lincoln-memorial`
5. `smithsonian-museums`
6. `national-museum-of-african-american-history-and-culture`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`washington-dc`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`washington-dc`

- `hero`
- `national-mall`
  - `primary`
  - `hover`
- `u-s-capitol`
  - `primary`
  - `hover`
- `white-house`
  - `primary`
  - `hover`
- `lincoln-memorial`
  - `primary`
  - `hover`
- `smithsonian-museums`
  - `primary`
  - `hover`
- `national-museum-of-african-american-history-and-culture`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Washington, D.C. — City Hero

**Final collection:** `washington-dc`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide view of the Capitol dome and the National Mall at golden hour.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. National Mall — Main View

**Final collection:** `washington-dc > national-mall`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Washington Monument at the end of the grassy Mall under a clear sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. National Mall — Second View

**Final collection:** `washington-dc > national-mall`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Mall's tree-lined path with museums in autumn light.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. U.S. Capitol — Main View

**Final collection:** `washington-dc > u-s-capitol`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The U.S. Capitol's white dome at sunrise.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. U.S. Capitol — Second View

**Final collection:** `washington-dc > u-s-capitol`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Capitol's steps and columns in soft morning light.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. White House — Main View

**Final collection:** `washington-dc > white-house`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The White House north facade with fountain and green lawn in daylight.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. White House — Second View

**Final collection:** `washington-dc > white-house`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The South Lawn view of the White House with spring blossoms.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Lincoln Memorial — Main View

**Final collection:** `washington-dc > lincoln-memorial`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Lincoln Memorial's columns at dusk glowing against a purple sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Lincoln Memorial — Second View

**Final collection:** `washington-dc > lincoln-memorial`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The seated statue chamber inside the memorial in soft light.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Smithsonian museums — Main View

**Final collection:** `washington-dc > smithsonian-museums`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Smithsonian Castle's red sandstone towers in warm light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Smithsonian museums — Second View

**Final collection:** `washington-dc > smithsonian-museums`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A bright museum hall with a vintage aircraft hanging from the ceiling, no people.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. National Museum of African American History and Culture — Main View

**Final collection:** `washington-dc > national-museum-of-african-american-history-and-culture`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The museum's bronze-coloured tiered exterior glowing in golden light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. National Museum of African American History and Culture — Second View

**Final collection:** `washington-dc > national-museum-of-african-american-history-and-culture`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The museum's interior atrium with daylight lines and a sweeping ramp, empty.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `washington-dc`
  - `hero` — ✓ / FAILED
  - `national-mall`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `u-s-capitol`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `white-house`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `lincoln-memorial`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `smithsonian-museums`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `national-museum-of-african-american-history-and-culture`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate National Mall primary
3. Generate National Mall hover
4. Generate U.S. Capitol primary
5. Generate U.S. Capitol hover
6. Generate White House primary
7. Generate White House hover
8. Generate Lincoln Memorial primary
9. Generate Lincoln Memorial hover
10. Generate Smithsonian museums primary
11. Generate Smithsonian museums hover
12. Generate National Museum of African American History and Culture primary
13. Generate National Museum of African American History and Culture hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `washington-dc`
2. Put `hero` into `washington-dc`
3. Create `national-mall` and put `primary` + `hover` inside
4. Create `u-s-capitol` and put `primary` + `hover` inside
5. Create `white-house` and put `primary` + `hover` inside
6. Create `lincoln-memorial` and put `primary` + `hover` inside
7. Create `smithsonian-museums` and put `primary` + `hover` inside
8. Create `national-museum-of-african-american-history-and-culture` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## United States: Los Angeles (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the Los Angeles (United States) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`los-angeles`

Then create these sub-collections inside `los-angeles`:

1. `hollywood-walk-of-fame`
2. `griffith-observatory`
3. `getty-center`
4. `santa-monica-pier`
5. `universal-studios-hollywood`
6. `los-angeles-county-museum-of-art-lacma`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`los-angeles`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`los-angeles`

- `hero`
- `hollywood-walk-of-fame`
  - `primary`
  - `hover`
- `griffith-observatory`
  - `primary`
  - `hover`
- `getty-center`
  - `primary`
  - `hover`
- `santa-monica-pier`
  - `primary`
  - `hover`
- `universal-studios-hollywood`
  - `primary`
  - `hover`
- `los-angeles-county-museum-of-art-lacma`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Los Angeles — City Hero

**Final collection:** `los-angeles`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

The Los Angeles skyline with the San Gabriel Mountains at dawn through soft haze.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Hollywood Walk of Fame — Main View

**Final collection:** `los-angeles > hollywood-walk-of-fame`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A Hollywood Boulevard sidewalk with star-shaped plaques and a blurred theatre behind, names unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Hollywood Walk of Fame — Second View

**Final collection:** `los-angeles > hollywood-walk-of-fame`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A pagoda-style cinema facade on Hollywood Boulevard in evening light, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Griffith Observatory — Main View

**Final collection:** `los-angeles > griffith-observatory`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Griffith Observatory's white domes at sunset with the city below.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Griffith Observatory — Second View

**Final collection:** `los-angeles > griffith-observatory`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The observatory terrace with a view toward the Hollywood hills at dusk.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Getty Center — Main View

**Final collection:** `los-angeles > getty-center`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Getty Center's white travertine buildings and gardens at golden hour.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Getty Center — Second View

**Final collection:** `los-angeles > getty-center`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Central Garden's azalea maze and pool at the Getty.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Santa Monica Pier — Main View

**Final collection:** `los-angeles > santa-monica-pier`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Santa Monica Pier's Ferris wheel at sunset reflected on wet sand.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Santa Monica Pier — Second View

**Final collection:** `los-angeles > santa-monica-pier`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The pier's wooden boardwalk and lights at blue hour.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Universal Studios Hollywood — Main View

**Final collection:** `los-angeles > universal-studios-hollywood`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A theme park entrance plaza with palms and a film-studio backlot street under a warm sky, no characters or logos.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Universal Studios Hollywood — Second View

**Final collection:** `los-angeles > universal-studios-hollywood`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A generic studio backlot street with western-style facades in golden light.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Los Angeles County Museum of Art (LACMA) — Main View

**Final collection:** `los-angeles > los-angeles-county-museum-of-art-lacma`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The LACMA campus with modern buildings and palm trees in golden light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Los Angeles County Museum of Art (LACMA) — Second View

**Final collection:** `los-angeles > los-angeles-county-museum-of-art-lacma`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A bright modern gallery interior with white walls and a skylight, empty.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `los-angeles`
  - `hero` — ✓ / FAILED
  - `hollywood-walk-of-fame`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `griffith-observatory`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `getty-center`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `santa-monica-pier`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `universal-studios-hollywood`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `los-angeles-county-museum-of-art-lacma`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Hollywood Walk of Fame primary
3. Generate Hollywood Walk of Fame hover
4. Generate Griffith Observatory primary
5. Generate Griffith Observatory hover
6. Generate Getty Center primary
7. Generate Getty Center hover
8. Generate Santa Monica Pier primary
9. Generate Santa Monica Pier hover
10. Generate Universal Studios Hollywood primary
11. Generate Universal Studios Hollywood hover
12. Generate Los Angeles County Museum of Art (LACMA) primary
13. Generate Los Angeles County Museum of Art (LACMA) hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `los-angeles`
2. Put `hero` into `los-angeles`
3. Create `hollywood-walk-of-fame` and put `primary` + `hover` inside
4. Create `griffith-observatory` and put `primary` + `hover` inside
5. Create `getty-center` and put `primary` + `hover` inside
6. Create `santa-monica-pier` and put `primary` + `hover` inside
7. Create `universal-studios-hollywood` and put `primary` + `hover` inside
8. Create `los-angeles-county-museum-of-art-lacma` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## United States: San Francisco (13 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **13 images for the San Francisco (United States) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 13 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 13 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 13 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 13 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`san-francisco`

Then create these sub-collections inside `san-francisco`:

1. `golden-gate-bridge`
2. `alcatraz-island`
3. `fisherman-s-wharf`
4. `chinatown`
5. `painted-ladies`
6. `palace-of-fine-arts`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`san-francisco`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 12 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`san-francisco`

- `hero`
- `golden-gate-bridge`
  - `primary`
  - `hover`
- `alcatraz-island`
  - `primary`
  - `hover`
- `fisherman-s-wharf`
  - `primary`
  - `hover`
- `chinatown`
  - `primary`
  - `hover`
- `painted-ladies`
  - `primary`
  - `hover`
- `palace-of-fine-arts`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 13 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 13 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 12 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. San Francisco — City Hero

**Final collection:** `san-francisco`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

The San Francisco skyline from Twin Peaks at sunset with fog rolling in.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Golden Gate Bridge — Main View

**Final collection:** `san-francisco > golden-gate-bridge`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Golden Gate Bridge's tower rising through fog at sunrise.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Golden Gate Bridge — Second View

**Final collection:** `san-francisco > golden-gate-bridge`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The bridge seen from Crissy Field under a clear blue sky with the bay.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Alcatraz Island — Main View

**Final collection:** `san-francisco > alcatraz-island`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Alcatraz Island's prison building and lighthouse from the bay at dawn.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Alcatraz Island — Second View

**Final collection:** `san-francisco > alcatraz-island`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The cell house corridor with rows of empty cells in dim light.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Fisherman's Wharf — Main View

**Final collection:** `san-francisco > fisherman-s-wharf`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Fisherman's Wharf's wooden pier with fishing boats at sunrise.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Fisherman's Wharf — Second View

**Final collection:** `san-francisco > fisherman-s-wharf`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Sea lions lounging on floating docks at Pier 39 with the city behind.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Chinatown — Main View

**Final collection:** `san-francisco > chinatown`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Chinatown's Dragon Gate with its green tiled roof against a blue sky.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Chinatown — Second View

**Final collection:** `san-francisco > chinatown`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Lantern-lined Grant Avenue in Chinatown at dusk, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Painted Ladies — Main View

**Final collection:** `san-francisco > painted-ladies`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Painted Ladies Victorian row with the skyline behind at golden hour.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Painted Ladies — Second View

**Final collection:** `san-francisco > painted-ladies`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Close-up of colourful Victorian trim and bay windows.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Palace of Fine Arts — Main View

**Final collection:** `san-francisco > palace-of-fine-arts`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Palace of Fine Arts rotunda and lagoon at sunrise with reflections.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Palace of Fine Arts — Second View

**Final collection:** `san-francisco > palace-of-fine-arts`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The colonnade of the Palace of Fine Arts glowing in soft morning light.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–13: **3:4 — 1200 × 1600**
- **Never generate Images 2–13 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 13 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `san-francisco`
  - `hero` — ✓ / FAILED
  - `golden-gate-bridge`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `alcatraz-island`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `fisherman-s-wharf`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `chinatown`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `painted-ladies`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `palace-of-fine-arts`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Golden Gate Bridge primary
3. Generate Golden Gate Bridge hover
4. Generate Alcatraz Island primary
5. Generate Alcatraz Island hover
6. Generate Fisherman's Wharf primary
7. Generate Fisherman's Wharf hover
8. Generate Chinatown primary
9. Generate Chinatown hover
10. Generate Painted Ladies primary
11. Generate Painted Ladies hover
12. Generate Palace of Fine Arts primary
13. Generate Palace of Fine Arts hover

**Do not organize any image during this phase.**

## Organization order

After all 13 generation attempts are complete:

1. Create `san-francisco`
2. Put `hero` into `san-francisco`
3. Create `golden-gate-bridge` and put `primary` + `hover` inside
4. Create `alcatraz-island` and put `primary` + `hover` inside
5. Create `fisherman-s-wharf` and put `primary` + `hover` inside
6. Create `chinatown` and put `primary` + `hover` inside
7. Create `painted-ladies` and put `primary` + `hover` inside
8. Create `palace-of-fine-arts` and put `primary` + `hover` inside
9. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 13 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–13 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````

## United States: Las Vegas (9 images)

````markdown
You are an image generation and asset-organization agent.

Your task is to generate **9 images for the Las Vegas (United States) city page of a travel website**, one at a time, in the exact generation order below.

## IMPORTANT WORKFLOW

### PHASE 1 — GENERATE ALL IMAGES

Generate all 9 images **one at a time**, in the exact order listed below.

For each image:

1. Generate the image.
2. Verify that it matches the requested subject, composition, style, aspect ratio, and resolution.
3. If generation fails, retry **once**.
4. Continue to the next image only after the current image has been successfully generated or has failed after the retry.
5. Keep every successfully generated image available for the organization phase.

**Do NOT create or organize collections during Phase 1.**

After successfully generating each image, reply:

`Image X of 9 generated: <description>`

If an image fails after the one permitted retry, reply:

`Image X of 9 failed: <brief reason>`

Do not say "done" yet because the images have not been organized.

---

# PHASE 2 — ORGANIZE ALL IMAGES

After **all 9 images have been generated or have failed after retry**, organize the successfully generated images into the collection structure.

## Collection creation order

First create the primary collection:

`las-vegas`

Then create these sub-collections inside `las-vegas`:

1. `las-vegas-strip`
2. `bellagio-fountains`
3. `fremont-street`
4. `red-rock-canyon`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`las-vegas`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 8 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`las-vegas`

- `hero`
- `las-vegas-strip`
  - `primary`
  - `hover`
- `bellagio-fountains`
  - `primary`
  - `hover`
- `fremont-street`
  - `primary`
  - `hover`
- `red-rock-canyon`
  - `primary`
  - `hover`

Create each sub-collection the first time it is needed, then reuse it.

After organizing each successfully generated image, reply:

`Image X of 9 done: <collection> / <name>`

Do not generate another image during the organization phase.

---

# GLOBAL IMAGE STYLE

Apply these requirements to **every image**:

- Photorealistic travel photography
- Warm natural light
- Rich but natural colour
- Sharp detail
- Cinematic depth
- One consistent warm colour grade across all 9 images
- No text
- No readable signs
- No logos
- No watermark
- No recognizable people
- No characters
- Accurate real-world landmarks
- Natural-looking architecture and geography

## Accuracy

Draw every landmark accurately as it really looks, including:

- Correct shape
- Correct number of towers
- Correct domes
- Correct windows
- Correct colours
- Correct proportions

Where you are uncertain about architectural details, **keep the composition simple rather than inventing details**.

## Signage

Where signs or lettering are visible:

- Keep them unreadable
- Blur or abstract the lettering
- Never show real brand names
- Never show recognizable logos
- Never show readable commercial text

## Memorial/religious locations

Show memorial and religious sites calmly and respectfully, with no people in focus.

---

# IMAGE DIMENSIONS

## Hero image

- **16:9 landscape**
- **2400 × 1350**
- Wide composition
- Calm, uncluttered space on both the left and right for website text overlay

## Place images

**IMPORTANT: All 8 place images must use a 3:4 portrait ratio. Do NOT use 4:5.**

- **3:4 portrait**
- **1200 × 1600**
- Main subject centered within the middle 70% of the frame
- Breathing room at the top and bottom
- Keep the top-left corner calm because a small badge will be placed there
- Keep the bottom-right corner calm because a button will be placed there

Output high-quality JPG, ideally under 300 KB after compression.

---

# IMAGE GENERATION LIST

Generate these **in exactly this order**.

## 1. Las Vegas — City Hero

**Final collection:** `las-vegas`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

A wide view of the Las Vegas desert at dusk with the Strip glowing on the horizon.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Las Vegas Strip — Main View

**Final collection:** `las-vegas > las-vegas-strip`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Las Vegas Strip at dusk with glowing resort towers and light trails, signage blurred.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Las Vegas Strip — Second View

**Final collection:** `las-vegas > las-vegas-strip`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

A night view of the Strip's lights from above, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Bellagio Fountains — Main View

**Final collection:** `las-vegas > bellagio-fountains`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Bellagio fountain jets rising at dusk with the hotel glowing behind.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Bellagio Fountains — Second View

**Final collection:** `las-vegas > bellagio-fountains`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The fountain jets in long exposure with golden light reflections.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Fremont Street — Main View

**Final collection:** `las-vegas > fremont-street`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Fremont Street's glowing LED canopy at night with vintage neon, text unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Fremont Street — Second View

**Final collection:** `las-vegas > fremont-street`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Vintage neon signs glowing against the desert night, lettering abstract and unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Red Rock Canyon — Main View

**Final collection:** `las-vegas > red-rock-canyon`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Red Rock Canyon's layered red sandstone cliffs at sunrise.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Red Rock Canyon — Second View

**Final collection:** `las-vegas > red-rock-canyon`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The scenic loop road winding past red rock formations in golden light.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

# VERIFICATION REQUIREMENTS

Before accepting each generated image, verify:

1. Correct image number and subject
2. Correct landmark or landscape
3. Correct composition
4. Correct aspect ratio
5. Correct pixel dimensions
6. Photorealistic travel-photography appearance
7. Consistent warm colour grade
8. No readable text
9. No recognizable logos
10. No watermark
11. No recognizable people
12. Correct architecture/geography
13. Main subject positioned within the middle 70%
14. Calm top-left corner
15. Calm bottom-right corner
16. Appropriate visual distinction from related `primary`/`hover` image

### Critical aspect-ratio check

- Image 1: **16:9 — 2400 × 1350**
- Images 2–9: **3:4 — 1200 × 1600**
- **Never generate Images 2–9 at 4:5 or 1200 × 1500.**

If an image does not meet the required ratio or dimensions, treat it as unsuccessful and retry it once.

---

# FAILURE HANDLING

If an image fails:

1. Retry that same image once.
2. If the retry succeeds, continue normally.
3. If the retry fails, record the image as failed and continue to the next image.
4. Do not repeatedly retry.
5. At the end, include every failed image in the final failure checklist.

A failed image must **not** be placed into a collection.

---

# FINAL CHECKLIST

After all 9 images have been generated and the successful images have been organized, print a complete checklist showing every required collection and image.

Use this exact structure:

- `las-vegas`
  - `hero` — ✓ / FAILED
  - `las-vegas-strip`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `bellagio-fountains`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `fremont-street`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `red-rock-canyon`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Las Vegas Strip primary
3. Generate Las Vegas Strip hover
4. Generate Bellagio Fountains primary
5. Generate Bellagio Fountains hover
6. Generate Fremont Street primary
7. Generate Fremont Street hover
8. Generate Red Rock Canyon primary
9. Generate Red Rock Canyon hover

**Do not organize any image during this phase.**

## Organization order

After all 9 generation attempts are complete:

1. Create `las-vegas`
2. Put `hero` into `las-vegas`
3. Create `las-vegas-strip` and put `primary` + `hover` inside
4. Create `bellagio-fountains` and put `primary` + `hover` inside
5. Create `fremont-street` and put `primary` + `hover` inside
6. Create `red-rock-canyon` and put `primary` + `hover` inside
7. Print the final checklist

---

# NON-NEGOTIABLE RULES

- Generate all 9 images before organizing any image.
- Generate images one at a time.
- Follow the exact generation order.
- Do not create collections during Phase 1.
- Do not organize an image immediately after generating it.
- Do not generate new images during Phase 2.
- Do not create folders.
- Use collections and sub-collections only.
- Use the exact collection and image names specified.
- Each sub-collection must contain exactly `primary` and `hover`.
- Failed images must never be placed into collections.
- Maintain the same warm visual grade across all images.
- Do not include readable text, logos, watermarks or recognizable people.
- Keep real-world landmarks and geography accurate.
- **Images 2–9 must be 3:4 at 1200 × 1600.**
- **Do not use 4:5 at 1200 × 1500 anywhere in this task.**
- The hero remains **16:9 at 2400 × 1350**.
- Never generate and organize an image in the same step.
````
