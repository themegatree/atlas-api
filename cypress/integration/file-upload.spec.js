describe("File upload page feature tests: ", function () {
  beforeEach(() => {
    cy.task("taskTruncateTables");
    cy.task("taskCreateCohorts");
    cy.task("taskCreateStudents");
  });

  it("Testing that the Module-challenge runs and updates successfully.", () => {
    cy.fixture("/csv-files/ModuleChallenges/passingmock.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();
      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "moduleChallenge");
      cy
        .request({
          method: "POST",
          url: "api/fileUpload",
          body: formData
        })
        .should(res => {
          const enc = new TextDecoder("utf-8");
          const text = enc.decode(res.body);
          const parsedData = JSON.parse(text);
          expect(parsedData.response[0]).to.eq("Updated the database successfully.");
        });
    });
  });
  it("Testing that the module challenges has errors", () => {
    cy.fixture("/csv-files/ModuleChallenges/failingmock.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();

      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "moduleChallenge");

      cy
        .request({
          method: "POST",
          url: "api/fileUpload",
          body: formData
        })
        .should(res => {
          const enc = new TextDecoder("utf-8");
          const text = enc.decode(res.body);
          const parsedData = JSON.parse(text);
          expect(parsedData.response[0]).to.eq("Student id: 99 does not exist, on line 1");
          expect(parsedData.response[1]).to.eq("You have entered an incorrect challenge name on line 2");
          expect(parsedData.response[2]).to.eq("You have entered an incorrect language on line 3");
          expect(parsedData.response[3]).to.eq("Due date: 08/17/35 14:35 is invalid, on line 4");
          expect(parsedData.response[4]).to.eq("Submission date: 08/17/35 14:35 is invalid, on line 5");
        });
    });
  });

  it("Testing that the self assessment upload has no errors", () => {
    cy.fixture("/csv-files/SelfAssessments/passingmock.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();

      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "selfAssessment");

      cy
        .request({
          method: "POST",
          url: "api/fileUpload",
          body: formData
        })
        .should(res => {
          const enc = new TextDecoder("utf-8");
          const text = enc.decode(res.body);
          const parsedData = JSON.parse(text);
          expect(parsedData.response[0]).to.eq("Updated the database successfully.");
        });
    });
  });

  it("Testing that the Self Assessments has errors", () => {
    cy.fixture("/csv-files/SelfAssessments/failingmock.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();

      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "selfAssessment");

      cy
        .request({
          method: "POST",
          url: "api/fileUpload",
          body: formData
        })
        .should(res => {
          const enc = new TextDecoder("utf-8");
          const text = enc.decode(res.body);
          const parsedData = JSON.parse(text);
          expect(parsedData.response[0]).to.eq("Student id: 65 does not exist, on line 1");
          expect(parsedData.response[1]).to.eq("The score: 7 on line 2 does not exist or is not within the limits for confidence score.");
          expect(parsedData.response[2]).to.eq("The score: 9 on line 3 does not exist or is not within the limits for overall score.");
          expect(parsedData.response[3]).to.eq("The studentReason on line 4 exceeds character length 255.");
          expect(parsedData.response[4]).to.eq("Submission date: 08/17/26 14:35 is invalid, on line 4");
          expect(parsedData.response[5]).to.eq("The studentFeedback on line 5 exceeds character length 255.");
          expect(parsedData.response[6]).to.eq("Due date: 08/17/26 14:35 is invalid, on line 5");
        });
    });
  });

  it("Testing that the Module Challenge has error for Malformed header", () => {
    cy.fixture("/csv-files/ModuleChallenges/malformed.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();

      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "moduleChallenge");

      cy
        .request({
          method: "POST",
          url: "api/fileUpload",
          body: formData
        })
        .should(res => {
          const enc = new TextDecoder("utf-8");
          const text = enc.decode(res.body);
          const parsedData = JSON.parse(text);
          expect(parsedData.response[0]).to.eq("Headers: [challengeName,language,studentScore,coachScore,dueDate] do not match Headers for Module Challenge: [StudentId,challengeName,language,studentScore,coachScore,dueDate,submissionDate]");
        });
    });
  });

  it("Testing that the Module Challenge has error for no headers", () => {
    cy.fixture("/csv-files/ModuleChallenges/empty.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();

      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "moduleChallenge");

      cy
        .request({
          method: "POST",
          url: "api/fileUpload",
          body: formData
        })
        .should(res => {
          const enc = new TextDecoder("utf-8");
          const text = enc.decode(res.body);
          const parsedData = JSON.parse(text);
          expect(parsedData.response[0]).to.eq("Headers: [99,RPS,nodejs,extended,extended,08/17/21 14:35,08/17/21 14:35] do not match Headers for Module Challenge: [StudentId,challengeName,language,studentScore,coachScore,dueDate,submissionDate]");
        });
    });
  });

  it("Testing that the Module Challenge has error for self assessment", () => {
    cy.fixture("/csv-files/ModuleChallenges/selfassessment.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();

      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "moduleChallenge");

      cy
        .request({
          method: "POST",
          url: "api/fileUpload",
          body: formData
        })
        .should(res => {
          const enc = new TextDecoder("utf-8");
          const text = enc.decode(res.body);
          const parsedData = JSON.parse(text);
          expect(parsedData.response[0]).to.eq("Looks like you've tried to upload a self assessment");
        });
    });
  });

  it("Testing that the Self Assessment has error for Malformed header", () => {
    cy.fixture("/csv-files/SelfAssessments/malformed.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();

      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "selfAssessment");

      cy
        .request({
          method: "POST",
          url: "api/fileUpload",
          body: formData
        })
        .should(res => {
          const enc = new TextDecoder("utf-8");
          const text = enc.decode(res.body);
          const parsedData = JSON.parse(text);
          expect(parsedData.response[0]).to.eq("Headers: [confidenceScore,overallScore,studentReason,studentFeedback,submissionsDate,dueDate] do not match Headers for Self Assessment: [StudentId,confidenceScore,overallScore,studentReason,studentFeedback,dueDate,submissionDate]");
        });
    });
  });

  it("Testing that the Self Assessment has error for no headers", () => {
    cy.fixture("/csv-files/SelfAssessments/empty.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();

      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "selfAssessment");

      cy
        .request({
          method: "POST",
          url: "api/fileUpload",
          body: formData
        })
        .should(res => {
          const enc = new TextDecoder("utf-8");
          const text = enc.decode(res.body);
          const parsedData = JSON.parse(text);
          expect(parsedData.response[0]).to.eq("Headers: [65,1,2,No reason,No Feedback,08/17/21 14:35,08/17/21 14:35] do not match Headers for Self Assessment: [StudentId,confidenceScore,overallScore,studentReason,studentFeedback,dueDate,submissionDate]");
        });
    });
  });

  it("Testing that the Self Assessment has error for self assessment", () => {
    cy.fixture("/csv-files/SelfAssessments/modulechallenge.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();

      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "selfAssessment");

      cy
        .request({
          method: "POST",
          url: "api/fileUpload",
          body: formData
        })
        .should(res => {
          const enc = new TextDecoder("utf-8");
          const text = enc.decode(res.body);
          const parsedData = JSON.parse(text);
          expect(parsedData.response[0]).to.eq("Looks like you've tried to upload a module challenge");
        });
    });
  });
});


  
