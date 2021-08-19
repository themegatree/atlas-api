describe('Test Report Class', () => {

    let reportObj;
    beforeEach( async () => {
        const Report = require('../../src/reports/Report');
        const CohortId = 1;
        const report = new Report();
    
        reportObj = await report.create(CohortId);    
    })

  it('can get genders', () => {
    expect(reportObj.report.gender).toEqual([
        { type: 'male', number: 1, percentage: 25 },
        { type: 'female', number: 3, percentage: 75 }
        ]);
    })

    it('can get backgrounds', () => {
          expect(reportObj.report.background).toEqual([
        { type: 'White', number: 1, percentage: 25 },
        { type: 'Black', number: 2, percentage: 50 },
        { type: 'Other', number: 1, percentage: 25 }
        ]);

    });
})