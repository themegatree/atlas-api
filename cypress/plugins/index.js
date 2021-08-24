/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const truncateTables = require('../../test/ReportGroupTests/truncate-tables.js')
const createCohort = require('../../test/ReportGroupTests/create-cohorts.js')
const createStudents = require('../../test/ReportGroupTests/create-students.js')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    async taskTruncateTables() {
      console.log('running truncateTables task')
      await truncateTables()
      return null
    },
    async taskCreateCohort() {
      console.log('running createCohort task')
      await createCohort()
      return null
    },
    async taskCreateStudents() {
      console.log('running createStudents task')
      await createStudents()
      return null
    }
  })
}
