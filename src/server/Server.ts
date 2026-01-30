import express from "express";
import "dotenv/config";

import './shared/services/TranslationsYup';
import { router } from "./routes/";
import { Knex } from './database/knex';


const server = express();

server.use(express.json());
server.use(router);

// Exporta uma promise que garante que as migrations rodaram
export const serverReady = Knex.migrate.latest()
    .then(() => {
        console.log('Migrations executadas com sucesso!');
        return server;
    })
    .catch((err) => {
        console.error('Erro ao executar migrations:', err);
        throw err;
    });