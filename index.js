// Packages needed for the application

const fs = required("fs");
const inquirer = required("inquirer");

// Array of Questions to Utilize Input and Generate README 

const questions = [
    {
        type: "input",
        name: "title",
        message: "Name the Project"
    },
    {
        type: "input",
        name: "user story",
        message: "Describe the User Story for this Project"
    },
    {
        type: "input",
        name: "resources",
        message: "List any Languages and Technologies used"
    },
    {
        type: "input",
        name: "repo link",
        message: "Share your link to repository"
    },
    {
        type: "input",
        name: "app link",
        message: "Share your link to application"
    },
    {
        type: "input",
        name: "github link",
        message: "Share your link to your github"
    },
]