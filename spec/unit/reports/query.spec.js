require('dotenv').config();
const truncateTables = require('../../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../../test/ReportGroupTests/create-students')
const createModuleChallenges = require('../../../test/ReportGroupTests/create-module-challenges')
const Query = require('../../../src/reports/query')

describe("information we get back from query is correct", function() {
    let queryClass
    let rawQuery
    beforeEach( async () => {
        await truncateTables()
        await createCohorts()
        await createStudents()
        await createModuleChallenges()
        queryClass = new Query()
        rawQuery = await queryClass.getQuery(1)
    })

    it("queries the correct challenges", async function() {
        expect(rawQuery.rows[0]['ModuleChallenges.studentScore']).toEqual("complete")  
    })

    it("queries gender information correctly", async function() {
        expect(rawQuery.rows[0].gender).toEqual("male")
        expect(rawQuery.rows[1].gender).toEqual("male")
        expect(rawQuery.rows[2].gender).toEqual("female")
        expect(rawQuery.rows[3].gender).toEqual("female")
    })

    it("queries background information correctly", async function() {
        expect(rawQuery.rows[0].background).toEqual("White")
        expect(rawQuery.rows[1].background).toEqual("White")
        expect(rawQuery.rows[2].background).toEqual("Black")
        expect(rawQuery.rows[3].background).toEqual("Black")
    })
})