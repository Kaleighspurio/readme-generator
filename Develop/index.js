const inquirer = require('inquirer');
const dotenv = require('dotenv');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
 "Do you want to add a badge?", 
"What is your project title?", 
"What is the description of your project?", 
"what is in your table of contents?", 
"What are the instrutions for install?", 
"What is the usage for this project?", 
"What are the licenses?", 
"Who are the contributors for this project?", 
"What are your tests?", 
"What is your GitHub profile picture?",
"What is your GitHub user email?"
];

function writeToFile(fileName, data) {
    // where do I want the file placed? do I need to check?  use a relative path?
    // create a file named fileName:  const fileName = fs.writeFile?
    // write to file fileName the data

}

function init() {
    // initialize stuff that I need here
}

init();
