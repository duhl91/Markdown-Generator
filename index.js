// Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./generateMarkdown")
// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitUser",
    },

    {
        type: "input",
        message: "What is your preferred email?",
        name: "email",
    },

    {
        type: "input",
        message: "Please enter the name of your project: ",
        name: "projName",
    },

    {
        type: "input",
        message: "Enter a brief description of your project: ",
        name: "description",
    },

    {
        type: "input",
        message: "What is needed to properly install your app?",
        name: "installation",
    },

    {
        type: "input",
        message: "What will this app be used for?",
        name: "usage",
    },

    {
        type: "list",
        message: "What license is being used?",
        name: "license",
        choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
    },

    {
        type: "input",
        message: "Please list any other contributors to this project: ",
        name: "contributors",
    },

    {
        type: "input",
        message: "How do you run a test for this app?",
        name: "testing",
    },

    {
        type: "input",
        message: "What if there is an issue with the app?",
        name: "issues",
    },
    

];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./newMD/"+fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("newREADME.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
