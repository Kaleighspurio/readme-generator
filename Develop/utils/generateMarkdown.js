function generateMarkdown(data) {
  // This will insert an asterisk in front of each item in the tableOfContents array
for (let i = 0; i < data.tableOfContents.length; i++){
  data.tableOfContents[i]= `* [${data.tableOfContents[i]}](##${data.tableOfContents[i]})`;
}
// This will make each item of the tableOfContents array be on a new line and sets it to the contents variable.
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
