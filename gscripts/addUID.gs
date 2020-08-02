function addUID(emailAddress, UID) {
  
  // TODO: Set the spreadsheet ID to the actual responses spreadsheet after testing
  var sheet = SpreadsheetApp.openById('18V6ucudtriTR3Pq7NrEGhH71XoaFPY7Im0yRyiS5gqM').getActiveSheet();

  // Fetch values for each row in the Range.
  var data = sheet.getDataRange().getValues();
  
  // Go through each entry and send an email
  for (var i = 1; i < data.length; ++i) {
    
    var row = data[i]; 
    
    var email = row[5]; // get the email address
    
    if (email == emailAddress) {
      sheet.getRange(1 + i, 10).setValue(UID);
    }
  }
}

