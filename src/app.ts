import express from 'express'
import { routes } from './routes/routes'

const app = express();
const port = 3069;
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)

/**
 * Listen
 * @param
 */
app.listen(process.env.APP_PORT, () => {
    return console.log(`Server is listening on ${process.env.APP_URL}:${port}`)
})