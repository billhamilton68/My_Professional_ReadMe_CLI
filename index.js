const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
