import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";



export const count = async (filter = ''): Promise<number | Error> => {
    try {
        const result = await Knex(ETableNames.CIDADE)
            .where('nome', 'like', `%${filter}%`)
            .count<[{ count: number }]>('* as count');
        
        if (!result[0]) return new Error('Erro ao consultar a quantidade de registros');
        
        const count = Number(result[0].count);
            
        if(Number.isInteger(count)) return count;

        return new Error('Erro ao consultar a quantidade de registros');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar a quantidade de registros');  
    }
};