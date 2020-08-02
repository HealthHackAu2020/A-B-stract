// run this function before we send out review emails
function unsub() {
  
  // the sorry docs will have a script that when opened will add unsub to the front of the file name
  
  // check every doc in the unsub folder and if they have been flagged for unsubscription we delete the 
  // corresponding line in the responses sheet
  
  // iterates through every file in the unsub folder
  var files = DriveApp.getFolderById('1DPSMeIrdBfAfzh2bxgDmmq2NXHZfJ4bo').getFiles();
  while (files.hasNext()) {
    var doc = files.next();
    var docName = doc.getName();
    if (docName == 'template') continue;
    if (docName.substring(0,5) == 'unsub'){
      var email = docName.substring(5,docName.length);
      
      // deletes the sorry doc corresponding to the email being unsubbed
      doc.setTrashed(true);
      
      // deletes the line corresponding to the email being unsubbed
      
      // TODO: Set the spreadsheet ID to the actual responses spreadsheet after testing
      var sheet = SpreadsheetApp.openById('18V6ucudtriTR3Pq7NrEGhH71XoaFPY7Im0yRyiS5gqM').getActiveSheet();
      
      var data = sheet.getDataRange().getValues();
      for (var i = 1; i < data.length; ++i) {
        var row = data[i]; 
        var emailAddress = row[5]; 
        if (emailAddress == email) {
          for (var j = 0; j < 7; j++) {
            sheet.getRange(1 + i, j + 1).setValue(" ");
          }
          break;
        } 
      }
    }
  }
}

