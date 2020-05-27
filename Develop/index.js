const fs = require('fs');
const inquirer = require("inquirer");
const dotenv = require("dotenv");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "badge",
    message: "Do you want to add a badge? Enter it here.",
  },
  {
    type: "input",
    name: "projectTitle",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "checkbox",
    name: "tableOfContents",
    message: "What would you like in your table of contents?",
    choices: [
      "Installation",
      "Usage",
      "License",
      "Contributors",
      "Tests",
    ],
  },
  {
    type: "input",
    name: "instructions",
    message: "What are the instructions for install?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage for this project?",
  },
  {
    type: "input",
    name: "license",
    message: "What is the license?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are your tests?",
  },
  {
    type: "input",
    name: "profilePicture",
    message: "What is your GitHub profile picture?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Github user email?",
  },
];

function writeToFile(fileName, data) {
  // where do I want the file placed? do I need to check?  use a relative path?
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
      if (err) throw err;
      console.log("Your README has been created and saved!");
  });
  // create a file named fileName:  const fileName = fs.writeFile?
  // write to file fileName the data
}

function init() {
  // initialize stuff that I need here
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      writeToFile('ReadMe.md', answers);
    })
    // .catch((error) => {
    //   if (error.isTtyError) {
    //     // prompt couldn't be rendered in current environment
    //   } else {
    //     // something else went wrong
    //   }
    // });
}

init();
