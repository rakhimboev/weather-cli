import getArgs from "./helpers/args.js"
import { printError, printSuccess, printHelp } from "./services/log.services.js"
import { saveKeyValue, getKeyValue } from "./services/storage.service.js"

const saveToken = async token => {
    try {
        await saveKeyValue('token', token)
        printSuccess('Token saved');
    } catch (err) {
        printError(err.message)
    }
}

const startCLI = () => {
    const args = getArgs(process.argv)
    console.log(args)
    if(args.h) {
        printHelp()
    }
    if (args.s) {
        //save city
    }
    if (args.t) {
        saveKeyValue('token', args.t)
    }
    //result
}
startCLI()