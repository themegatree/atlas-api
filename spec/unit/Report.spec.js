fdescribe('Test Report Class', () => {
  it('can get all of the report', async ()=> {
    const Report = require('../../src/reports/Report');
    const CohortId = 1;
    const report = new Report();

    const reportObj = await report.create(CohortId);

    expect(reportObj.report.background).toEqual([
        { type: 'White', number: 1, percentage: 25 },
        { type: 'Black', number: 2, percentage: 50 },
        { type: 'Other', number: 1, percentage: 25 }
    ]);

    expect(reportObj.report.gender).toEqual([
        { type: 'male', number: 1, percentage: 25 },
        { type: 'female', number: 3, percentage: 75 }
    ]);

    })

})