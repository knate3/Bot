const inquirer = require("inquirer");
const fs = require("fs");


let baseConfig = fs.readFileSync("./util/setup_base.txt", "utf8");


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


  baseConfig = baseConfig
    .replace("{{token}}", `"${answers.token}"`)
    .replace("{{prefix}}", `"${answers.prefix}"`)
    .replace("{{ownerID}}", `"${answers.id}"`);
  
  fs.writeFileSync("./config.json", baseConfig);



  console.log("REMEMBER TO NEVER SHARE YOUR TOKEN WITH ANYONE!");
  console.log("Configuration has been written, enjoy! by knate3#9781");
}());