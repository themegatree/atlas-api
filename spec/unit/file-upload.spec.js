const FileUploader = require('../../src/fileUpload')

describe('Tests work for correct files', () => { 
    it ('Works for Module Challenge', () => {
        const fileUpload = new FileUploader('../../passingChallenge', 'moduleChallenge')
    })
})