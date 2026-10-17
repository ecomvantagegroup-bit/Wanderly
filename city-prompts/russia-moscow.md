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
