// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does this project do?',
    },
    {
        type: 'input',
        name: 'package',
        message: 'What packages are needed for this project?',
    },
    {
        type: 'input',
        name: 'technologies',
        message: 'What technologies are used for this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like?',
        choices: ['APACHE 2.0', 'MIT', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command is used to run a test',
    }
];

inquirer.prompt(questions)
    .then((response) => {
        generateMarkdown(response);
        writeToFile("README.md", generateMarkdown(response));
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
    });
};

// TODO: Create a function to initialize app


// Function call to initialize app

