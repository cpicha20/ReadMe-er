//  TODO: Include packages needed for this application

//  TODO: Create an array of questions for user input
// const questions = [];

//  TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

//  TODO: Create a function to initialize app
// function init() {}

//  Function call to initialize app
// init();


const inquirer = require('inquirer');
const fs = require('fs');




inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'userName',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'userLocation',
    },
    {
      type: 'input',
      message: 'Tell me about yourself',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your linkedin url?',
      name: 'liURL',
    },
    {
      type: 'input',
      message: 'What is your github url?',
      name: 'ghURL',
    },
  ])
  .then((response) => printHTML(response));

