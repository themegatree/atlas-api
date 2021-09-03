const constants = require("../../constants");
describe("Dashboard Router Test", () => {

  beforeEach(() => {
    cy.task("taskTruncateTables");
    cy.task("taskCreateCohorts");
    cy.task("taskCreateStudents");
    cy.task("taskCreateModuleChallenges");
    cy.task("taskCreateUploadHistory");
  });


  it("returns dashboard object", () => {
    cy.request("GET", "/api/dashboard").then(
      (res) => {
        expect(res.body).to.have.property("dashboard"); 
      }
    );
  });

  it("dashboard object has correct keys", () => {
    cy.request("GET", "/api/dashboard").then(
      (res) => {
        expect(res.body.dashboard).to.have.property("studentTotal");
        expect(res.body.dashboard).to.have.property("cohortsTotal");
        expect(res.body.dashboard).to.have.property("gender");
        expect(res.body.dashboard).to.have.property("background");
        expect(res.body.dashboard).to.have.property("challenges");

      }
    );
  });

  it("returns correct students total", () => {
    cy.request("GET", "/api/dashboard").then( (res) => {
      expect(res.body.dashboard.studentTotal).to.eq(5);
    });    
  });

  it("returns correct cohorts total", () => {
    cy.request("GET", "/api/dashboard").then( (res) => {
      expect(res.body.dashboard.cohortsTotal).to.eq(3);
    });    
  });

  it("returns correct gender object", () => {
    cy.request("GET", "/api/dashboard").then( (res) => {
      expect(res.body.dashboard.gender.length).to.eq( 2);
      expect(res.body.dashboard.gender[0]).to.deep.eq({type: constants.gender.male, number: 1, percentage: "20.00"});
      expect(res.body.dashboard.gender[1]).to.deep.eq({type: constants.gender.female, number: 4, percentage: "80.00"});
    });    
  });

  it("returns correct background object", () => {
    cy.request("GET", "/api/dashboard").then((res) => {
      expect(res.body.dashboard.background.length).to.eq( 3);
      expect(res.body.dashboard.background[0]).to.deep.eq({type: constants.background.white, number: 1, percentage: "20.00"});
      expect(res.body.dashboard.background[1]).to.deep.eq({type: constants.background.black, number: 2, percentage: "40.00"});
      expect(res.body.dashboard.background[2]).to.deep.eq({type: constants.background.other, number: 2, percentage: "40.00"});  
    });    
  });

  it("returns correct challenges object", () => {
    cy.request("GET", "/api/dashboard").then((res) => {
      expect(res.body.dashboard.challenges.length).to.deep.eq( 2);
      expect(res.body.dashboard.challenges[0]).to.deep.eq({type: constants.challenge.bank, percentage: "100.00"});
      expect(res.body.dashboard.challenges[1]).to.deep.eq({type: constants.challenge.chitter, percentage: "66.67"});
    });
  });

  it("returns correct fileUploads array", () => {
    cy.request("GET", "/api/dashboard").then((res) => {
      expect(res.body.dashboard.fileUploads[0]).to.deep.eq({type: "Self Assessment", uploads: [1,1,1,2,1,1,0]});
      expect(res.body.dashboard.fileUploads[1]).to.deep.eq({type: "Module Challenges", uploads: [0,1,1,0,0,0,0]});
    });
  });
});
