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
