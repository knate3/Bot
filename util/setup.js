const inquirer = require("inquirer");
const fs = require("fs");

let file = fs.readFileSync("./config.json", "utf8");


let prompts = [
  {
    type: "input",
    name: "token",
    message: "Please enter the bot token from the application page."
  },
   {
    type: "input",
    name: "prefix",
    message: "Please enter the prefix you want."
  },
  {
    type: "input",
    name: "id",
    message: "Please enter your discord user id."
  }
];

(async function() {
  console.log("Setting Up Bot Configuration...");

 

  const answers = await inquirer.prompt(prompts);

if (!file) file = {
    "token": answers.token,
    "prefix": answers.prefix,
    "ownerID": answers.id
  
  };



fs.writeFile("./config.json", JSON.stringify(file), (err) => console.error);

  console.log("REMEMBER TO NEVER SHARE YOUR TOKEN WITH ANYONE!");
  console.log("Configuration has been written, enjoy! by knate3#9781");
}());