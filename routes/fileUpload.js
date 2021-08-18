const express = require('express')
const router = express.Router()
const upload = require('express-fileupload')
const csv = require('csv-parser')
const fs = require('fs')
const os = require('os')
const errors = []



const { SelfAssessment, Student, ModuleChallenge } = require('../models')

router.post('/', async  (req,  res) => {

    let table='';
    if (req.body.assessmentType === "selfAssessment"){
        table = SelfAssessment
    }
    else if (req.body.assessmentType === "moduleChallenge")
    { 
       table = ModuleChallenge
    }
    else {
       table = undefined
    }
    console.log(table)
    sampleFile = req.files.upload;
    uploadPath = os.tmpdir() +'\\' + sampleFile.name;
    if (table) {
        sampleFile.mv(uploadPath,  function(err) {
            if (err) {
                console.log("error")
            } else {
                console.log("success")
                fileCheck(uploadPath, table)
            }
        })
    }
})

function fileCheck(csvFile, database) {
    let results = []
    fs.createReadStream(csvFile) 
    .pipe(csv({}))
    .on('data', (data) =>  {results.push(data);})
    .on('end', () => { 
        if ( database === ModuleChallenge) {
             moduleDataCheck(results, csvFile)
        } 
        else { 
            learningDataCheck(results, csvFile)
        }
    })
}

async function addData(objectData, database) {
    await database.create({

    })
}

function learningScoreCheck(confidenceScore,  overallScore, counter) {

    if ( 0 > confidenceScore > 5){
         errors.push(`The score on line ${counter} does not exist or is not within the limits for confidence score.`)
    } 
    if ( 0 > overallScore > 5){
        errors.push(`The score on line ${counter} does not exist or is not within the limits for overall score.`)
   } 
}

async function learningDataCheck(data,csvFile)  {
    fs.unlink(csvFile, function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });
    
    let counter = 0
    const students = await Student.findAll({
        attributes: ['id']
    })
    data.forEach(dataObject => {
        counter++
        if (!students.includes(dataObject.StudentId)) {
            errors.push(`Student id: ${dataObject.StudentId} does not exist, on line ${counter}`);
        }
        
        learningScoreCheck(dataObject.confidenceScore,data.overallScore,counter)
        dateCheck(dataObject.dueDate, dataObject.submissionDate)
    })
    console.log(errors)
}

async function moduleDataCheck(data, csvFile) { 

    fs.unlink(csvFile, function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });
    
    
    const students = await Student.findAll({
        attributes: ['id']
    })
   
    let counter=0;
    
    data.forEach(dataObject => { 
        counter++
        if (!students.includes(dataObject.StudentId)) errors.push(`Student id: ${dataObject.StudentId} does not exist, on line ${counter}`);
        projectCheck(dataObject.challengeName, dataObject.language, counter)
        dateCheck(dataObject.dueDate, dataObject.submissionDate, counter)
        scoreCheck(dataObject.studentScore, dataObject.coachScore, counter);
    })
    
    console.log(errors)
}

function projectCheck(challenge, language, counter) {
    const challengeNames = ['Chitter', 'RPS', 'News Summary', 'Scrabble', 'Bank', 'Airport']
    const languages = ['nodejs', 'javascript', 'java']
    if (!challengeNames.includes(challenge)) {
        errors.push(`You have entered an incorrect challenge name on line ${counter}`)
    }
    if (!languages.includes(language)) {
        errors.push(`You have entered an incorrect language on line ${counter}`)
    }
}

function scoreCheck (student, coach, counter) {
    const scores = ['incomplete', 'complete', 'extended']
    if (!scores.includes(student)) {
        errors.push(`Student Score: ${student} is invalid, on line ${counter}`);
    }
    if (!scores.includes(coach)) {
        errors.push(`Coach Score: ${coach} is invalid, on line ${counter}`);
    }
}

function dateCheck(dueDate, submissionDate, counter) {
    const currentDate = Date.now()
    dueDate = new Date(dueDate)
    submissionDate = new Date(submissionDate)
    if (dueDate > currentDate) {
        errors.push(`Due date: ${dueDate} is invalid, on line ${counter}`);
    }
    if (submissionDate > currentDate) {
        errors.push(`Submission date: ${submissionDate} is invalid, on line ${counter}`);
    }
}

module.exports = router