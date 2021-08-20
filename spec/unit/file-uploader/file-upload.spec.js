<<<<<<< HEAD
const FileUploader = require('../../../src/fileUpload.js')
const moment =require('moment')

describe('Testing all functions in fileUploader class ,', () => { 
    describe('ModuleCheck functions ', () => {
        it ('checking the projectCheck method works with no erros', async () => {
            const fileUpload = new FileUploader("No file", 'moduleChallenge')
            fileUpload.projectCheck('Chitter','javascript',6)
            errors = fileUpload.errors
            expect(errors).toEqual([])
        })
        it ('checking the projectCheck method works with errors', async () => {
            const fileUpload = new FileUploader("No file", 'moduleChallenge')
            fileUpload.projectCheck('Chitter','C#',6)
            errors = fileUpload.errors
            expect(errors).toEqual(['You have entered an incorrect language on line 6'])
        })
        it ('checking the scoreCheck method works with no errors', async () => {
            const fileUpload = new FileUploader("No file", 'moduleChallenge')
            fileUpload.scoreCheck('incomplete','incomplete',6)
            errors = fileUpload.errors
            expect(errors).toEqual([])
        })
        it ('checking the scoreCheck method works with errors', async () => {
            const fileUpload = new FileUploader("No file", 'moduleChallenge')
            fileUpload.scoreCheck('incomplete','finished',6)
            errors = fileUpload.errors
            expect(errors).toEqual(['Coach Score: finished is invalid, on line 6'])
        })
    })
    
    describe('DateCheck', () => {
        it ('shows no errors for values before current date', async () => {
            const fileUpload = new FileUploader("No file", 'moduleChallenge')
            fileUpload.dateCheck("08/17/2021 15:45", "08/17/2021 15:45", 5)        
            expect(fileUpload.errors).toEqual([])
        })
        it ('shows errors for values after current date', async () => {
            jasmine.clock().install();
            jasmine.clock().mockDate(moment.tz("2017-03-23 10:00:00", "Europe/Paris").toDate())
            const fileUpload = new FileUploader("No file", 'moduleChallenge')
            fileUpload.dateCheck("08/17/2098 15:45 GMT+0100", "08/17/2099 15:45 GMT+0100", 5)        
            expect(fileUpload.errors).toEqual(['Due date: Sun Aug 17 2098 15:45:00 GMT+0100 (British Summer Time) is invalid, on line 5','Submission date: Mon Aug 17 2099 15:45:00 GMT+0100 (British Summer Time) is invalid, on line 5'])
        })
    })

    describe('LearningScoreCheck', () => {
        it ('shows no errors for values between 1 and 5', async () => {
            const fileUpload = new FileUploader("No file", 'moduleChallenge')
            fileUpload.learningScoreCheck(1, 5, 5)        
            expect(fileUpload.errors).toEqual([])
        })
        it ('shows errors for values over 5', async () => {
            const fileUpload = new FileUploader("No file", 'moduleChallenge')
            fileUpload.learningScoreCheck(9, 1000, 5)        
            expect(fileUpload.errors).toEqual(['The score: 9 on line 5 does not exist or is not within the limits for confidence score.','The score: 1000 on line 5 does not exist or is not within the limits for overall score.'])
        })
        it ('shows errors for values less than 1', async () => {
            const fileUpload = new FileUploader("No file", 'moduleChallenge')
            fileUpload.learningScoreCheck(0, -1000, 5)        
            expect(fileUpload.errors).toEqual(['The score: 0 on line 5 does not exist or is not within the limits for confidence score.','The score: -1000 on line 5 does not exist or is not within the limits for overall score.'])
        })
    })
    
    describe('Learning data check ', () =>{ 
        beforeEach(()=>{
            learningMockData = [{
                StudentId : 1,
                confidenceScore : 3,
                overallScore : 3,
                studentReason : "No reason",
                studentFeedback : "No Feedback",
                dueDate : "08/17/21 14:35",
                submissionDate : "08/17/21 14:35",
            }]
        })
        it("Works with no errors", async  () => {
            const fileUpload = new FileUploader("No file", 'selfAssessment')
            spyOn(fileUpload, 'findAllStudents').and.returnValue([{id: 1}, {id: 2}])
            fileUpload.data = learningMockData
            await fileUpload.learningDataCheck()  
            expect(fileUpload.errors).toEqual([])      
        })
        it("Works with errors", async () => {
            jasmine.clock().install();
            jasmine.clock().mockDate(moment.tz("2017-03-23 10:00:00", "Europe/Paris").toDate())
            const fileUpload = new FileUploader("No file", 'selfAssessment')
            spyOn(fileUpload, 'findAllStudents').and.returnValue([{id: 1}, {id: 2}])
            learningMockData[0].confidenceScore = 20
            fileUpload.data = learningMockData
            await fileUpload.learningDataCheck()  
            expect(fileUpload.errors).toEqual(['The score: 20 on line 1 does not exist or is not within the limits for confidence score.'])      
        })
    })
    describe('Module data check ',  () => { 
        beforeEach(()=>{
         moduleMockData = [{
            StudentId: 1,
            challengeName: 'RPS',
            language: 'nodejs',
            studentScore: 'extended',
            coachScore: 'extended',
            dueDate: '08/17/2021 15:45',
            submissionDate: '08/17/2021 15:45'
        }]
    })
        it("Works with no errors", async () => {
            const fileUpload = new FileUploader("No file", 'moduleChallenge')
            spyOn(fileUpload, 'findAllStudents').and.returnValue([{id: 1}, {id: 2}])
            fileUpload.data = moduleMockData
            await fileUpload.moduleDataCheck()  
            
            expect(fileUpload.errors).toEqual([])
        })
=======
const FileUploader = require('../../../src/fileUpload.js');
const { SelfAssessment, Student, ModuleChallenge } = require('../../../models');

describe('Testing all functions in fileUploader class ,', () => {
	describe('ModuleCheck functions ', () => {
		it('checking the projectCheck method works with no erros', async () => {
			const fileUpload = new FileUploader('No file', 'moduleChallenge');
			fileUpload.projectCheck('Chitter', 'javascript', 6);
			errors = fileUpload.errors;
			expect(errors).toEqual([]);
		});
		it('checking the projectCheck method works with errors', async () => {
			const fileUpload = new FileUploader('No file', 'moduleChallenge');
			fileUpload.projectCheck('Chitter', 'C#', 6);
			errors = fileUpload.errors;
			expect(errors).toEqual([ 'You have entered an incorrect language on line 6' ]);
		});
		it('checking the scoreCheck method works with no errors', async () => {
			const fileUpload = new FileUploader('No file', 'moduleChallenge');
			fileUpload.scoreCheck('incomplete', 'incomplete', 6);
			errors = fileUpload.errors;
			expect(errors).toEqual([]);
		});
		it('checking the scoreCheck method works with errors', async () => {
			const fileUpload = new FileUploader('No file', 'moduleChallenge');
			fileUpload.scoreCheck('incomplete', 'finished', 6);
			errors = fileUpload.errors;
			expect(errors).toEqual([ 'Coach Score: finished is invalid, on line 6' ]);
		});
	});

	describe('DateCheck', () => {
		it('shows no errors for values before current date', async () => {
			const fileUpload = new FileUploader('No file', 'moduleChallenge');
			fileUpload.dateCheck('08/17/2021 15:45', '08/17/2021 15:45', 5);
			expect(fileUpload.errors).toEqual([]);
		});
		it('shows errors for values after current date', async () => {
			const fileUpload = new FileUploader('No file', 'moduleChallenge');
			fileUpload.dateCheck('08/17/2098 15:45', '08/17/2099 15:45', 5);
			expect(fileUpload.errors).toEqual([
				'Due date: 08/17/2098 15:45 is invalid, on line 5',
				'Submission date: 08/17/2099 15:45 is invalid, on line 5'
			]);
		});
	});

	describe('LearningScoreCheck', () => {
		it('shows no errors for values between 1 and 5', async () => {
			const fileUpload = new FileUploader('No file', 'moduleChallenge');
			fileUpload.learningScoreCheck(1, 5, 5);
			expect(fileUpload.errors).toEqual([]);
		});
		it('shows errors for values over 5', async () => {
			const fileUpload = new FileUploader('No file', 'moduleChallenge');
			fileUpload.learningScoreCheck(9, 1000, 5);
			expect(fileUpload.errors).toEqual([
				'The score: 9 on line 5 does not exist or is not within the limits for confidence score.',
				'The score: 1000 on line 5 does not exist or is not within the limits for overall score.'
			]);
		});
		it('shows errors for values less than 1', async () => {
			const fileUpload = new FileUploader('No file', 'moduleChallenge');
			fileUpload.learningScoreCheck(0, -1000, 5);
			expect(fileUpload.errors).toEqual([
				'The score: 0 on line 5 does not exist or is not within the limits for confidence score.',
				'The score: -1000 on line 5 does not exist or is not within the limits for overall score.'
			]);
		});
	});
>>>>>>> 4ad3001 (added tests and fixed relating bugs)

	describe('Learning data check ', () => {
		beforeEach(() => {
			learningMockData = [
				{
					StudentId       : 1,
					confidenceScore : 3,
					overallScore    : 3,
					studentReason   : 'No reason',
					studentFeedback : 'No Feedback',
					dueDate         : '08/17/21 14:35',
					submissionDate  : '08/17/21 14:35'
				}
			];
		});
		it('Works with no errors', async () => {
			const fileUpload = new FileUploader('No file', 'selfAssessment');
			spyOn(fileUpload, 'findAllStudents').and.returnValue([ { id: 1 }, { id: 2 } ]);
			fileUpload.data = learningMockData;
			await fileUpload.learningDataCheck();
			expect(fileUpload.errors).toEqual([]);
		});
		it('Works with errors', async () => {
			const fileUpload = new FileUploader('No file', 'selfAssessment');
			spyOn(fileUpload, 'findAllStudents').and.returnValue([ { id: 1 }, { id: 2 } ]);
			learningMockData[0].confidenceScore = 20;
			fileUpload.data = learningMockData;
			await fileUpload.learningDataCheck();
			expect(fileUpload.errors).toEqual([
				'The score: 20 on line 1 does not exist or is not within the limits for confidence score.'
			]);
		});
	});
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
			const fileUpload = new FileUploader('No file', 'moduleChallenge');
			spyOn(fileUpload, 'findAllStudents').and.returnValue([ { id: 1 }, { id: 2 } ]);
			fileUpload.data = moduleMockData;
			await fileUpload.moduleDataCheck();

			expect(fileUpload.errors).toEqual([]);
		});

		it('Works with errors', async () => {
			const fileUpload = new FileUploader('No file', 'moduleChallenge');
			spyOn(fileUpload, 'findAllStudents').and.returnValue([ { id: 1 }, { id: 2 } ]);
			moduleMockData[0].language = 'C#';
			fileUpload.data = moduleMockData;
			await fileUpload.moduleDataCheck();

			expect(fileUpload.errors).toEqual([ 'You have entered an incorrect language on line 1' ]);
		});
	});
});
