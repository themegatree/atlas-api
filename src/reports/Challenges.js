class Challenges {
  constructor(){
    this.data = [];
  }

  getUnique(challenges) {
    return challenges.filter((challenge, index) => challenges.indexOf(challenge) === index);
  }

  build(names,scores) {
    // Build the JS skeleton 
    // Set type of each object in the data array to the challenge name
    names.forEach(name => this.data.push({type: name}));
    // Call the percentage method on the scores
    // Set the percentage key in each data object to the percentage method in the scores
  }

}
module.exports = Challenges;