const current_users = ["arsalan", "syed", "khan", "ali", "zain"];
const new_users = ["taimoor", "eric", "khan", "ali", "real"];

for (let i = 0; i < new_users.length; i++) {
  if (current_users[i] == new_users[i]) {
    console.log("Username taken");
  } else {
    console.log("Username not taken");
  }
}
