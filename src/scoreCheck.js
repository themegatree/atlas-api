function scoreCheck (student, coach, counter) {
    // const scores = ['incomplete', complete, extended]
    const scores = ['incomplete', 'complete', 'extended']
    if (!scores.includes(student)) {
        errors.push(`Student Score: ${student} is invalid, on line ${counter}`);
    }
    if (!scores.includes(coach)) {
        errors.push(`Coach Score: ${coach} is invalid, on line ${counter}`);
    }
}

module.exports = scoreCheck