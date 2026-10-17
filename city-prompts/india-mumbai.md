You are an image generation and asset-organization agent.

Your task is to generate **17 images for the Mumbai (India) city page of a travel website**, one at a time, in the exact generation order below.

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

`mumbai`

Then create these sub-collections inside `mumbai`:

1. `gateway-of-india`
2. `chhatrapati-shivaji-maharaj-terminus-csmt`
3. `elephanta-caves`
4. `victorian-gothic-and-art-deco-ensembles`
5. `marine-drive`
6. `colaba-causeway`
7. `chhatrapati-shivaji-maharaj-vastu-sangrahalaya`
8. `haji-ali-dargah`

Do not create folders. Use **collections and sub-collections only**.

## Organization order

### Step 1 — Primary collection

Put the hero image directly inside:

`mumbai`

with the exact image name:

`hero`

### Step 2 — Sub-collections

Then organize the remaining 16 images into their respective sub-collections.

Each sub-collection must contain exactly two images:

- `primary`
- `hover`

Use the exact structure:

`mumbai`

- `hero`
- `gateway-of-india`
  - `primary`
  - `hover`
- `chhatrapati-shivaji-maharaj-terminus-csmt`
  - `primary`
  - `hover`
- `elephanta-caves`
  - `primary`
  - `hover`
- `victorian-gothic-and-art-deco-ensembles`
  - `primary`
  - `hover`
- `marine-drive`
  - `primary`
  - `hover`
- `colaba-causeway`
  - `primary`
  - `hover`
- `chhatrapati-shivaji-maharaj-vastu-sangrahalaya`
  - `primary`
  - `hover`
- `haji-ali-dargah`
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

## 1. Mumbai — City Hero

**Final collection:** `mumbai`

**Final image name:** `hero`

**Size:** **16:9, 2400 × 1350**

### Subject

The Bandra-Worli Sea Link at blue hour with soft sea haze and a glowing city skyline behind, wide cinematic view.

The composition should feel expansive and atmospheric.

Leave calm negative space on both the left and right for website text overlay.

---

## 2. Gateway of India — Main View

**Final collection:** `mumbai > gateway-of-india`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Gateway of India arch at golden hour with the Taj Mahal Palace hotel behind and the sea in front.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 3. Gateway of India — Second View

**Final collection:** `mumbai > gateway-of-india`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The Gateway of India and ferries at dawn in soft mist over calm water.

This must be clearly different from Image 2 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 4. Chhatrapati Shivaji Maharaj Terminus (CSMT) — Main View

**Final collection:** `mumbai > chhatrapati-shivaji-maharaj-terminus-csmt`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Gothic facade of Chhatrapati Shivaji Maharaj Terminus with domes and turrets at dusk, warm lights.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 5. Chhatrapati Shivaji Maharaj Terminus (CSMT) — Second View

**Final collection:** `mumbai > chhatrapati-shivaji-maharaj-terminus-csmt`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The ornate interior hall of CSMT with carved stone arches and soft light, empty.

This must be clearly different from Image 4 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 6. Elephanta Caves — Main View

**Final collection:** `mumbai > elephanta-caves`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The rock-cut pillars at the entrance of the Elephanta Caves with dappled light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 7. Elephanta Caves — Second View

**Final collection:** `mumbai > elephanta-caves`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The three-faced Sadashiva Shiva sculpture carved in basalt inside Elephanta Cave, dramatic side light.

This must be clearly different from Image 6 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 8. Victorian Gothic and Art Deco Ensembles — Main View

**Final collection:** `mumbai > victorian-gothic-and-art-deco-ensembles`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The Rajabai Clock Tower and Victorian Gothic University building beside Oval Maidan in golden light.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 9. Victorian Gothic and Art Deco Ensembles — Second View

**Final collection:** `mumbai > victorian-gothic-and-art-deco-ensembles`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Pastel Art Deco apartment blocks along Oval Maidan with curved balconies under a clear sky.

This must be clearly different from Image 8 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 10. Marine Drive — Main View

**Final collection:** `mumbai > marine-drive`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Marine Drive's curve of streetlights at night, the Queen's Necklace, over a calm bay.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 11. Marine Drive — Second View

**Final collection:** `mumbai > marine-drive`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Marine Drive promenade at sunset with waves on the tetrapods and Art Deco buildings behind.

This must be clearly different from Image 10 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 12. Colaba Causeway — Main View

