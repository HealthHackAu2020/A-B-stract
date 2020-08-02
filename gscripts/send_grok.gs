function sendGrokEmail(emailAddress, grokURL) {
  
  // send the email to the custom grok form
  
  var message = emailBody(0, "grokURL", 0, grokURL, 0, 0);
  
  var subject = "Welcome to A-B-stract!" // set the subject
  
  MailApp.sendEmail(emailAddress, subject, message);
  
}

