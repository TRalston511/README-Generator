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
        name: "user-story",
        message: "Describe the User Story for this Project"
    },
    {
        type: "input",
        name: "resources",
        message: "List any Languages and Technologies used"
    },
    {
        type: "input",
        name: "repo-link",
        message: "Share your link to repository"
    },
    {
        type: "input",
        name: "app-link",
        message: "Share your link to application"
    },
    {
        type: "input",
        name: "github-link",
        message: "Share your link to your github"
    },
    {
        type: "input",
        name: "contributors",
        message: "Name/List Contributors to the project"
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