**Final collection:** `mumbai > colaba-causeway`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

A lively Colaba Causeway street with stalls and colonial buildings in golden morning light, signs unreadable.

Any signs or lettering must be blurred or abstracted and unreadable. No readable brand names, logos or commercial text.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 13. Colaba Causeway — Second View

**Final collection:** `mumbai > colaba-causeway`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Colourful bangles and handicrafts on a Colaba street stall, close-up.

This must be clearly different from Image 12 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 14. Chhatrapati Shivaji Maharaj Vastu Sangrahalaya — Main View

**Final collection:** `mumbai > chhatrapati-shivaji-maharaj-vastu-sangrahalaya`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

The domed Indo-Saracenic museum building with its gardens at golden hour.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 15. Chhatrapati Shivaji Maharaj Vastu Sangrahalaya — Second View

**Final collection:** `mumbai > chhatrapati-shivaji-maharaj-vastu-sangrahalaya`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

The museum's central hall with carved columns and sculptures in soft light, empty.

This must be clearly different from Image 14 — use a different angle, detail or lighting.

Depict the subject accurately and realistically. No recognizable people.

Keep the main subject centered within the middle 70% of the portrait frame.

Keep the top-left and bottom-right corners calm.

---

## 16. Haji Ali Dargah — Main View

**Final collection:** `mumbai > haji-ali-dargah`

**Final image name:** `primary`

**Size:** **3:4, 1200 × 1600**

### Subject

Haji Ali Dargah's white domes and minarets on its islet joined by a causeway at sunset.

Depict the subject accurately and realistically. No recognizable people.

Keep the primary subject centered within the middle 70% of the frame.

Keep the top-left and bottom-right corners visually calm for UI overlays.

---

## 17. Haji Ali Dargah — Second View

**Final collection:** `mumbai > haji-ali-dargah`

**Final image name:** `hover`

**Size:** **3:4, 1200 × 1600**

### Subject

Haji Ali Dargah in soft mist over the Arabian Sea at low tide with the causeway empty.

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

- `mumbai`
  - `hero` — ✓ / FAILED
  - `gateway-of-india`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `chhatrapati-shivaji-maharaj-terminus-csmt`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `elephanta-caves`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `victorian-gothic-and-art-deco-ensembles`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `marine-drive`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `colaba-causeway`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `chhatrapati-shivaji-maharaj-vastu-sangrahalaya`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED
  - `haji-ali-dargah`
    - `primary` — ✓ / FAILED
    - `hover` — ✓ / FAILED

Also list a separate **Failures** section.

If there were no failures, write:

`Failures: None`

---

# CRITICAL ORDER SUMMARY

## Generation order

1. Generate hero
2. Generate Gateway of India primary
3. Generate Gateway of India hover
4. Generate Chhatrapati Shivaji Maharaj Terminus (CSMT) primary
5. Generate Chhatrapati Shivaji Maharaj Terminus (CSMT) hover
6. Generate Elephanta Caves primary
7. Generate Elephanta Caves hover
8. Generate Victorian Gothic and Art Deco Ensembles primary
9. Generate Victorian Gothic and Art Deco Ensembles hover
10. Generate Marine Drive primary
11. Generate Marine Drive hover
12. Generate Colaba Causeway primary
13. Generate Colaba Causeway hover
14. Generate Chhatrapati Shivaji Maharaj Vastu Sangrahalaya primary
15. Generate Chhatrapati Shivaji Maharaj Vastu Sangrahalaya hover
16. Generate Haji Ali Dargah primary
17. Generate Haji Ali Dargah hover

**Do not organize any image during this phase.**

## Organization order

After all 17 generation attempts are complete:

1. Create `mumbai`
2. Put `hero` into `mumbai`
3. Create `gateway-of-india` and put `primary` + `hover` inside
4. Create `chhatrapati-shivaji-maharaj-terminus-csmt` and put `primary` + `hover` inside
5. Create `elephanta-caves` and put `primary` + `hover` inside
6. Create `victorian-gothic-and-art-deco-ensembles` and put `primary` + `hover` inside
7. Create `marine-drive` and put `primary` + `hover` inside
8. Create `colaba-causeway` and put `primary` + `hover` inside
9. Create `chhatrapati-shivaji-maharaj-vastu-sangrahalaya` and put `primary` + `hover` inside
10. Create `haji-ali-dargah` and put `primary` + `hover` inside
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
