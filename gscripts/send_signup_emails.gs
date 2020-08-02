function sendReportEmail(emailAddress, reportURL) {
  
  var message = emailBody(0, "reportURL", 0, 0, 0, reportURL);
  
  var subject = "Your Quiz is in! " // set the subject
  
  MailApp.sendEmail(emailAddress, subject, message);
  
}

