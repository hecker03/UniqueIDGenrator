function onFormSubmit(e) {
  // Get the response sheet by name (avoid relying on e.range.getSheet())
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  // Get headers and row data
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const lastRow = sheet.getLastRow();
  const values = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];

  // Helper to get column index
  const getIndex = (name) => headers.indexOf(name);

  // Column indices
  const yearCol = getIndex("Class");
  const deptCol = getIndex("Name of Program/Department");
  const uniqueIDCol = getIndex("Unique ID") + 1; // Convert to 1-based

  // Mappings
  const yearMap = {
    "First Year": "1",
    "Second Year": "2",
    "Third Year": "3",
    "Final Year": "4"
  };

  const deptMap = {
    "Computer Engineering": "1",
    "IT Engineering": "2",
    "AIML Engineering": "3",
    "AIDS Engineering": "4",
    "ECE Engineering": "5",
    "E&TC Engineering": "6",
  };

  // Get and sanitize user input
  const yearInput = values[yearCol];
  const deptInput = values[deptCol];

  const yearCode = yearMap[yearInput];
  const deptCode = deptMap[deptInput] || "9";

  if (!yearCode || !deptCode) {
    Logger.log("Invalid year or department: " + yearInput + ", " + deptInput);
    return;
  }

  const prefix = yearCode + deptCode;
  const cleanDeptInput = deptMap[deptInput] ? deptInput : "other";
  const key = yearInput + "," + cleanDeptInput;

  // Use ScriptProperties to store counter
  const props = PropertiesService.getScriptProperties();
  const currentCount = parseInt(props.getProperty(key) || "0");
  const newCount = currentCount + 1;
  props.setProperty(key, newCount.toString());

  // Construct final Unique ID
  const serial = newCount.toString().padStart(4, '0'); // e.g. 0001
  const finalUniqueID = prefix + serial; // e.g. 120001

  // Set the Unique ID in the correct cell
  sheet.getRange(lastRow, uniqueIDCol).setValue(finalUniqueID);
}
