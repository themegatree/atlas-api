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

module.exports = dateCheck