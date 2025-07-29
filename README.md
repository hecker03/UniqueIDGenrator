# Unique ID Generator using Google Forms & Google Apps Script

## 🔍 Overview

This project is a **Unique ID Generator** built using **Google Forms**, **Google Sheets**, and **Google Apps Script**. It automates the process of generating and assigning unique identifiers to users upon form submission — perfect for event registrations, certifications, or attendance tracking.

## 🚀 Features

- Generates a unique ID for each form response
- Automatically appends the ID to the associated row in Google Sheets
- Sends a confirmation email (optional) with the generated ID
- Fully automated using Apps Script
- No external services required

## 🧰 Tech Stack

- Google Forms
- Google Sheets
- Google Apps Script (JavaScript-based scripting)

## 📌 How It Works

1. **User Submits Google Form**  
   → Form responses are automatically recorded in a linked Google Sheet.

2. **Apps Script Trigger Executes**  
   → On each new submission, the script generates a unique ID (e.g., based on timestamp or sequence).

3. **ID is Stored & Sent**  
   → The generated ID is saved in the sheet and optionally emailed to the user.

## 🛠️ Setup Instructions

1. **Create a Google Form**  
   Include required fields like Name, Email, etc.

2. **Link the Form to a Google Sheet**  
   Click on *Responses → View in Sheets*.

3. **Open Apps Script Editor**  
   In the Sheet, go to `Extensions → Apps Script`.

4. **Paste the Script**  
   Use the unique ID generation code in the editor. Modify the script according to the department and year(if any).

5. **Deploy Triggers**  
   Go to `Triggers → Add Trigger`, and select:
   - Function to run: `onFormSubmit`
   - Event type: `On form submit`

6. **Save and Authorize**  
   Save the script and authorize it when prompted.

## 🧪 Sample Output

| Timestamp           | Name       | Email             | Unique ID      |
|--------------------|------------|-------------------|----------------|
| 2025-07-29 12:34PM | Alice Doe  | alice@email.com   | UID20250729001 |
| 2025-07-29 12:35PM | Bob Smith  | bob@email.com     | UID20250729002 |

## ✉️ Optional Email Feature

You can enable automatic emails using `MailApp.sendEmail()` inside the script to notify users of their generated ID.

## 📄 License

This project is open-source and free to use for academic and non-commercial purposes.

---

