describe('Test Report Class', () => {
  it('can get all of the report', async ()=> {
    const Report = require('../../src/reports/Report');
    const CohortId = 1;
    const report = Report(CohortId);

    const reportObj = await report.create();

    expect(reportObj).toEqual({
        "report": {
            "cohortId": "5",
            "gender": {
                "male": {
                    "percentage": "50",
                    "number": "10"
                },
                "female": {
                    "percentage": "50",
                    "number": "10"
                },
                "other": {
                    "percentage": "0",
                    "number": "0"
                }
            },
            "background": {
                "white": {
                    "percentage": "50",
                    "number": "10"
                },
                "asian": {
                    "percentage": "25",
                    "number": "5"
                },
                "black": {
                    "percentage": "25",
                    "number": "5"
                }
            },
        }
    });

  // it('can get only gender stats', ()=> {

  // });
  
});
