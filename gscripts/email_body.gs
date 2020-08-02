// the bodies of the emails to send
function emailBody(name, role, sorryDocURL, grokURL, quizURL, reportURL) {
  
  // TODO: refine emails if required e.g. generate a hyperlink instead of inserting the link
  
  var researcherEmail = `

Hi there ${name}! 

Have a media release you’re about to publish? 

We’re excited to help you better predict how your work will be interpreted and presented in public spaces. 

Here is how it works: 

Follow the prompts here to upload your media release:
https://forms.gle/Deb2VpWqSYaKCH2f9

Once our community of helpers have answered the quiz, we’ll collate the results and send it back to you via email. 

Want to learn more about this project? Click here: 
https://github.com/HealthHackAu2020/A-B-stract/blob/master/README.md

If you’d like to opt out from our mailing list, click here:
${sorryDocURL}
-------------------------------------------------------------------------------------------------------------------------------
`;
   
  
  var helperEmail = `
      
Hi there ${name}! 

Thanks for joining our community to help researchers better predict how their work will be interpreted and presented in public spaces. 
          
Researchers will be able to send their media release and a short quiz to wonderful volunteers like yourself, and gain valuable feedback on their work. 
          
When a Researcher makes their quiz available, we’ll send you an email to let you know. So sit tight for now! 
          
Want to learn more about this project? Click here: 
https://github.com/HealthHackAu2020/A-B-stract/blob/master/README.md
          
If you’d like to opt out from our mailing list, click here:
${sorryDocURL}
  
-------------------------------------------------------------------------------------------------------------------------------
`;

  var bothEmail = `

Hi there ${name}! 

Have a media release you’re about to publish? 

We’re excited to help you better predict how your work will be interpreted and presented in public spaces. 

Here is how it works: 

Follow the prompts here to upload your media release:
https://forms.gle/Deb2VpWqSYaKCH2f9

Once our community of helpers have answered the quiz, we’ll collate the results and send it back to you via email. 
  
As you have nominated that you also want to help other researchers, we’ll send you an email to let you know when other Researchers make their quizzes available. So sit tight for now! 

Want to learn more about this project? Click here: 
https://github.com/HealthHackAu2020/A-B-stract/blob/master/README.md

If you’d like to opt out from our mailing list, click here:
${sorryDocURL}
-------------------------------------------------------------------------------------------------------------------------------
`;
  

  var grokURLEmail = `

Thanks for requesting a new media release form! You can submit your media release and quiz questions here: 
${grokURL}
  
Once our community of helpers have answered the quiz, we’ll collate the results and send it back to you via email. 
  
Want to learn more about this project? Click here: 
https://github.com/HealthHackAu2020/A-B-stract/blob/master/README.md

  
`;
  
  var quizURLEmail = `

Hi there ${name}! 

Thanks for being in our community to help researchers better predict how their work will be interpreted and presented in public spaces. 

A Researcher has just submitted a quiz! You can help them out by doing it here:
${quizURL}

Want to learn more about this project? Click here: 
https://github.com/HealthHackAu2020/A-B-stract/blob/master/README.md

If you’d like to opt out from our mailing list, click here:
${sorryDocURL}
-------------------------------------------------------------------------------------------------------------------------------
`;
  
  var reportURLEmail = `

We’ve received your quiz!
  
And now we wait…
  
Responses to your quiz will be updated here in real time:
${reportURL}
  
You can submit another quiz at any time using this form:
${grokURL}
  
Want to learn more about this project? Click here: 
https://github.com/HealthHackAu2020/A-B-stract/blob/master/README.md
  
-------------------------------------------------------------------------------------------------------------------------------
`;
    
  var email = "";
  
  switch(role) {
      
    case "I'm a Researcher":
      return researcherEmail;
      
    case "I want to help Researchers":
      return helperEmail;
      
    case "I'm a Researcher, I want to help Researchers":
      return bothEmail;
      
    case "grokURL":
      return grokURLEmail;  
      
    case "quizURL":
      return quizURLEmail;
      
    case "reportURL":
      return reportURLEmail;

    default:
      throw new Error("invalid email type");
      break;
  }
}

