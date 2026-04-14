require('datejs'); // Ensure datejs is available

function mergeUsernames(...args) {
    let allUsers = [];

    for (const usersArray of args) {
        allUsers = [...allUsers, ...usersArray];
    }

    return allUsers;
}

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };

    for (const usersArray of args) {
        combinedObject.users = [...combinedObject.users, ...usersArray];
    }

    // Use built-in Date to format as M/d/yyyy
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");
    return combinedObject;
}

// Example usage
const group1 = ["kerry", "opiyo"];
const group2 = ["ken", "duncan"];
const group3 = ["eve"];

console.log(mergeUsernames(group1, group2, group3));
// ["kerry", "opiyo", "ken", "duncan", "eve"]

console.log(combineUsers(group1, group2, group3));
// {
//   users: ["kerry", "opiyo", "ken", "duncan", "eve"],
//   merge_date: "4/14/2026"
// }



    

module.exports = { mergeUsernames, combineUsers };

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};