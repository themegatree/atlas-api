module.exports = function dateCheck (obj) {
  const errors = []
  const currentDate = Date.now()
  const newDueDate = new Date(obj.dueDate)
  const newSubmissionDate = new Date(obj.submissionDate)
  if (newDueDate > currentDate) {
    errors.push(`Due date: ${obj.dueDate} is invalid, on line ${obj.counter}`)
  }
  if (newSubmissionDate > currentDate) {
    errors.push(`Submission date: ${obj.submissionDate} is invalid, on line ${obj.counter}`)
  }
  return errors
}