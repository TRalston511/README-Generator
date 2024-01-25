// Function to generate markdown

function generateMarkdown(data) {
    return `# ${data.title}
    ## User Story
    ${data.user-story}
    ## Resources 
    ${data.resources}
    ## Repository Link
    ${data.repo-link}
    ## Application Link 
    ${data.app-link}
    ## Github Link
    ${data.github-link}
    ## Contributors
    ${data.contributors}
    `;
}