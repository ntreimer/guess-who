console.log('Here are all the available people:', people);

$(document).ready(onReady);

function displayProfiles(array) {
    for (person of array) {
        $('#pictures-here').append(`
        <div><img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}"></div>
        `);
    }
}

function onReady() {
    displayProfiles(people);
}//end onReady