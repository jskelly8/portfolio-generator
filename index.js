// WHATS THE FIRST THING I SHOULD DO BEFORE RUNNING "node index.js" ON THE TERMINAL
// HINT: IF WE HAVE A PACKAGE.JSON THERE ARE DEPENDENCIES THAT NEED TO BE INSTALLED

// TODO: REQUIRE THE DEPENEDENCIES THAT YOULL USE AND THE NODE LIBRARY YOU'LL USE
// --- Installed Inquirer
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: USE THE PARAMETERS IN THIS FUNCTION IN THERE CORRESPONDING AREA'S WITH IN THE BACK TICKS
const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3><span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
  .prompt([
    // TODO: INCLUDE YOUR INQUIRER PROMPTS HERE
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where do you live?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn?',
      name: 'linkedin',
    }
  ])
  .then((answers) => {
    const htmlPageContent = //TODO: CALL THE "generateHTML" function in this variable and pass the "answer parameters"
      generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      // TODO: INCLUDE A COMMENT TO EXPLAIN WHAT THE CODE BELOW IS DOING
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
