const backgroundRatio = require("./backgroundRatio")
const genderRatio = require("./genderRatio")
const challengeRatio = require('./challengeRatio')
const totalCohorts = require('./totalCohorts')
const totalStudents = require('./totalStudents')

class Dashboard {
    constructor() {
        this.completeDashboard = {}
    }

    async create() {
        await totalStudents().then((students) => this.completeDashboard['studentTotal'] = students)
        await totalCohorts().then((cohorts) => this.completeDashboard['cohortsTotal'] = cohorts)
        await genderRatio().then((genderDashboard) => this.completeDashboard['gender'] = genderDashboard)
        await backgroundRatio().then((backgroundDashboard) => this.completeDashboard['background'] = backgroundDashboard)
        await challengeRatio().then((challengeDashboard) => this.completeDashboard['challenges'] = challengeDashboard)
        
        return this.completeDashboard
    }
}

module.exports = Dashboard;