var inquirer = require("inquirer");
var chalk = require("chalk");
var fs = require("fs");
var ncp = require("ncp");
var path = require("path");

const questions = [];
questions.push({
  type: "list",
  name: "type",
  message: "Please choose the type of project you want to setup",
  choices: ["Web", "Hybrid", "Native"],
  default: "web"
});

questions.push({
  type: "input",
  name: "directory",
  message: "Please name your project"
});

function create() {
  inquirer.prompt(questions).then(answers => {
    console.log(`Type: ${answers.type}`);
    console.log(`Directory: ${answers.directory}`);

    var ce = require("command-exists").sync;

    console.log(
      chalk.blue("Checking to see if you have the proper software installed.")
    );
    if (ce("webpack")) {
      console.log(chalk.yellow("Webpack...") + chalk.green("installed"));
    } else {
      console.log(chalk.yellow("Webpack...") + chalk.red("missing"));
    }
    if (ce("git")) {
      console.log(chalk.yellow("Git...") + chalk.green("installed"));
    } else {
      console.log(chalk.yellow("Git...") + chalk.red("missing"));
    }
    console.log(chalk.blue("Creating new project:'" + answers.directory));
    if (!fs.existsSync(answers.directory)) {
      fs.mkdirSync(answers.directory);
    }
    var templatePath = path.join(__dirname, "..", "templates", "web");
    ncp(templatePath, answers.directory, err => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        console.log(`Copied.`);
      }
    });
  });
}

module.exports = create;