const bcrypt = require('bcryptjs');
const saltRounds = 10;
const password = "GeeksForGeeks";

// var hash = bcrypt.genSalt(saltRounds, (err, salt) => {
//     if (err) { console.log(err); }
//     else { 
//         bcrypt.hash(password, salt, (err, hash) => {
//             if (err) { console.log(err); }
//             else { console.log(hash); }
//         });
//     }
// });

// bcrypt.hash(password, saltRounds, (err, hash) => {
//     if (err) { console.log(err); }
//     else { console.log(hash); }
// })

const passByUser = "GeeksForGeeks";
const hash = '$2a$10$IwVO8uFpWHA28ca.9isGN.2ctYeRExvcX6iN4v4eJ6ZUFvn6juDVK';
 
bcrypt.compare(passByUser, hash, function(err, res) {
  if (err) {
    console.log(err)
  } else if (!res) {
    console.log("Password is incorrect!");
  } else {
    console.log("Authentication Successfull!");
  }
})