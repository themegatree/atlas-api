function learningScoreCheck(confidenceScore,  overallScore, counter) {
    if ( 0 > confidenceScore > 5){
         errors.push(`The score on line ${counter} does not exist or is not within the limits for confidence score.`)
    } 
    if ( 0 > overallScore > 5){
        errors.push(`The score on line ${counter} does not exist or is not within the limits for overall score.`)
   } 
}
module.exports = learningScoreCheck