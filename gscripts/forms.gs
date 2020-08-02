function generateUID () {
  var ID_LENGTH = 20;
  var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var rtn = '';
  for (var i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return rtn;
}

function createNewForm(title, formTemplateID, responseID) {
  // Create a new blank form or a copy of a template AND a reponses sheet.
  // Forms and sheets are created in harcoded folders
  // Returns the new form
  
  // This is the ID of the "automatic" subfolder in "forms"
  var formFolderID = '1TbGubqa3iR8nuUaqxMKF0FlOKpga19mX';
  
  // Create the form
  var formID = null;
  if (formTemplateID === "") {
    var formFileResource = {
      title: title,
      "parents": [{'id':formFolderID}],
      mimeType: 'application/vnd.google-apps.form'
    };
    formID = Drive.Files.insert(formFileResource).getId();
  } else {
    // Make a copy
    formID = DriveApp
      .getFileById(formTemplateID)
      .makeCopy(title, DriveApp.getFolderById(formFolderID))
      .getId();
  }
  var form = FormApp.openById(formID);
   
  // Create the response sheet (if needed)
  if (responseID === "") {

    // This is the ID of the "automatic" subfolder in "responses"
    var responseFolderID = '1su_nqgealC6vEYErcJRdAjdzGhJCYzjB';
    var reponseTitle = title + "(Responses)";

    var responseFileResource = {
      title: reponseTitle,
      "parents": [{'id':responseFolderID}],
      mimeType: 'application/vnd.google-apps.spreadsheet'
    };
    responseID = Drive.Files.insert(responseFileResource).getId();
  }

  // set the sheet as the response destination for the form
  form.setDestination(
    FormApp.DestinationType.SPREADSHEET,
    responseID);
  
  return form;
}

function addUIDToForm(form, uid) {
  // add uid value to the dangerzone part of the from and 
  // return the pre-filled URL
  var formResponse = form.createResponse();
  var items = form.getItems();
  for (var i in items) {
    if (items[i].getTitle() === "DANGER ZONE") {
      var textItem = items[i].asTextItem();
      var itemResponse = items[i].createResponse(uid) ;
      formResponse.withItemResponse(itemResponse);
    }
  }
  formResponse.submit();
  return formResponse.toPrefilledUrl();   
}

function createNewGrokForm() {
  var UID = generateUID();

  // This is the ID of the "Grok of science" form we use as a template
  var grokTemplateID = '1SQx0g80q0nZoKVRLNV8n6wfpZIxL4WCkSxbyWF89cbw';
  
  // This is the ID of the single Grok responses sheet
  var grokResponseID = '1LZByTKzqXUiV0X97104axfSnJNWhfUYmw5ugiQZokqI';

  var newForm = createNewForm("GROK_" + UID, grokTemplateID, grokResponseID)
    .setShowLinkToRespondAgain(false)
    .setAllowResponseEdits(false);

  // Add the UID to the form
  var formUrl = addUIDToForm(newForm, UID);
        
  return {
    url: formUrl,
    uid: UID
  };
}

function addQuizQuestion(form, question, answers) {
  // question is a string
  // answers is a list of strings
  item = form.addMultipleChoiceItem();
  item.setTitle(question);
  item.setChoiceValues(answers);
}

function addQuizUid(form, uid) {
  var item = form.addTextItem();
  item.setTitle('DANGER ZONE');
  return addUIDToForm(form, uid);
}

function createQuizForm(uid, rowData) {
  // Create a new Quiz form 
  var newForm = createNewForm("QUIZ_" + uid, "", "")
    .setShowLinkToRespondAgain(false)
    .setAllowResponseEdits(false);
  
  var quizTitle = "sometitle";
  var mediaReleaseText = "Somethign butter!";
  
  newForm.setTitle(quizTitle)
    .setDescription("Please read the following media release and answer the quiz questions\n\n" + mediaReleaseText)
    .setConfirmationMessage('Thanks for helping to make science more understandable!')
    .setAllowResponseEdits(false)
    .setAcceptingResponses(true);
  
  var question = "I'm axeing you summthin";
  var answers = ["I am a frog", "I am butter"];
  
  addQuizQuestion(newForm, question, answers);
  
  var prefilledUrl = addQuizUid(newForm, uid);
  
  return {
    url: prefilledUrl
  };  
}

function runOnOpedn() {
  var body = DocumentApp.getActiveDocument().getBody();
  
  // Append a document header paragraph.
  var header = body.appendParagraph("A Document");
  header.setHeading(DocumentApp.ParagraphHeading.HEADING1);
  
  // Append a section header paragraph.
  var section = body.appendParagraph("Section 1");
  section.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  
  // Append a regular paragraph.
  body.appendParagraph("This is a typical paragraph.");  
}

function createResearcherReport(uid) {
  // This is the ID of the "automatic" subfolder in "reports"
  var reportFolderID = '1MYOMElqpwDR5hl0CvwUnTjE8IId2lFhx';
  var reportTemplateId = '152DceRNDB0pcoXok5EHqGE5ORUrp3ErlMQANW5qCl-U';
  var reportTitle = 'Researcher_Report_' + uid;
  
  var reportID = DriveApp
    .getFileById(reportTemplateId)
    .makeCopy(reportTitle, DriveApp.getFolderById(reportFolderID))
    .getId();
}

