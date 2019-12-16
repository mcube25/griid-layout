var database = [
    {
        username:'pale',
        password: 'supercorrect'
    }
];
var newsfeed = [
    {
        username:'bobby',
        timeline:'so tired from all these js',
},
{
    username:'sally',
    timeline:'js is so cool',  
}
];
var usernamePrompt= prompt(('whats your username');
var passwordPrompt= prompt(('whats your passwor');
function signIn(user, pass){
    if (user ===database[0].username && pass===database[0].password){
        console.log(newsfeed);
    } else {
        alert('sorry wrong user or password');
    }
}
//signIn(usernameprompt, passwordprompt);
signIn(usernamePrompt, passwordPrompt);