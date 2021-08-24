const ModuleChallengeChecker = require('../../../src/moduleChallenge')

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