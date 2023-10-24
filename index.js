const inquirer = require('inquirer');
const fs = require('fs');
const printReadMe =  ({title, description , installation , usage, license, contributing, test, ghUsername, questions}) => fs.writeFile('./generatedReadME/README.md',`# ${title}




## Description

${description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## License
This project was created with the ${license} license.

## How to Contribute

${contributing}

## Tests

${test}

## Questions

${questions}
[${ghUsername}](https://github.com/${ghUsername})




` , (err) =>
  err ? console.error(err) : console.log('Success!'));




inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of the project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a description for your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Write installation instructions.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How is the project used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What are the rules for contributing to the repo?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'How can the project be tested?',
      name: 'test',
    },
    {
      type: 'list',
      message: 'What is your github url?',
      choices:["MIT License",
      "GNU General Public License v3.0",
      "Apache License 2.0",
      "BSD 2-Clause \"Simplified\" License",
      "BSD 3-Clause \"New\" or \"Revised\" License",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "Common Development and Distribution License 1.0",
      "Eclipse Public License 2.0",
      "The Unlicense",
      "GNU General Public License v2.0 or later",
      "GNU Lesser General Public License v3.0",
      "Do What The F*ck You Want To Public License",
      "Microsoft Public License",
      "GNU Lesser General Public License v2.0 or later",
      "SIL Open Font License 1.1",
      "zlib License"] ,
      name: 'license',
    },
    {
      type: 'input',
      message: 'If someone has questions, what is the best way to reach you(Provide contact info)?',
      name: 'questions',
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'ghUsername',
    },
  ])
  .then((response) => printReadMe(response));
