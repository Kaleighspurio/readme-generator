function generateMarkdown(data) {
  return `
# ${data.projectTitle}
## Description
${data.description}
## Table of Contents
* ${data.tableOfContents[0]}
* ${data.tableOfContents[1]}
* ${data.tableOfContents[2]}
* ${data.tableOfContents[3]}
* ${data.tableOfContents[4]}
## Installation
${data.instructions}
## Usage 
${data.usage}
## License
${data.license}
## Contributors
${data.contributors}
## Tests
${data.tests}

### Contact
![Github image](${data.profilePicture})

${data.email}
`;
}

module.exports = generateMarkdown;
