module.exports = function dateCheck (dueDate, submissionDate, counter) {
  const errors = []
  const currentDate = Date.now()
  const newDueDate = new Date(dueDate)
  const newSubmissionDate = new Date(submissionDate)
  if (newDueDate > currentDate) {
    errors.push(`Due date: ${dueDate} is invalid, on line ${counter}`)
  }
  if (newSubmissionDate > currentDate) {
    errors.push(`Submission date: ${submissionDate} is invalid, on line ${counter}`)
  }
  return errors
}
