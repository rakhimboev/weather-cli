import chalk from "chalk";
import dedent from "dedent-js";

const printError = err => {
    console.log(chalk.bgRed("ERROR ") + err);
}

const printSuccess = message => {
    console.log(chalk.bgGreen("Success ") + message);
}

const printHelp = () => {
    console.log(dedent`${chalk.bgCyan('Help')}
-s [CITY] for insert city
-h for help
-t [API_KEY] for saving token
`)
}

export { printError, printSuccess, printHelp }