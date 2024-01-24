// Packages needed for the application

const fs = required("fs");
const inquirer = required("inquirer");

// Array of Questions to Utilize Input and Generate README 

const questions = {
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
}