const path = require('path')


export const validateBinaryFile = (filename, expectedSize) => {
  expect(filename, 'filename').to.be.a('string')
  expect(expectedSize, 'file size').to.be.a('number').and.be.gt(0)

  const downloadsFolder = Cypress.config('downloadsFolder')
  const downloadedFilename = path.join(downloadsFolder, filename)

  // for now just check the file size
  cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
  .should((buffer) => {
    // avoid logging the binary data into Command Log
    if (buffer.length !== expectedSize) {
      throw new Error(`File size ${buffer.length} is not ${expectedSize}`)
    };
});
}