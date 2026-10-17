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
