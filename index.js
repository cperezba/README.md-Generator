// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const generateREADME = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: `What is the project's title?`,
  },
  {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'stack',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    type: 'list',
    message: 'What is your project licence?',
    name: 'licence',
    choices: ['MIT', 'Apache', 'GPL']
  },
  {
    type: 'input',
    name: 'github',
    message: `What is your GitHub username?`,
  },
  {
    type: 'input',
    name: 'email',
    message: `What is your email?`,
  }];


inquirer.prompt(questions).then((responses) => {
    const filename = `${responses.title.toLowerCase().split(' ').join('')}.json`;
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