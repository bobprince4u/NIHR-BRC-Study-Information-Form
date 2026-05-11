// ═══════════════════════════════════════════════════════════════
//  Accian / Leeds BRC — Form-to-Sheet Receiver
//  Paste this entire file into Google Apps Script, then deploy
//  as a Web App (see README for step-by-step instructions).
// ═══════════════════════════════════════════════════════════════

// ── CONFIG ──────────────────────────────────────────────────────
// Replace with your actual Google Sheet ID (from its URL)
// e.g. https://docs.google.com/spreadsheets/d/THIS_PART_HERE/edit
var SHEET_ID   = '1bBHEj81lbsnoz6nH8LJjAXNDvauoYmk5758DqmboYsM';
var SHEET_NAME = 'NIHR Leeds BRC Finance and Activity 2025_26 FINAL(Project List)'; // change if your tab has a different name
// ────────────────────────────────────────────────────────────────

/**
 * Handles POST requests from the HTML form.
 * The form sends JSON; this function parses it and appends a row.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var ss    = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Map form fields to the spreadsheet columns (row 4 = header row)
    // Columns: A=Local Ref, B=Project Title, C=IRAS, D=NHS REC,
    //          E=CPMS, F=UoL REC, G=Summary, H=Sensitive,
    //          L=Patients Recruited, M=Status, AC=Paediatric (Comments)
    var row = [
      '',                                          // A  Local Reference number (left blank — assigned by BRC)
      data.project_title     || '',                // B  Project Title
      data.iras_id           || '',                // C  IRAS Number
      data.rec_id            || '',                // D  NHS REC number
      data.cpms_id           || '',                // E  RDN CPMS ID
      '',                                          // F  University REC (not on form)
      data.project_summary   || '',                // G  300-word project summary
      data.sensitive === 'Y' ? 'Yes' : 'No',       // H  Sensitive?
      '',                                          // I  First Name (not on form)
      '',                                          // J  Surname (not on form)
      '',                                          // K  ORCID (not on form)
      data.patients_recruited !== 'N/A'
        ? data.patients_recruited : '',            // L  Patients Recruited
      data.project_status    || '',                // M  Status
      '',                                          // N  Project Actual Start Date
      '',                                          // O  Project End Date
      '',                                          // P  Theme
      '',                                          // Q  UKCRC Health Category
      '',                                          // R  NIHR Priority Areas
      '',                                          // S  REC Approval Required
      '',                                          // T  RACS codes
      '',                                          // U  RACS sub-categories
      '',                                          // V  Expected Impact
      '',                                          // W  Study Phase
      '',                                          // X  BRC funding
      '',                                          // Y  Main Funding Source
      '',                                          // Z  Main Funding Category
      '',                                          // AA Main Funding - BRC
      '',                                          // AB Main Funding - DHSC/NIHR
      '',                                          // AC Main Funding - Industry
      '',                                          // AD Total External Funding
      data.paediatric        || '',                // AE First in Human Project (repurposed for Paediatric)
      'Submitted via BRC Form | ' + data.submitted_at // AF Comments
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles GET requests — used to verify the script is deployed correctly.
 * Visit the web app URL in a browser; you should see {"status":"live"}
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'live', message: 'Leeds BRC Form receiver is running.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
