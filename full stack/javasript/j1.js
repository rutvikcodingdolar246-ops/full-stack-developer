const accountId = 13455
let  accountEmail = "sdfsd@gmail.com"
var  accountPassword = "1234"
accountCity = "jaipur"
let accountState;

// accountId = 2  // Not allowed

accountEmail = "dsfsdf@gmail.com"
accountPassword = "345"
accountCity = "maniya"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);

//? Prefer not to use var because of issue in block scope and functional scop 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])