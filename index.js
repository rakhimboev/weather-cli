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

const getForecast = async () => {
    try {

        const response = await getWeather(process.env.CITY ?? 'Uzbeksitan')
        console.log(response)
    } catch(error) {
        if (error?.response?.status == 404) {
            printError('City not found')
        } else if (error?.response?.status == 401) {
            printError('Invalid token')
        } else {
            printError(error.message)
        }
    }
}

const startCLI = () => {
    const args = getArgs(process.argv)
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