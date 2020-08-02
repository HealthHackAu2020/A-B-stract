// Sends non-duplicate emails with data from response spreadsheet
function sendQuizEmails(quizURL) {
  
  // check if anyone has requested to unsubscribe and delete their data before proceeding
  unsub();
  
  // TODO: Set the spreadsheet ID to the actual responses spreadsheet after testing
  var sheet = SpreadsheetApp.openById('18V6ucudtriTR3Pq7NrEGhH71XoaFPY7Im0yRyiS5gqM').getActiveSheet();

  // Fetch values for each row in the Range.
  var data = sheet.getDataRange().getValues();
  
  // Go through each entry and send an email
  for (var i = 1; i < data.length; ++i) {
    
    var row = data[i]; 
    
    // Ignore researchers
    var role = row[3]; 
    if (role == "I'm a Researcher") continue;
    
    var name = row[1]; // get the name
    var emailAddress = row[5]; // get the email address
    var sorryDocURL = row[7]; // get the sorry doc URL
   
    var message = emailBody(name, "quizURL", sorryDocURL, 0, quizURL, 0);

    var subject = "A Quiz is in! | A-B-stract" // set the subject
    
    MailApp.sendEmail(emailAddress, subject, message);
    
   }
}


