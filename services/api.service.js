import axios from 'axios'
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js'

const getWeather = async city => {

    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)
    if (!token) {
        throw new Error('Api does not exist, -t [API_KEY] for saving token')
    }

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric',
        }
    })
    return data
}

export { getWeather }