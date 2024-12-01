import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

import __dirname from './utils/index.js';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';
import MongoSingleton from './config/mondodb-singleton.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = new MongoSingleton();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks',mocksRouter);


(async () => {
    try {
        await connection.getInstanceMongoDB;
        console.log('Servidor listo y conectado a la base de datos');
        
        app.listen(PORT,()=>console.log(`Corriendo en http://localhost:${PORT}`))
    } catch (error) {
        console.error('No se pudo iniciar la aplicación:', error.message);
    }
})();


