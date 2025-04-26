const bcrypt = require("bcrypt"); // bcrypt

const saltRounds = 10; // data processing time

const password = "Thisismypassword";
console.log("Password: ", password);

const salt = bcrypt.genSaltSync(saltRounds);
console.log("Salt: ", salt);

const hashPassword = bcrypt.hashSync(password, salt);
console.log("Hashed Password: ", hashPassword);
