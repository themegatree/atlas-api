const truncateTables = require('../../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../../test/ReportGroupTests/create-students')
const createModuleChallenges = require('../../../test/ReportGroupTests/create-module-challenges')

const Dashboard = require('../../../src/dashboard/Dashboard');

describe('Test Dashboard Class', () => {
    let dashboard
    let completeDashboard

    beforeEach( async () => {
      await truncateTables()
      await createCohorts()
      await createStudents()
      await createModuleChallenges()
      dashboard = new Dashboard();
      completeDashboard = await dashboard.create();
    })

  it('returns total number of students', async () => {
    expect(completeDashboard.studentTotal).toEqual(5)
  })  

  it('returns total number of students', async () => {
    expect(completeDashboard.cohortsTotal).toEqual(2)
  })  

  it('creates genders array', async () => {
    expect(completeDashboard.gender).toEqual(
			[
      	{ type: 'male', number: 1, percentage: '20.00' },
      	{ type: 'female', number: 4, percentage: '80.00' }
			]
		);
	})

  it('creates backgrounds array', async () => {
    expect(completeDashboard.background).toEqual(
			[
				{ type: 'White', number: 1, percentage: '20.00' },
				{ type: 'Black', number: 2, percentage: '40.00' },
				{ type: 'Other', number: 2, percentage: '40.00' }
    	]
		);
  });

  it('creates challenges array', async () => {
    expect(completeDashboard.challenges).toEqual(
			[
				{ type: 'bank', percentage: '100.00' },
				{ type: 'Chitter', percentage: '66.67' },
			]
		);
  });
})