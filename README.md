# NIHR BRC Study Information Form

### Leeds Biomedical Research Centre

A standalone web-based form for collecting study information from investigators for annual NIHR BRC reporting. Built as a single HTML file — no framework, no backend, no installation required.

---

## Overview

This form supports a two-step coordinator → investigator workflow:

1. **Coordinator** opens the page, enters the project title, and generates a unique link
2. **Coordinator** enters the investigator's email and clicks **Send** — their email client opens with a pre-written message and the link ready to go
3. **Investigator** opens the link, sees the project title pre-filled and locked, completes the remaining fields, and clicks **Submit**
4. The completed form is sent automatically to `example@email.com` via Formspree

---

## Files

```
nihr-brc-form.html    ← The entire application (single file)
README.md             ← This file
```

---

## Hosting

The form must be hosted online for the generated investigator links to work. Three options:

### Option 1 — Netlify Drop (Fastest, free)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop `nihr-brc-form.html` onto the page
3. Netlify gives you a live URL instantly (e.g. `https://graceful-fox-abc123.netlify.app`)
4. That is your permanent form URL — share it with coordinators

### Option 2 — GitHub Pages (Free, permanent)

1. Create a new GitHub repository (e.g. `brc-form`)
2. Rename `nihr-brc-form.html` to `index.html` and upload it
3. Go to **Settings → Pages → Source → main branch**
4. Your URL: `https://yourusername.github.io/brc-form`

---

## How to Use

### As Coordinator

1. Open the hosted form URL in your browser
2. The page loads in **Coordinator mode** (shown in the top-right badge)
3. Type the full project title in the input field
4. Click **Generate Link** — a unique investigator URL appears
5. Enter the investigator's email address in the **Send to Investigator** field
6. Click **Send** — your email client opens with the message pre-written and ready
7. Review and click send in your email app

### As Investigator

1. Open the link received by email
2. The page loads in **Investigator mode** with the project title pre-filled and locked
3. Complete all applicable fields:
   - IRAS ID, CPMS ID, REC ID
   - Project summary (up to 300 words, only if no IDs available)
   - Project sensitivity
   - Project status
   - Patient recruitment details
   - Paediatric research indicator
4. Click **Submit to Leeds BRC** — the form is sent to the coordinator
5. Optionally click **Download copy** to save a formatted HTML copy for your records

---

## Form Fields

| Field               | Required      | Notes                                                    |
| ------------------- | ------------- | -------------------------------------------------------- |
| IRAS ID             | If applicable | Leave blank if not applicable                            |
| CPMS ID             | If applicable | Leave blank if not applicable                            |
| REC ID              | If applicable | NHS REC or local UoL REC number                          |
| Project summary     | Conditional   | Required only if no IRAS/CPMS/NHS REC ID. Max 300 words  |
| Project sensitive   | Yes           | Y = commercially sensitive or not for public release     |
| Project status      | Yes           | In setup / Open / Completed / Suspended / Withdrawn      |
| Recruits patients   | Yes           | If Yes, enter number recruited in current financial year |
| Paediatric research | Yes           | Y / N / N/A                                              |

---

## Financial Year

The patient recruitment period updates automatically based on the current date:

- **April onwards** → shows current year cycle (e.g. `1 April 2026 – 31 March 2027`)
- **Before April** → shows previous year cycle (e.g. `1 April 2025 – 31 March 2026`)

No manual update is needed each year.

---

## Email Submission

Completed forms are submitted via **Formspree** to `k.o.ohuchukwu@leeds.ac.uk`.

- **Formspree Form ID:** `xdabzbvx`
- **Formspree Dashboard:** [formspree.io](https://formspree.io) — log in to view submissions, set up email notifications, and export responses

> **Important:** Formspree requires the destination email to be verified. Check your Formspree dashboard to confirm `k.o.ohuchukwu@leeds.ac.uk` is verified, otherwise submissions will not be delivered.

---

## Email Sent to Investigator

When the coordinator clicks **Send**, the following message is pre-filled in their email client:

> Dear Colleague,
>
> Please could you provide the following information for the study listed below, identified for inclusion in BRC reporting as PI or Co-I receiving BRC funding. This information is required for annual reporting back to the NIHR. Alternatively, please indicate if this project should not be included in the BRC reporting.
>
> _[Project Title]_
>
> Click the link below to open the form. The project title is pre-filled — you only need to complete the remaining fields and click Submit.
>
> _[Investigator Link]_
>
> This information is required for annual reporting back to the NIHR.
>
> Please complete as soon as possible.
>
> Kind regards,
> Leeds BRC Coordinator
> example@email.com

---

## Downloaded Copy

When an investigator clicks **Download copy**, a styled HTML file is generated and saved to their device. It includes:

- Leeds BRC logo and header
- Project title
- All completed field values with colour-coded status tags
- Date of completion
- Prints cleanly to PDF via browser print dialog

---

## Configuration

To update any settings, open `nihr-brc-form.html` in a text editor and search for the relevant value:

| Setting           | Search for          | Location                                  |
| ----------------- | ------------------- | ----------------------------------------- |
| Formspree Form ID | `xdabzbvx`          | Inside `<script>` block                   |
| Coordinator email | `example@email.com` | Appears in footer, email body, and script |
| Max summary words | `300`               | Word counter in script                    |

---

## Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge.
No Internet Explorer support.

---

## Contact

Leeds Biomedical Research Centre · NIHR
**example@email.com**
