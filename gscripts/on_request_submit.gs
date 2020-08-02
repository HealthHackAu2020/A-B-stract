function onRequestSubmit(emailAddress, UID) {
  // This function gets called when a researcher submits a Grok request form
  
  // Create a new Grok form with an embedded UID
  var grokForm = createNewGrokForm();
  
  // Add the UID to the requests responses sheet
  addUID(emailAddress, grokForm[uid]);
  
  // Email the published URL to the researcher
  sendGrokEmail(emailAddress, grokForm[url]);
}
