/*
Recursive function - this is the function that calls itself
*/

function login() {
    console.log("Trying to login...");
    login();
}

login();