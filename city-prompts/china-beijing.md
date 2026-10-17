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
