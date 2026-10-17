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
