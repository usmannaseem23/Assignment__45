// Assignment # 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available
// Array of Current Users
let current_users = ["Usman", "umar", "Haris", "Noman", "kamran"];
// Array of New Users
let new_users = ["Bilal", "Omair", "Umar", "Mahad", "Haris"];
// loop
new_users.forEach(newoneuser => {
    let ourCondition = current_users.some(current_oneusers => current_oneusers.toLowerCase() === newoneuser.toLowerCase());
    if (ourCondition) {
        console.log(`Sorry ${newoneuser} is already taken`);
    }
    else {
        console.log(`This Username ${newoneuser} is available`);
    }
});
export {};
