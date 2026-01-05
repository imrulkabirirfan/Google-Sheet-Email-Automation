function checkValueAndSendEmail() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  // Ranges: C6:C8, D6:D8, E6:E8, F6:F8
  var nameRange   = sheet.getRange("C6:C8").getValues(); // Name
  var amountRange = sheet.getRange("D6:D8").getValues(); // Amount
  var emailRange  = sheet.getRange("E6:E8").getValues(); // Email
  var statusRange = sheet.getRange("F6:F8").getValues(); // Status

  var THRESHOLD = 100;

  for (var i = 0; i < amountRange.length; i++) {
    var name   = nameRange[i][0];
    var amount = amountRange[i][0];
    var email  = emailRange[i][0];
    var status = statusRange[i][0];

    var row = 6 + i; // Correct row number

    // Reset status when balance is restored
    if (typeof amount === "number" && amount >= THRESHOLD) {
      if (status === "LOW_SENT") {
        sheet.getRange(row, 6).setValue(""); // Column F
      }
      continue;
    }

    // Send only once per low-balance event
    if (typeof amount !== "number" || amount >= THRESHOLD || status === "LOW_SENT") {
      continue;
    }

    if (!email) continue;

    var displayName = name ? name : "User";

    var subject = "Low Balance Alert!";
    var message =
      "Hello " + displayName + ",\n" +
      "Your account balance is below 100 TAKA.\n" +
      "Your current Balance (BDT): " + amount + "\n" +
      "Please add money to continue your meal.\n" +
      "Regards,\nManagement";

    MailApp.sendEmail(email, subject, message);

    // Mark alert sent
    sheet.getRange(row, 6).setValue("LOW_SENT"); // Column F
  }
}
