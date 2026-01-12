import { knex, type Knex } from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.CIDADE, (table) => {
            table.bigIncrements('id').primary().index();
            table.string('nome', 150).checkLength('<=',150).notNullable().index(); 

            table.comment('Tabela de cidades');
        })
        .then(() => {
            console.log(`# Created table ${ETableNames.CIDADE}`);
        });
}


export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.CIDADE)
        .then(() => {
            console.log(`# Dropped table ${ETableNames.CIDADE}`);
        });
}

