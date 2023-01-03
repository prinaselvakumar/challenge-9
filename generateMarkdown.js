// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return ``;
  return `![license](https://img.shields.io/badge/license-${license}-blue)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return ``;
  return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/MIT)`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return ``;
  return renderLicenseLink(license);
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const gitHub = `https://github.com/${data.username}`;

  return `# ${data.title}

  ## Project Description
    Here is what this project does: ${data.description}.
    
    
    ## Table of Contents
    1. [Project Description](#project description)
    2. [Package(s) Used](#package used)
    3. [Technology Used](#technologies used)
    5. [Tests](#tests)
    6. [Questions](#questions)
    7. [License](#license)

  ## Package Used
    The package that was used was: ${data.package}

  ## Technologies Used
    ${data.technologies}

  ## Test
    Run this command to test this: ${data.tests}


  ## Questions
    How to reach me:
      \nEmail:  ${data.email}
      \nGitHub: ${data.username}


  ## License
    ${data.license}


  ## Demonstration
  
`;
}

module.exports = { generateMarkdown };

