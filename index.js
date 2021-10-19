// Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./generateMarkdown")
const fileName = "README.md"
// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
]);

};

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your Markdown file "+data.projName+" has been created!")
    });
}

// TODO: Create a function to initialize app
async function init() {
    questions()
    .then((data) => writeToFile("README.md", data))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
