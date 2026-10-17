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
