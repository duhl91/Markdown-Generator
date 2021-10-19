// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projName}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

  # Table of Contents
  1. [Description](#description)
  2. [Installation](#Installation-Instructions)
  3. [Usage Instructions](#usage-instructions)
  4. [Testing Instructions](#testing-instructions)
  5. [Questions](#questions)

  ## Description
  ${data.description}
  ## Installation Instructions
  ${data.installation}
  ## Usage Instructions
  ${data.usage}
  ## Testing Instructions
  ${data.testing}
  ## Credits
  ${data.contributors}
  ## Questions
  ${data.issues}
  [Link to GitHub Profile](https://www.github.com/${data.gitUser})
  For additional questions please email ${data.email}

`;
}

module.exports = generateMarkdown;
