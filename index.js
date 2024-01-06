import getArgs from "./helpers/args.js"
import { getWeather } from "./services/api.service.js"
import { printError, printSuccess, printHelp } from "./services/log.services.js"
import { saveKeyValue, getKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js"

const saveToken = async token => {
    if (!token.length) {
        printError('Token does not exist')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token saved');
    } catch (err) {
        printError(err.message)
    }
}

const startCLI = () => {
    const args = getArgs(process.argv)
    console.log(process.env)
    if(args.h) {
        printHelp()
    }
    if (args.s) {
        //save city
    }
    if (args.t) {
        return saveToken(args.t)
    }
    getWeather(process.env.CITY ?? 'Uzbekistan')
}
startCLI()