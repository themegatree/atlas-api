describe("Student upload feature tests : ", function () {
  beforeEach(() => {
    cy.task("taskTruncateTables");
    cy.task("taskCreateCohorts");
  });

  it("Testing that the students runs and updates successfully.", () => {
    cy.fixture("/csv-files/Students/passingmock.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();
      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "student");
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
  it("Testing that the students has errors", () => {
    cy.fixture("/csv-files/Students/longmock.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();

      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "student");

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
          expect(parsedData.response[0]).to.eq("Maximum number of students in file (50) exceeded");
        });
    });
  });
  it("Testing that the students has errors", () => {
    cy.fixture("/csv-files/Students/failingmock.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();

      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "student");

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
          expect(parsedData.response[0]).to.eq("You have entered an invalid or not yet included gender: Test on line 1");
          expect(parsedData.response[1]).to.eq("You have entered an invalid or not yet included background: Test on line 2");
          expect(parsedData.response[2]).to.eq("You have entered an invalid or not yet included background: Test on line 3");
          expect(parsedData.response[3]).to.eq("You have entered an invalid or not yet included gender: Test on line 3");
        });
    });
  });
});
