import dotenv from  'dotenv';
import program from '../process.js';


const environment = program.opts().env || 'development';
const envFile = environment === 'production' ? 'src/config/.env.production' : 'src/config/.env.development';

dotenv.config({
    path:envFile
})

export default {
    port: process.env.PORT,
    db: process.env.URL_MONGO,

}