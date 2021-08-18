async function learningDataCheck(data)  {
    let counter = 0
    const students = await Student.findAll({
        attributes: ['id']
    })
    // console.log(data)
    data.forEach(dataObject => {
        // console.log(`data object: ${dataObject.StudentId}`)
        counter++
        if (!students.includes(dataObject.StudentId)) {
            errors.push(`Student id: ${dataObject.StudentId} does not exist, on line ${counter}`);
        }
        learningScoreCheck(dataObject.confidenceScore,data.overallScore,counter)
        dateCheck(dataObject.dueDate, dataObject.submissionDate)
    }) 
}

module.exports=learningDataCheck