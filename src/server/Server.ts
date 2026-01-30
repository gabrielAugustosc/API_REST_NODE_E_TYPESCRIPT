import express from "express";
import "dotenv/config";

import './shared/services/TranslationsYup';
import { router } from "./routes/";
import { Knex } from './database/knex';


const server = express();

// Executa as migrations automaticamente ao iniciar
Knex.migrate.latest()
    .then(() => {
        console.log('Migrations executadas com sucesso!');
    })
    .catch((err) => {
        console.error('Erro ao executar migrations:', err);
    });

server.use(express.json());
server.use(router);

export { server };