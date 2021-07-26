// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licence) {
  if (licence === 'None') {
    return '';
  } else {
  return `![Badge](https://img.shields.io/badge/licence-${licence}-brightgreen)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.titleOfProject}
${renderLicenseBadge(responses.licence)}
## Table of Contents:\n
### [Description](#description-header)\n
### [Installation](#installation-header)\n
### [Usage](#usage-header)\n
### [Tests](#tests-header)\n
### [Licence](#licence-header)\n
### [Credits](#credits-header)\n
### [Questions](#questions-header)\n
---

<br/>

## <a id="description-header"></a> Description\n
${responses.whySection}\n
${responses.whatSection}\n


<br/>

## <a id="installation-header"></a> Installation\n
${responses.installationSection}


<br/>

## <a id="usage-header"></a> Usage\n
${responses.usageSection}


<br/>

## <a id="tests-header"></a> Tests\n


<br/>

## <a id="credits-header"></a> Credits\n
${responses.creditsSection}


<br/>

## <a id="licence-header"></a> Licence\n
${responses.titleOfProject} is released under the ${responses.licence} licence.\n

${responses.hello === undefined ? '' : responses.hello}
<br/>

## <a id="questions-header"></a> Questions\n
For more information and suggestions you can contact me at ${responses.email}.\n
For a list of other projects and repos visit https://github.com/${responses.github}\n


---
`;
}

module.exports = generateMarkdown;
