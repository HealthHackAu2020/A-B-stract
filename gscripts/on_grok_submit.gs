// This function gets called when a researcher submits a grok form
function onGrokSubmit(emailAddress) {

  // Create a new Quiz form with the UID embedded
  var quizURL = createQuizForm();
  
  // Create a new report
  var reportURL = createResearcherReport();
  
  // Add a link to the report into the requests responses sheet
  addLink(emailAddress, reportURL);
  
  // Email the published quiz URL to the helpers
  sendQuizEmails(quizURL);
  
  // Email link to the report to the researcher
  sendReportEmail(emailAddress, reportURL);
}
