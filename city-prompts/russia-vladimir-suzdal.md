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
