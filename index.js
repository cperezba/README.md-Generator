// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const generateREADME = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'stack',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'contact',
    choices: ['email', 'phone', 'telekinesis']
  }];


inquirer.prompt(questions).then((responses) => {
    const filename = `${responses.name.toLowerCase().split(' ').join('')}.json`;
// TODO: Create a function to write README file

fs.writeFile("README.md", generateMarkdown({...responses}), (err) =>
err ? console.log(err) : console.log('Success!')
);
});

function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


console.log("")