require('dotenv').config();
const truncateTables = require('../../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../../test/ReportGroupTests/create-students')
const QueryGenderBackground = require('../../../src/reports/queryGenderBackground')
const constants = require('../../../constants')
fdescribe("information we get back from query is correct", function() {
    let queryGenderBackground
    beforeEach( async () => {
        await truncateTables()
        await createCohorts()
        await createStudents()
        
        queryGenderBackground = new QueryGenderBackground()
      })
    it("queries gender information correctly", async function() {
        const test = await queryGenderBackground.getQuery(1)

        expect(test.rows[0].gender).toEqual("male")
    })
})