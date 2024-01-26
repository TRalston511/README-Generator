// Function to generate markdown

function generateMarkdown(data) {
    return `# ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents
    - Installation
    - Usage
    - License
    - Contributing
    - Tests
    - Links
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ${data.license}
    ## Contributing
    ${data.contributing}
    ## Links
    - Repository Link
    ${data.repo}
    - Application Link 
    ${data.app}
    - Github Link
    ${data.github}
    `;
}

module.exports = generateMarkdown;