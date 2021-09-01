describe("Module Challenge upload feature tests : ", function () {
  beforeEach(() => {
    cy.task("taskTruncateTables");
    cy.task("taskCreateCohorts");
    cy.task("taskCreateStudents");
  });

  it("Testing that the Module challenge runs and updates successfully.", () => {
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
          expect(parsedData.response[0]).to.eq("Headers: [challengeName,language,studentScore,coachScore,dueDate] does not match any valid headers");
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
          expect(parsedData.response[0]).to.eq("Headers: [99,RPS,nodejs,extended,extended,08/17/21 14:35,08/17/21 14:35] does not match any valid headers");
        });
    });
  });
});
