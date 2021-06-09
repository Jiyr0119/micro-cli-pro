const { prompt } = require("inquirer");
const program = require("commander");
const chalk = require("chalk");
const download = require("download-git-repo");
const ora = require("ora");
const fs = require("fs");
const path = require("path");

const option = program.parse(process.argv).args[0];
const defaultName = typeof option === "string" ? `${option}-main-project`: "main-project";
const defaultNameSub = typeof option === "string" ? `${option}-micro-project` : "micro-project";
const tplList = require(`${__dirname}/../templates`);
const subTplList = require(`${__dirname}/../templates-micro`);
const tplLists = Object.keys(tplList) || [];
const subTplLists = Object.keys(subTplList) || [];
const question = [
  {
    type: "input",
    name: "name",
    message: "Main project name",
    default: defaultName,
    filter(val) {
      return val.trim();
    },
    validate(val) {
      const validate = val.trim().split(" ").length === 1;
      return validate || "Project name is not allowed to have spaces ";
    },
    transformer(val) {
      return val;
    },
  },
  {
    type: "list",
    name: "template",
    message: "Main project template",
    choices: tplLists,
    default: tplLists[0],
    validate(val) {
      return true;
    },
    transformer(val) {
      return val;
    },
  },
  {
    type: "input",
    name: "microName",
    message: "Micro project name",
    default: defaultNameSub,
    filter(val) {
      return val.trim();
    },
    validate(val) {
      const validate = val.trim().split(" ").length === 1;
      return validate || "Project name is not allowed to have spaces ";
    },
    transformer(val) {
      return val;
    },
  },
  {
    type: "list",
    name: "microTemplate",
    message: "Micro project template",
    choices: subTplLists,
    default: subTplLists[0],
    validate(val) {
      return true;
    },
    transformer(val) {
      return val;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Project description",
    default: "React project",
    validate(val) {
      return true;
    },
    transformer(val) {
      return val;
    },
  },
  {
    type: "input",
    name: "author",
    message: "Author",
    default: "project author",
    validate(val) {
      return true;
    },
    transformer(val) {
      return val;
    },
  },
];
module.exports = prompt(question).then(
  ({ name, template, microName, microTemplate, description, author }) => {
    console.log(name,microName)
    const projectName = name;
    const templateName = template;
    const gitPlace = tplList[templateName]["place"];
    const gitBranch = tplList[templateName]["branch"];
    const projectNameMicro = microName;
    const templateNameMicro = microTemplate;
    const gitPlaceMicro = subTplList[templateNameMicro]["place"];
    const gitBranchMicro = subTplList[templateNameMicro]["branch"];
    const spinner = ora("Downloading please wait...");
    spinner.start();
    download(`${gitPlace}${gitBranch}`, `./${projectName}`, (err) => {
      if (err) {
        console.log(chalk.red(err));
        process.exit();
      }
      fs.readFile(
        `./${projectName}/package.json`,
        "utf8",
        function (err, data) {
          if (err) {
            spinner.stop();
            console.error(err);
            return;
          }
          const packageJson = JSON.parse(data);
          packageJson.name = name;
          packageJson.description = description;
          packageJson.author = author;
          var updatePackageJson = JSON.stringify(packageJson, null, 2);
          fs.writeFile(
            `./${projectName}/package.json`,
            updatePackageJson,
            "utf8",
            function (err) {
              if (err) {
                spinner.stop();
                console.error(err);
                return;
              } else {
                spinner.stop();
                console.log(chalk.green("main project init successfully!"));
                console.log(`
            ${chalk.bgWhite.black("   Run Application  ")}
            ${chalk.yellow(`cd ${name}`)}
            ${chalk.yellow("npm install")}
          `);
              }
            }
          );
        }
      );
    });
    spinner.start();
    download(`${gitPlaceMicro}${gitBranchMicro}`, `./${projectNameMicro}`, (err) => {
      if (err) {
        console.log(chalk.red(err));
        process.exit();
      }
      fs.readFile(
        `./${projectNameMicro}/package.json`,
        "utf8",
        function (err, data) {
          if (err) {
            spinner.stop();
            console.error(err);
            return;
          }
          const packageJson = JSON.parse(data);
          packageJson.name = microName;
          packageJson.description = description;
          packageJson.author = author;
          var updatePackageJson = JSON.stringify(packageJson, null, 2);
          fs.writeFile(
            `./${projectNameMicro}/package.json`,
            updatePackageJson,
            "utf8",
            function (err) {
              if (err) {
                spinner.stop();
                console.error(err);
                return;
              } else {
                spinner.stop();
                console.log(chalk.green("micro project init successfully!"));
                console.log(`
            ${chalk.bgWhite.black("   Run Application  ")}
            ${chalk.yellow(`cd ${microName}`)}
            ${chalk.yellow("npm install")}
          `);
              }
            }
          );
        }
      );
    });
  }
);
