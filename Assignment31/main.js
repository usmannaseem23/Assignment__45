//Assignemt # 31
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames = ["Usman", "Umar", "Omair", "Admin", "Ali"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your are Array is empty We need to find some users!");
}
else {
    // Using foreach loop on array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
export {};
