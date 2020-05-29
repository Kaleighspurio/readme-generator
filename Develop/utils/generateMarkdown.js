function generateMarkdown(data) {
  const contents = data.tableOfContents.join("\n");
  
  return `
# ${data.projectTitle}
## Badges
![badge](${data.badge})
## Description
${data.description}
## Table of Contents
${contents}
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
