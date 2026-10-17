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
