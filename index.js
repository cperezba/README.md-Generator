// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const generateREADME = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'titleOfREADME',
  message: `What is the title of this README?`,
},
{
  type: 'input',
  name: 'titleOfProject',
  message: `What is this project's title?`,
},
{
  type: 'input',
  name: 'whySection',
  message: `Description: Why did you make this project?`,
},
{
  type: 'input',
  name: 'whatSection',
  message: `Description: What is the purpose of this project?`,
},
{
  type: 'input',
  name: 'installationSection',
  message: `Installation: Prompts: What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
},
{
  type: 'input',
  name: 'usageSection',
  message: `Usage: Prompts: Provide instructions and examples for use.`,
},
{
  type: 'input',
  name: 'creditsSection',
  message: `Credits: Prompts: List your collaborators, if any, with links to their GitHub profiles.
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    If you followed tutorials, include links to those here as well.
    `,
},
{
  type: 'list',
  message: 'What is your project licence?',
  name: 'licence',
  choices: ['MIT', 'Apache', 'GPL', 'None']
},
{
  type: 'input',
  name: 'github',
  message: `What is your GitHub domain name?`,
},
{
  type: 'input',
  name: 'email',
  message: `What is your email?`,
}];


function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, generateMarkdown({ ...data }), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const filename = `${responses.titleOfREADME.toLowerCase().split(' ').join('')}.json`;
    // TODO: Create a function to write README file

    writeToFile(responses.titleOfREADME, responses);
  });
}


// Function call to initialize app
init();