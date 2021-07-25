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
  [create an anchor](#Table-of-Contents)
  [create an anchor](#Instalation)
  [create an anchor](#Usage)
  [create an anchor](#License)
  [create an anchor](#Contributing)
  [create an anchor](#Tests)
  [create an anchor](#Questions)

  Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//Github and Email under Questions 


  ${renderLicenseBadge(responses.license)}
`;
}

module.exports = generateMarkdown;