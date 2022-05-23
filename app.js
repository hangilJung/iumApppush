const axios = require('axios')
const logger = require('./config/logger')

require('dotenv').config()

setInterval(() => {
    logger.info('앱 푸시 검사 실행')
    try {
        axios.post('http://localhost:3100/push', null)
    } catch (error) {
        logger.error(error)
    }
}, 10 * 1000)
