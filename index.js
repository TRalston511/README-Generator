// Packages needed for the application

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

// Array of Questions to Utilize Input and Generate README 

const questions = [
    {
        type: "input",
        name: "title",
        message: "Name the Project"
    },
    {
        type: "input",
        name: "description",
        message: "Describe the User Story for this Project"
    },
    {
        type: "input",
        name: "installation",
        message: "Describe installation requirements"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe usage of the application"
    },
    {
        type: "input",
        name: "license",
        message: "Identify your project license"
    },
    {
        type: "input",
        name: "contributing",
        message: "Name any contributors to your project"
    },
    {
        type: "input",
        name: "repo",
        message: "Share your link to repository"
    },
    {
        type: "input",
        name: "app",
        message: "Share your link to application"
    },
    {
        type: "input",
        name: "github",
        message: "Share your link to your github"
    },
]

// Initializing Application 

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating README.md file");
        writeToFile('./README.md', generateMarkdown({...responses}));
    });
}

// Writing README file 

function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
init();