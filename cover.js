let loggedIn = false;
let username;
let password;

do{
    username = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`);

    if (username === "admin" && password === "1234") {
        loggedIn = true;
        alert("Login successful!"); }
    
    else {
        alert("Invalid username or password. Please try again.");
    }
}
while(!loggedIn)