$(document).ready(onReady);

function displayProfiles(array) {
     for (person of array) {
         $('#pictures-here').append(`
         <div class="profile-pic"><img src="https://github.com/${person.githubUsername}.png?size=220" alt="Profile image of ${person.name}"></div>
         `);//end append
     }//end for
}//end displayProfiles

function displayName(number) {
    $('#name-here').empty();
    $('#name-here').append(`
        Find me: <span>${ people[number].name }</span>
    `);
}//end displayName

function letsPlay() {
    const randomProfile = randomNumber(0, (people.length - 1));
    displayName (randomProfile);
}//end letsPlay

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}//end randomNumber

function onReady() {
    displayProfiles(people);
    $('#play-button').on('click', letsPlay);
}//end onReady