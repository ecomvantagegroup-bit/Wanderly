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
