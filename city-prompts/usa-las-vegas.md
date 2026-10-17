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
