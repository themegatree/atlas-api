const ModuleChallengeChecker = require('../../../src/fileUpload/moduleChallenge')
describe('Module checks ', () => {
	let moduleMockData = []
		beforeEach(() => {
			moduleMockData = [
				{
					StudentId      : 1,
					challengeName  : 'RPS',
					language       : 'nodejs',
					studentScore   : 'extended',
					coachScore     : 'extended',
					dueDate        : '08/17/2021 15:45',
					submissionDate : '08/17/2021 15:45',
					counter : 1
				}
			];
		})
	describe('data check ', () => {
		it('Works with no errors', async () => {
			const moduleChallengeChecker = new ModuleChallengeChecker('No file', 'moduleChallenge');
			spyOn(moduleChallengeChecker, 'findAllStudents').and.returnValue([ { id: 1 }, { id: 2 } ]);
			await moduleChallengeChecker.check(moduleMockData);
			expect(moduleChallengeChecker.errors).toEqual([]);
		});

		it('Works with errors', async () => {
			const moduleChallengeChecker = new ModuleChallengeChecker('No file', 'moduleChallenge');
			spyOn(moduleChallengeChecker, 'findAllStudents').and.returnValue([ { id: 1 }, { id: 2 } ]);
			moduleMockData[0].language = 'C#';
			await moduleChallengeChecker.check(moduleMockData);
			const errors = moduleChallengeChecker.errors;
			expect(errors).toEqual([ 'You have entered an incorrect language on line 1' ]);
		});
	});
describe(' functions ', () => {
    it('checking the projectCheck method works with no erros', async () => {
        const moduleChallengeChecker = new ModuleChallengeChecker();
        moduleChallengeChecker.projectCheck(moduleMockData[0]);
        const errors = moduleChallengeChecker.errors;
        expect(errors).toEqual([]);
    });
    it('checking the projectCheck method works with errors', async () => {
        const moduleChallengeChecker = new ModuleChallengeChecker();
		moduleMockData[0].language = "C#"
        moduleChallengeChecker.projectCheck(moduleMockData[0]);
        const errors = moduleChallengeChecker.errors;
        expect(errors).toEqual([ 'You have entered an incorrect language on line 1' ]);
    });
    it('checking the scoreCheck method works with no errors', async () => {
        const moduleChallengeChecker = new ModuleChallengeChecker();
        moduleChallengeChecker.scoreCheck(moduleMockData[0]);
        const errors = moduleChallengeChecker.errors;
        expect(errors).toEqual([]);
    });
    it('checking the scoreCheck method works with errors', async () => {
        const moduleChallengeChecker = new ModuleChallengeChecker();
		moduleMockData[0].coachScore = "finished"
        moduleChallengeChecker.scoreCheck(moduleMockData[0]);
        const errors = moduleChallengeChecker.errors;
        expect(errors).toEqual([ 'Coach Score: finished is invalid, on line 1' ]);
    });
	});
})
