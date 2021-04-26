const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Choice = require('inquirer/lib/objects/choice');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: `What is this employee's role?`,
      choices: [
        'Manager',
        'Engineer',
        'Intern'
      ]
    },
    {
      type: 'input',
      name: 'name',
      message: `What is the employee's name?`
    },
    {
      type: 'input',

    }
  ])
}