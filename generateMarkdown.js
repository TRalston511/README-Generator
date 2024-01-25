// Function to generate markdown

function generateMarkdown(data) {
    return `# ${data.title}
    ## User Story
    ${data.user}
    ## Resources 
    ${data.resources}
    ## Repository Link
    ${data.repo}
    ## Application Link 
    ${data.app}
    ## Github Link
    ${data.github}
    ## Contributors
    ${data.contributors}
    `;
}

module.exports = generateMarkdown;