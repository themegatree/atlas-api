describe('Test Report Class', () => {
  it('can get all of the report', async ()=> {
    const Report = require('../../src/reports/Report');
    const CohortId = 1;
    const report = Report(CohortId);

    const reportObj = await report.create();

    expect(reportObj).toEqual({
        "report": {
            "cohortId": "1",
            "gender": {
                "male": {
                    "percentage": "25",
                    "number": "1"
                },
                "female": {
                    "percentage": "75",
                    "number": "3"
                },
                "other": {
                    "percentage": "0",
                    "number": "0"
                }
            },
            "background": {
                "white": {
                    "percentage": "25",
                    "number": "1"
                },
                "mexican": {
                    "percentage": "0",
                    "number": "0"
                },
                "black": {
                    "percentage": "50",
                    "number": "1"
                },
                "other": {
                    "percentage": "25",
                    "number" : "1"
                }
            },
        }
        });
    })
})