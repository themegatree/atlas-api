const { Student } = require('../../models');

const genderRatio = async () => {
    const genderQuery = await Student.findAndCountAll({
        raw: true,
        attribute: ['gender']
    });

    const total = genderQuery.count;
    const genders = genderQuery.rows.map(row => row.gender);
    const uniqueGender = genders.filter((gender, index) => {
        return index === genders.indexOf(gender)
    })
    const genderArr = []
    uniqueGender.forEach(gender => genderArr.push({type: gender, number: 0, percentage: 0}));
    genderArr.forEach(gender => {
        const currentGender = gender.type;
        const numberOfCurrentGender = genders.filter(gender => gender === currentGender);
        gender.number = numberOfCurrentGender.length
        gender.percentage = (numberOfCurrentGender.length / total * 100).toFixed(2).toString();
    })

    return {
      gender: genderArr
    }
}

module.exports = genderRatio
