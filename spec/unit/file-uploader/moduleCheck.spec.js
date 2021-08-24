const ModuleChallengeChecker = require('../../../src/moduleChallenge')
	describe('Module data check ', () => {
		beforeEach(() => {
			moduleMockData = [
				{
					StudentId      : 1,
					challengeName  : 'RPS',
					language       : 'nodejs',
					studentScore   : 'extended',
					coachScore     : 'extended',
					dueDate        : '08/17/2021 15:45',
					submissionDate : '08/17/2021 15:45'
				}
			];
		});
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
			expect(moduleChallengeChecker.errors).toEqual([ 'You have entered an incorrect language on line 1' ]);
		});
	});
describe('ModuleCheck functions ', () => {
    it('checking the projectCheck method works with no erros', async () => {
        const moduleChallengeChecker = new ModuleChallengeChecker();
        moduleChallengeChecker.projectCheck('Chitter', 'javascript', 6);
        errors = moduleChallengeChecker.errors;
        expect(errors).toEqual([]);
    });
    it('checking the projectCheck method works with errors', async () => {
        const moduleChallengeChecker = new ModuleChallengeChecker();
        moduleChallengeChecker.projectCheck('Chitter', 'C#', 6);
        errors = moduleChallengeChecker.errors;
        expect(errors).toEqual([ 'You have entered an incorrect language on line 6' ]);
    });
    it('checking the scoreCheck method works with no errors', async () => {
        const moduleChallengeChecker = new ModuleChallengeChecker();
        moduleChallengeChecker.scoreCheck('incomplete', 'incomplete', 6);
        errors = moduleChallengeChecker.errors;
        expect(errors).toEqual([]);
    });
    it('checking the scoreCheck method works with errors', async () => {
        const moduleChallengeChecker = new ModuleChallengeChecker();
        moduleChallengeChecker.scoreCheck('incomplete', 'finished', 6);
        errors = moduleChallengeChecker.errors;
        expect(errors).toEqual([ 'Coach Score: finished is invalid, on line 6' ]);
    });
});