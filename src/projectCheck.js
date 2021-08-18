function projectCheck(challenge, language, counter) {
    const challengeNames = ['Chitter', 'RPS', 'News Summary', 'Scrabble', 'Bank', 'Airport']
    const languages = ['nodejs', 'javascript', 'java']
    if (!challengeNames.includes(challenge)) {
        errors.push(`You have entered an incorrect challenge name on line ${counter}`)
        // console.log('just pushed something to errors line 154')
        // errors.forEach(i => { console.log(`${i} line 163`)})
    }
    if (!languages.includes(language)) {
        errors.push(`You have entered an incorrect language on line ${counter}`)
        // errors.forEach(i => { console.log(`${i} line 167`)})
    }
    //return error
}

module.exports = projectCheck