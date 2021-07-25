// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // return `${license}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.name}

  ${responses.stack}
  [Table of Contents](#table-of-contents)
  [Installation](#instalation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//Github and Email under Questions 


  ${renderLicenseBadge(responses.license)}
`;
}

module.exports = generateMarkdown;
