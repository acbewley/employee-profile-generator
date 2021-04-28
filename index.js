const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const initHTML = 
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <h1 class="fs-4">Your Company!</h1>
    </header>
  </div>
  </div id="card-here"></div>
</body>
</html>`

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
      name: 'id',
      message: `What is this employee's ID number?`
    },
    {
      type: 'input',
      name: 'email',
      message: `What is this employee's email address?`
    },
    {
      type: 'input',
      name: 'github',
      message: `What is this employee's GitHub username?`
    }
  ])
}

promptUser()
  .then(function(answers) {
    writeFileAsync("index.html", initHTML);
    
  })