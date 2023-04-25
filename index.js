const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//questions array to prompt for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please add you installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your application:',
      choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];
  

// TODO: Create a function to write README file
//Creates/writes to ReadMe file.
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (e) =>
    e ? console.error(e) : console.log('README.md file updated successfully!')
  );

}

// TODO: Create a function to initialize app

// Initialized app to prompt questions for the user to answer to populate the Readme file.
function init() {

    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
      });

}

// Function call to initialize app
init();
