# Google Sheets Integration — Setup Guide
## Leeds BRC Study Information Form

This connects the HTML form to your Google Sheet so every submission
automatically adds a new row. Takes about 10 minutes to set up.

---

## Step 1 — Upload your spreadsheet to Google Sheets

1. Go to **drive.google.com**
2. Click **New → File upload**
3. Upload `NIHR_Leeds_BRC_Finance_and_Activity_2025_26_FINAL_Project_List_.csv`
4. Once uploaded, right-click it → **Open with → Google Sheets**
5. Copy the Sheet ID from the URL — it is the long string between `/d/` and `/edit`:
   ```
   https://docs.google.com/spreadsheets/d/  >>>THIS_PART<<<  /edit
   ```

---

## Step 2 — Create the Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete everything in the editor
3. Paste the entire contents of **`google-apps-script.js`**
4. Replace `YOUR_GOOGLE_SHEET_ID` on line 10 with your actual Sheet ID from Step 1
5. If your tab is not named `Sheet1`, update `SHEET_NAME` on line 11
6. Click **Save** (floppy disk icon) — name the project anything e.g. `BRC Form Receiver`

---

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**
2. Click the gear icon next to **Type** → select **Web app**
3. Fill in:
   - **Description:** BRC Form Receiver
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**
5. Click **Authorise access** → choose your Google account → click **Allow**
6. Copy the **Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/LONG_STRING_HERE/exec
   ```

---

## Step 4 — Paste the URL into the HTML form

1. Open `nihr-brc-form.html` in a text editor
2. Find this line (around line 452):
   ```js
   var SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with the URL you copied:
   ```js
   var SCRIPT_URL = 'https://script.google.com/macros/s/LONG_STRING_HERE/exec';
   ```
4. Save the file and re-upload it to your host (Netlify / GitHub Pages etc.)

---

## Step 5 — Test it

1. Open the hosted form URL
2. Enter a test project title → Generate Link → open the investigator link
3. Fill in the form → click **Send to Leeds BRC via Email**
4. Go to your Google Sheet — a new row should appear within a few seconds

---

## How columns are mapped

| Form field              | Sheet column                        |
|-------------------------|-------------------------------------|
| Project title           | B — Project Title                   |
| IRAS ID                 | C — IRAS Number                     |
| NHS / UoL REC ID        | D — NHS REC number                  |
| CPMS ID                 | E — RDN CPMS ID                     |
| Project summary         | G — 300-word project summary        |
| Sensitive (Y/N)         | H — Is this project summary sensitive? |
| Patients recruited      | L — Participants Recruited          |
| Project status          | M — Status                          |
| Paediatric (Y/N/N/A)   | AE — First in Human (repurposed)    |
| Date submitted          | AF — Comments                       |

Columns left blank (A, F, I–K, N–AD) are fields not collected
by the form — they can be filled in manually in the sheet.

---

## Troubleshooting

**No row appearing in sheet**
- Check SCRIPT_URL is set correctly in the HTML file
- Make sure the form is hosted online (not opened as a local file)
- In Apps Script: click **Executions** in the left menu to see if requests are arriving

**"Script function not found" error**
- Re-deploy: Apps Script → Deploy → Manage Deployments → edit → new version → deploy

**Permission error when deploying**
- Make sure "Execute as: Me" and "Who has access: Anyone" are selected
