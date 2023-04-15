function onFormSubmit(e) {
  var formId = e.source.getId();
  var responseId = e.response.getId();
  var submissionNumber = getSubmissionNumber(formId, responseId);
  SpreadsheetApp.getUi().alert("Your submission number is: " + submissionNumber);
}