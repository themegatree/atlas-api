async function moduleDataCheck(data,csvFile) { 
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
}

module.exports = moduleDataCheck