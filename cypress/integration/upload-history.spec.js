import 'cypress-file-upload';

describe("File upload page", function() {
 
  it("Should allow a file to be uploaded", function() {
    cy.task('taskTruncateTables')
    cy.task('taskCreateStudent')  
    cy.visit('/assessments/upload')
    cy.get('#choose-file').should('exist')
    cy.fixture('mock.csv').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'mock.csv',
            mimeType: '.csv'
        });
    });
    cy.get('#upload').should('exist')
    cy.get('select').select('Module Challenge')
    cy.get('#upload').click()
    cy.get('#response').should('exist')
  })

  it('Should display that upload in the upload history', function(){
      cy.visit('/assessments/upload/history')
      cy.get('#fileHistory-0').should('exist')
  })

  it('Should display a button that allows the user to see what the errors are', function(){
      cy.get('#errorDisplayButton').click()
      cy.get('#errorMessages').should('have.css', 'fontSize', '12px')
  })

  it('Should display a button that allows the user to hide what the errors are', function(){
    cy.get('#errorDisplayButton').click()
    cy.get('#errorMessages').should('have.css', 'fontSize', '0px')
})
  it('Should display the history in red if the upload was unsuccessful', function(){
    cy.get('#fileHistory-0').should('have.css', 'color', 'rgb(255, 0, 0)')
  })
})

describe("File upload page", function() {
    it('Should display the history in green if the upload was successful', function(){
    
    cy.visit('/assessments/upload')
    cy.get('#choose-file').should('exist')
    cy.fixture('mock-success.csv').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'mock-success.csv',
            mimeType: '.csv'
        });
    });
    cy.get('#upload').should('exist')
    cy.get('select').select('Module Challenge')
    cy.get('#upload').click()
    cy.get('#response').should('exist')
    cy.visit('/assessments/upload/history')
    cy.get('#fileHistory-1').should('have.css', 'color', 'rgb(0, 128, 0)')
  })
    })