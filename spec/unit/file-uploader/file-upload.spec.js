const FileUploader = require('../../../src/fileUpload.js')
const file = require('./csv-files/ModuleChallenges/passing.csv')

describe('Tests work for correct files', () => { 
    it ('Works for Module Challenge', async () => {
        const fileUpload = new FileUploader(file, 'moduleChallenge')
        fileUpload.dataChecks()
        const response =  await fileUpload.addToDatabase()
        
        expect(response).toEqual(["Updated the database successfully."])
    })

    it ('Works for Self Assessment', async() => {
        const fileUpload = new FileUploader(file, 'selfAssessment')
        fileUpload.dataChecks()
        const response =  await fileUpload.addToDatabase()
        expect(response).toEqual(["Updated the database successfully."])
    })
    it ("check async ", async () => {
        const fileUpload = new FileUploader(file, 'selfAssessment')
        fileUpload.dataChecks()
        const response =  await fileUpload.addToDatabase()
        expect(response).toEqual(["Updated the database successfully."])

    })
    it ("check that it fails", )
})